import Film from "../types/types";

interface FilmListItemProps {
    film: Film;
  }
  
  const FilmListItem: React.FC<FilmListItemProps> = ({ film }) => {
    return (
      <li key={film.url}>
        <h3>{film.title}</h3>
        <p>{film.opening_crawl}</p>
      </li>
    );
  };
  
  export default FilmListItem;