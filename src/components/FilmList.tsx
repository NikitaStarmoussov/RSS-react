import React, { ChangeEvent } from "react";
import FilmListItem from "./FilmListItem";
import SearchForm from "./SearchForm";
import Film from "../types/types";

interface FilmListProps {
  films: Film[];
  searchQuery: string;
  isLoading: boolean;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface FilmListState {
  filteredFilms: Film[];
}

class FilmList extends React.Component<FilmListProps, FilmListState> {
  constructor(props: FilmListProps) {
    super(props);
    this.state = {
      filteredFilms: [],
    };
  }

  componentDidMount() {
    this.filterFilms();
  }

  componentDidUpdate(prevProps: FilmListProps) {
    if (prevProps.films !== this.props.films || prevProps.searchQuery !== this.props.searchQuery) {
      this.filterFilms();
    }
  }

  filterFilms() {
    const { films, searchQuery } = this.props;
    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ filteredFilms });
  }

  render() {
    const { searchQuery, isLoading, onSearchChange } = this.props;
    const { filteredFilms } = this.state;

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
  }
}

export default FilmList;