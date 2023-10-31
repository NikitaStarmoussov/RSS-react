import React, { Component, ChangeEvent } from 'react';
import Film from './types/types';
import FilmList from './components/FilmList';
import { ErrorBoundary } from './components/ErrorBoundary';

interface AppProps {}

interface AppState {
  films: Film[];
  searchQuery: string;
  isLoading: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      films: [],
      searchQuery: '',
      isLoading: true,
    };
  }
 
  componentDidMount() {
    this.fetchFilms();
  }

  fetchFilms = () => {
    this.setState({ isLoading: true });

    fetch('https://swapi.dev/api/films')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ films: data.results, isLoading: false });
      })
      .catch((error) => {
        console.error('Ошибка при получении фильмов:', error);
        this.setState({ isLoading: false });
      });
  };

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };


  render() {
    const { films, searchQuery, isLoading } = this.state;

    return (
      <ErrorBoundary>
        <div>
        <FilmList
            films={films}
            searchQuery={searchQuery}
            isLoading={isLoading}
            onSearchChange={this.handleSearchChange}
          />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;