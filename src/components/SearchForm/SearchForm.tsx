"use client"

import React from 'react'
import SubmitButton from './SubmitButton/SubmitButton'
import {useRouter} from 'next/navigation'




export default function SearchForm() {

  const router = useRouter()
  const [query, setQuery] = React.useState("")

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    router.push(`/?q=${query}`)
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault

    setQuery(e.target.value)
  }
  return (
    <form onSubmit={handleSubmitForm}>
    <input placeholder='Search' onChange={handleInputChange} value={query} ></input>
      <SubmitButton />
    </form>
  )
}
