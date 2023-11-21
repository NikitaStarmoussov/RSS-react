import React from 'react'
import { Outlet } from 'react-router-dom'
import List from '../../react-next/src/components/List'

import ItemLimit from '../../react-next/src/components/ItemLimit'
import Pagination from '../../react-next/src/components/Pagination'
import SearchForm from '../../react-next/src/components/SearchForm/SearchForm'

export default function Main() {
  return (
    <div>
        <SearchForm />
        <Pagination />
        <ItemLimit />
        <List />
    </div>
  )
}
