import React, { useState, useEffect } from "react";
import FilmListItem from "./FilmListItem";
import SearchForm from "./SearchForm";
import Item from "../types/types";
import * as SWApi from 'swapi-ts';
import { IStarship } from "swapi-ts";

type FetchProps = (
  search?: string | undefined,
  page?: number
) => void;

function FilmList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState<string | undefined>(localStorage.getItem('query') || '');

  function convertToItemArray(starships: IStarship[]): Item[] {
    return starships.map((starship) => {
      return {
        name: starship.name,
        url: starship.url,
        manufacturer: starship.manufacturer,
      };
    });
  }

  const fetchFilms: FetchProps = (search = undefined, page = 1) => {
    setIsLoading(true);
    SWApi.Starships
      .getPage(page, search)
      .then((data) => {
        const items = convertToItemArray(data.results);
        setItems(items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при получении фильмов:', error);
        setIsLoading(false);
      });
  };

  const searchSubmit = (query: string) => {
    setQuery(query);
    localStorage.setItem('query', query);
    fetchFilms(query);
  };

  useEffect(() => {
    fetchFilms(query);
  }, []);

  return (
    <div>
      <SearchForm isLoading={isLoading} onSearchSubmit={searchSubmit} />
      {isLoading ? (
        <p>Loading...</p>
      ) : items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <FilmListItem key={item.url} item={item} />
          ))}
        </ul>
      ) : (
        <p>No search results</p>
      )}
    </div>
  );
}

export default FilmList;