import React from 'react'

import SubmitButton from './SubmitButton/SubmitButton'
import Input from './Input/Input'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../App';
import { fetchItems } from '../../Helpers/api';
import store from '../../store/store';
import { useNavigate } from 'react-router-dom';
import getSearchQuery from '../../Helpers/createParams';

// import { Navigate } from 'react-router-dom'



export default function SearchForm() {

  // const navigate = Navigate({
  //   to: `/?q=${}`
  // })
  const searchQuery= useSelector<ReturnType<typeof store.getState>>((state) => state.search.value);
  const dispatch: AppDispatch = useDispatch();
  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(fetchItems({ query: searchQuery as string, page: 1, limit: 10 }))
    navigate(getSearchQuery(undefined, undefined, undefined, searchQuery as string))
  }
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmitForm}>
      <Input />
      <SubmitButton />
    </form>
  )
}
