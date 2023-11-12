import React from 'react';
import { render } from '@testing-library/react';
import FilmListItem from './FilmListItem';
import  Item from '../types/types';

describe('FilmListItem', () => {
  const sampleItem: Item = {
    title: 'Sample Title',
    description: 'Sample Description',
  };

  it('renders the item title and description', () => {
    const { getByText } = render(FilmListItem({ item: sampleItem }) as React.ReactElement);
    
    expect(getByText('Sample Title')).toBeInTheDocument();
    expect(getByText('Sample Description')).toBeInTheDocument();
  });
});