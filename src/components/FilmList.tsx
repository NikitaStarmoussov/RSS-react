import { ChangeEvent } from "react";
import FilmListItem from "./FilmListItem";
import SearchForm from "./SearchForm";
import Film from "../types/types";

interface FilmListProps {
  films: Film[];
  searchQuery: string;
  isLoading: boolean;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FilmList: React.FC<FilmListProps> = ({
  films,
  searchQuery,
  isLoading,
  onSearchChange,
  
}) => {
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchForm
  searchQuery={searchQuery}
  isLoading={isLoading}
  onSearchChange={onSearchChange}
  
/>
      {filteredFilms.length > 0 ? (
        <ul>
          {filteredFilms.map((film) => (
            <FilmListItem key={film.url} film={film} />
          ))}
        </ul>
      ) : (
        <p>Нет результатов поиска</p>
      )}
    </div>
  );
};

export default FilmList;