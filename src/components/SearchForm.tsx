import React, { ChangeEvent, useEffect } from 'react';

interface SearchFormProps {
    searchQuery: string,
    isLoading: boolean, 
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({isLoading}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(() => {
    const savedSearchQuery = localStorage.getItem('searchQuery');
    if (savedSearchQuery) {
      setSearchQuery(savedSearchQuery);
    }
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (searchQuery.trim() === '') {
        localStorage.removeItem('searchQuery');
      } else {
        localStorage.setItem('searchQuery', searchQuery);
      }
  };



  return (
    <form >
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Поиск фильмов..."
      />
      <button type="button" >{isLoading ? 'Загрузка' : 'Поиск'}</button>
    </form>
  );
};

export default SearchForm;