import React, { FormEvent, useContext } from 'react';
import Button from './Button';
import Input from './Input';
import { AppContext } from '../context/AppContext';

interface SearchFormProps {
  onSearchSubmit: (query: string) => void

  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({
  onSearchSubmit,
  isLoading
}) => {
  const {searchQuery, setSearchQuery} = useContext(AppContext);
  const searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(searchQuery);
    
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    localStorage.setItem('query', event.target.value);
  }

  return (
    <form onSubmit={searchSubmit}>
      <Input
        value={searchQuery}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <Button disabled={isLoading}>Поиск</Button>
    </form>
  );
};

export default SearchForm;