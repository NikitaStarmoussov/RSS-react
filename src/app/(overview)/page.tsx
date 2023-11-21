'use client'
import Image from 'next/image'

import Pagination from '@/components/Pagination'
import ItemLimit from '@/components/ItemLimit'
import List from '@/components/List'
import SearchForm from '@/components/SearchForm/SearchForm'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Item from '@/components/Item'
import { getSearchParams } from '@/Helpers/getParams'
type searchParamsProps = {
  searchParams: Record<string, string | string[] | undefined>
}

export default function Home() {
  const { query, newOffset, limit, productName } = getSearchParams()

  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
        <List query={query} newOffset={newOffset} limit={limit} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
        {productName && <Item productName={productName} />}
        </Suspense>
    </div>
  )
}
