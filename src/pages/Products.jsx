import React from 'react'
import { productsArray } from '../Data/products'
import { SingleProduct } from '../components'

const Products = () => {
  return (
    <div className='container mx-auto my-10 px-3'>
      <div className='heading mb-10'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl'>
          Our New{' '}
          <span className='underline underline-offset-3 decoration-8 decoration-primary-color'>
            Gifts, Merchandise & T-Shirts
          </span>
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {productsArray.map((product, index) => (
          <SingleProduct product={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Products
