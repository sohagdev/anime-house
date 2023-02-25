import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from '../Data/products'

const CartProduct = ({ currentProduct }) => {
  const { id, quantity } = currentProduct
  const cart = useContext(CartContext)
  const productData = getProductData(id)
  return (
    <>
      <div className='flow-root p-5'>
        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          <li key={productData.id} className='flex py-6'>
            <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
              <img
                src={productData.image}
                alt={productData.title}
                className='h-full w-full object-cover object-center'
              />
            </div>

            <div className='ml-4 flex flex-1 flex-col'>
              <div>
                <div className='flex justify-between text-base font-medium text-gray-900'>
                  <h3>
                    <a>{productData.title}</a>
                  </h3>
                  <p className='ml-4'>{productData.price * quantity}</p>
                </div>
              </div>
              <div className='flex flex-1 items-end justify-between text-sm'>
                <div className='text-sm sm:text-xl font-bold rounded-md text-gray-500 border-2 border-primary-color'>
                  <button
                    className='px-2'
                    onClick={() => cart.addOneToCart(productData.id)}
                  >
                    +
                  </button>{' '}
                  <span className='p-1'>{quantity}</span>{' '}
                  <button
                    className='px-2'
                    onClick={() => cart.removeOneFromCart(productData.id)}
                  >
                    -
                  </button>
                </div>

                <div className='flex'>
                  <button
                    type='button'
                    className='font-medium text-primary-color'
                    onClick={() => cart.deleteFromCart(id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CartProduct
