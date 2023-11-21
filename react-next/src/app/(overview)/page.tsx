'use client'
import Image from 'next/image'

import Pagination from '@/components/Pagination'
import ItemLimit from '@/components/ItemLimit'
import List from '@/components/List'
import SearchForm from '@/components/SearchForm/SearchForm'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Item from '@/components/Item'
type searchParamsProps = {
  searchParams: Record<string, string | string[] | undefined>
}

export default function Home() {
  const searchParams = useSearchParams();
  const productName = searchParams.get("productName")
  let query = searchParams.get("q")
  let page = searchParams.get("page")
  let limit = Number(searchParams.get("limit"))

  if(!query){
    query = ""
  }
  if(!page){
    page = "1"
  }
  if(!limit){
    limit = 10
  }
  const newOffset = (Number(page) - 1) * Number(limit)
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
