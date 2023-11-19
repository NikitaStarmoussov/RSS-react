import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../slices/search';
import store from '../../../store/store';

export default function Input() {
  const dispatch = useDispatch();
  const startedValue = useSelector<ReturnType<typeof store.getState>>((state) => state.search.value);
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(actions.setSearchValue(e.target.value))
  }
  return (
    <input placeholder='Search' onChange={handleInputChange} value={startedValue as string}></input>
  )
}
