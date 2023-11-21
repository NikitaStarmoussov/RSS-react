"use client"
import { getSearchParams } from '@/Helpers/getParams'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

export default function Pagination() {
  const {page} = getSearchParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  function incrementPage(){
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const value = Number(page) + 1
    current.delete('page')
    current.append('page', value.toString())
    
    router.push(`/?${current.toString()}`)
  
  }
  function decrementPage(){
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const value = Number(page) - 1
    current.delete('page')
    current.append('page', value.toString())
  }
  return (
    <div>
        <button onClick={decrementPage}>Previous</button>
        <button onClick={incrementPage}>Next</button>
    </div>
  )
}
