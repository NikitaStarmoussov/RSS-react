import React, { FormEvent } from 'react';
import Button from './Button';
import Input from './Input';

interface SearchFormProps {
  onSearchSubmit: (query: string) => void

  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({
  onSearchSubmit,
  isLoading
}) => {
  const [query, setQuery] = React.useState(()=> {
    return localStorage.getItem('query') || '';
  });
  const searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(query);
    
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    localStorage.setItem('query', event.target.value);
  }

  return (
    <form onSubmit={searchSubmit}>
      <Input
        value={query}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <Button disabled={isLoading}>Поиск</Button>
    </form>
  );
};

export default SearchForm;