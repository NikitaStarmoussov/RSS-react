import React, { ChangeEvent } from 'react';

interface SearchFormProps {
  searchQuery: string;
  isLoading: boolean;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class SearchForm extends React.Component<SearchFormProps> {
  state = {
    searchQuery: localStorage.getItem('searchQuery') || '',
  };

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });

    if (searchQuery.trim() === '') {
      localStorage.removeItem('searchQuery');
    } else {
      localStorage.setItem('searchQuery', searchQuery);
    }
  };

  render() {
    const { searchQuery } = this.state;
    const { isLoading } = this.props;

    return (
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={this.handleSearchChange}
          placeholder="Поиск фильмов..."
        />
        <button type="button">{isLoading ? 'Загрузка' : 'Поиск'}</button>
      </form>
    );
  }
}

export default SearchForm;