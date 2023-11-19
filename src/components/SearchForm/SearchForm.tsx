import React from 'react'

import SubmitButton from './SubmitButton/SubmitButton'
import Input from './Input/Input'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../App';
import { fetchItems } from '../../Helpers/api';
import store from '../../store/store';
// import { Navigate } from 'react-router-dom'



export default function SearchForm() {

  // const navigate = Navigate({
  //   to: `/?q=${}`
  // })
  const searchQuery= useSelector<ReturnType<typeof store.getState>>((state) => state.search.value);
  const dispatch: AppDispatch = useDispatch();
  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(fetchItems({ query: searchQuery as string, newOffset: 0, limit: 10 }))
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <Input />
      <SubmitButton />
    </form>
  )
}
