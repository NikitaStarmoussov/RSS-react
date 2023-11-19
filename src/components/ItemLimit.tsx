import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../App';
import { fetchItems } from '../Helpers/api';
import getSearchQuery from '../Helpers/createParams';
import { actions } from '../slices/paramsSlice';

import { storeSelector } from '../store/store';
import { LOCAL_STORAGE_SEARCH_LIMIT, LOCAL_STORAGE_SEARCH_PAGE, setLocalStorage } from '../Helpers/localStorage';

export default function ItemLimit() {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
    const curPage =  useSelector<storeSelector>((state) => state.params.page);
    const searchQuery =  useSelector<storeSelector>((state) => state.search.value);
    const limit = useSelector<storeSelector>((state) => state.params.limit);



    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>){
        console.log(event.target.value)
        dispatch(actions.setLimit(event.target.value))
        setLocalStorage(LOCAL_STORAGE_SEARCH_PAGE, "1")
        setLocalStorage(LOCAL_STORAGE_SEARCH_LIMIT, event.target.value)
        dispatch(actions.setPage(1))
        dispatch(fetchItems({ query: searchQuery as string, page: (curPage as number), limit: (limit as number) }))
        navigate(getSearchQuery(undefined, undefined, Number(event.target.value), searchQuery as string))
    }
  return (
    <select onChange={handleSelect}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  )
}
