import Film from "../types/types";
import React from 'react';

interface FilmListItemProps {
    film: Film;
  }
  
  class FilmListItem extends React.Component<FilmListItemProps> {
    render() {
      const { film } = this.props;
  
      return (
        <li key={film.url}>
          <h3>{film.title}</h3>
          <p>{film.opening_crawl}</p>
        </li>
      );
    }
  }
  
  export default FilmListItem;