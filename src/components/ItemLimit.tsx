"use client"
import React from 'react'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import { getLocalStorage, setLocalStorage } from '@/Helpers/localStorage'
import { getSearchParams } from '@/Helpers/getParams'
import { Router } from 'next/router'

export default function ItemLimit() {
  const {limit} = getSearchParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const value = event.target.value.trim();
    current.delete('limit')
    current.append('limit', value)
    current.delete('page')
    current.append('page', '1')
    
    router.push(`/?${current.toString()}`)
  }
  return (
    <select value={limit} onChange={handleChange}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  )
}
