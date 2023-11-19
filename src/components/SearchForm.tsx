import React, { FormEvent } from 'react';
import Button from './Button';
import Input from './Input';
// import { AppContext } from '../context/AppContext';
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface SearchFormProps {
  onSearchSubmit: (query: string) => void

  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({
  onSearchSubmit,
  isLoading
}) => {
  const searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(searchQuery);
    
  }
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);

  return (
    <form onSubmit={searchSubmit}>
      <Input/>
      <Button disabled={isLoading}>Поиск</Button>
    </form>
  );
};

export default SearchForm;