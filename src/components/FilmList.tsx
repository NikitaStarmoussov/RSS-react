import React, { useState, useEffect } from "react";
import FilmListItem from "./FilmListItem";
import SearchForm from "./SearchForm";
import Item from "../types/types";
// import * as SWApi from 'swapi-ts';
// import { IStarship } from "swapi-ts";

// type FetchProps = (
//   search?: string | undefined,
//   page?: number
// ) => void;

function FilmList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [query, setQuery] = useState<string | undefined>(localStorage.getItem('query') || '');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [itemLimit, setItemLimit] = useState<number>(10);

  // function convertToItemArray(starships): Item[] {
  //   return starships.map((starship) => {
  //     return {
  //       name: starship.name,
  //       url: starship.url,
  //       manufacturer: starship.manufacturer,
  //     };
  //   });
  // }

  const fetchFilms = () => {
    setIsLoading(true);
  
    fetch("https://pokeapi.co/api/v2/ability/?offset=0&limit=10")
      .then((response) => response.json()) 
      .then((data) => {
        console.log(data);
        const totalPages = Math.ceil(data.count / itemLimit);
        console.log(totalPages);
        setTotalPages(totalPages);
        setItems(data.results);
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
    fetchFilms();
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div>
      <SearchForm isLoading={isLoading} onSearchSubmit={searchSubmit} />
      <ul style={{ display: "flex" }}>{[...Array(totalPages)].map((_, i) => (
        <li key={i} style={{ margin: "0 2px", cursor: "pointer", textDecoration: i + 1 === currentPage ? "underline" : "none" }}>
          <button
            onClick={() => setCurrentPage(i + 1)}
            disabled={i + 1 === currentPage}
            
          >
            {i + 1}
          </button>
        </li>
     
      ))}
      </ul>
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