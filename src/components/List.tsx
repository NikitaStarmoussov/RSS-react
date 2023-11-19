import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../types/Item';
import { fetchItems } from '../Helpers/api';
import store from '../store/store';
import { AppDispatch } from '../App';

export default function List() {
    const searchQuery = useSelector<ReturnType<typeof store.getState>>((state) => state.search.value);
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchItems({ query: searchQuery as string, page: 1, limit: 10 }));
    }, [dispatch]);


  const items  = useSelector<ReturnType<typeof store.getState>>((state) => state.items.data);
  const loading = useSelector<ReturnType<typeof store.getState>>((state) => state.items.loading);

  if (loading) {
    return <div>Loading...</div>;
  }
  if ((items as Item[]).length === 0) {
    return <div>No items found</div>;
  }

  return (
    <div>
      {(items as Item[]).map((item: Item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}