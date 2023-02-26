import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productsArray } from '../Data/products'
import { SingleProduct } from '.'
const SearchFeed = () => {
  const [products, setProducts] = useState([])
  const { searchTerm } = useParams()
  function getSearchProducts(searchTerm) {
    return productsArray.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
  useEffect(() => {
    setProducts(getSearchProducts(searchTerm))
  }, [searchTerm])

  return (
    <div className='container mx-auto my-10 px-3'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl'>
        Search Results for:{' '}
        <span className='underline underline-offset-3 decoration-8 decoration-primary-color'>
          {searchTerm}
        </span>
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {products.map((product, index) => (
          <SingleProduct product={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default SearchFeed
