import React from 'react'
import { Outlet } from 'react-router-dom'
import List from '../components/List'

import ItemLimit from '../components/ItemLimit'
import Pagination from '../components/Pagination'
import SearchForm from '../components/SearchForm/SearchForm'

export default function Main() {
  return (
    <div>
        <SearchForm />
        <Pagination />
        <ItemLimit />
        <List />
        <Outlet />
    </div>
  )
}
