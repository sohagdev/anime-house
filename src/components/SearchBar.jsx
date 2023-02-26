import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
    }
    setSearchTerm('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        className='block p-2.5 w-full z-20 text-sm text-slate-900 bg-gray-50 rounded-lg  border-2 border-primary-color focus:outline-none'
        placeholder='Search Here...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button
        type='submit'
        className='absolute top-0 right-0 p-2.5 text-sm font-black text-white bg-primary-color rounded-r-lg border border-primary-color hover:bg-primary-color '
      >
        <svg
          aria-hidden='true'
          className='w-5 h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          ></path>
        </svg>
        <span className='sr-only'>Search</span>
      </button>
    </form>
  )
}

export default SearchBar
