import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import List from './List';
import jest from 'jest-mock';


describe('List component', () => {
  test('renders loading message when loading is true', () => {
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders no items found message when items array is empty', () => {
    jest.spyOn(store, 'getState').mockReturnValue({
      search: { value: '' },
      items: { data: [], loading: false, error: null },
      params: { page: 0, limit: 10 },
    });

    render(
      <Provider store={store}>
        <List />
      </Provider>
    );

    expect(screen.getByText('No items found')).toBeInTheDocument();
  });

  test('renders one item when items array is not empty', () => {
    jest.spyOn(store, 'getState').mockReturnValue({
      search: { value: '' },
      items: { data: [{ id: 1, title: 'Item 1' }], loading: false, error: null },
      params: { page: 0, limit: 10 },
    });

    render(
      <Provider store={store}>
        <List />
      </Provider>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

});