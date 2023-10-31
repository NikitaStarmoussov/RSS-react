import React, { useEffect } from 'react';

interface SearchFormProps {
  onSearchSubmit: (searchQuery: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(() => {
    const savedSearchQuery = localStorage.getItem('searchQuery');
    if (savedSearchQuery) {
      setSearchQuery(savedSearchQuery);
    }
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      localStorage.removeItem('searchQuery');
    } else {
      localStorage.setItem('searchQuery', searchQuery);
    }
    onSearchSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Поиск фильмов..."
      />
      <button type="submit">Поиск</button>
    </form>
  );
};

export default SearchForm;