import React from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../../../slices/search';

export default function Input() {
  const dispatch = useDispatch();
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(actions.setSearchValue(e.target.value))
  }
  return (
    <input placeholder='Search' onChange={handleInputChange}></input>
  )
}
