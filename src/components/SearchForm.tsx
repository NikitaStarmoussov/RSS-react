import { ChangeEvent } from "react";

interface SearchFormProps {
    searchQuery: string;
    isLoading: boolean;
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  }
  
  const SearchForm: React.FC<SearchFormProps> = ({
    searchQuery,
    isLoading,
    onSearchChange,
    onSearchSubmit,
  }) => {
    return (
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Поиск фильмов..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Загрузка...' : 'Поиск'}
        </button>
      </form>
    );
  };
  
  export default SearchForm;