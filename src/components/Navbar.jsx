import React, { useState, useContext } from 'react'
import { CartContext } from '../CartContext'
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom'
import { RiAccountCircleFill } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'
import {
  BsFillCartFill,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsYoutube
} from 'react-icons/bs'
import logo from '../assets/Logo.png'
const Navbar = () => {
  const [show, setShow] = useState(false)
  const cart = useContext(CartContext)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  )
  return (
    <>
      <nav className=''>
        <div className='my-10 mx-10'>
          <div className='flex justify-center'>
            <Link to='/' className='w-28 pr-3'>
              <img src={logo} alt='logo' />
            </Link>
            <div className='relative w-2/4'>
              <input
                type='search'
                className='block p-2.5 w-full z-20 text-sm text-slate-900 bg-gray-50 rounded-lg  border-2 border-primary-color focus:outline-none'
                placeholder='Search Here...'
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
            </div>
            <button className='hidden sm:block'>
              <RiAccountCircleFill className='mx-2 text-primary-color w-10 h-10' />
            </button>
            <button className='relative ml-2 sm:ml-0' onClick={handleShow}>
              <span className='absolute top-0 right-0 font-bold px-1 bg-slate-900 text-white rounded-full'>
                {productCount}
              </span>
              <BsFillCartFill className='text-primary-color w-8 h-8' />
            </button>
          </div>
        </div>
        <div className='navbar-links bg-primary-color text-white text-sm lg:text-xl'>
          <div className='container flex lg:justify-between justify-center mx-auto items-center py-5'>
            <div className='pages'>
              <Link className='m-3 sm:m-5 font-bold' to='/'>
                Home
              </Link>
              <Link className='m-3 sm:m-5 font-bold' to='/about'>
                About
              </Link>
              <Link className='m-3 sm:m-5 font-bold' to='/products'>
                Products
              </Link>
              <Link className='m-3 sm:m-5 font-bold' to='/location'>
                Location
              </Link>
              <Link className='m-3 sm:m-5 font-bold' to='/contact'>
                Contact
              </Link>
            </div>
            <div className='social-links sm:flex hidden'>
              <Link to='#'>
                <BsYoutube className='w-10 h-10 sm:w-11 sm:h-11 px-3 ' />
              </Link>
              <Link to='#'>
                <BsTwitter className='w-10 h-10 sm:w-11 sm:h-11 px-3 ' />
              </Link>
              <Link to='#'>
                <BsFacebook className='w-10 h-10 sm:w-11 sm:h-11 px-3 ' />
              </Link>
              <Link to='#'>
                <BsInstagram className='w-10 h-10 sm:w-11 sm:h-11 px-3 ' />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 w-full h-full z-10 ${
          show ? '' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 w-full h-full bg-gray-500 duration-500 ease-out transition-all ${
            show ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={handleClose}
        ></div>
        <div
          className={`cart absolute sm:w-1/3 w-full h-full bg-gray-200 right-0 top-0 duration-500 ease-out transition-all overflow-y-scroll ${
            show ? '' : 'translate-x-full'
          }`}
        >
          <div className='cart-title flex justify-between px-5 py-10 bg-primary-color text-white'>
            {' '}
            <h1 className='text-3xl font-extrabold'>Shopping Cart</h1>
            <button onClick={handleClose}>
              <CgClose className='font-extrabold text-3xl' />
            </button>
          </div>
          <div className='cart-body'>
            {productCount > 0 ? (
              <div className='p-10'>
                <h3 className='text-2xl font-bold text-slate-900 mb-5'>
                  Items in your Cart:
                </h3>
                {cart.items.map((currentProduct, index) => (
                  <CartProduct
                    currentProduct={currentProduct}
                    key={index}
                    handleClose={handleClose}
                  />
                ))}
                <div className='flex justify-between text-lg font-bold text-gray-900 mt-10'>
                  <p>Subtotal</p>
                  <p>${cart.getTotalCost().toFixed(2)}</p>
                </div>
                <p className='mt-0.5 text-sm text-gray-500'>
                  Shipping and taxes calculated at checkout.
                </p>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='flex items-center justify-center rounded-md border border-transparent bg-primary-color px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700'
                  >
                    Checkout
                  </a>
                </div>
              </div>
            ) : (
              <h1 className='text-2xl font-bold text-slate-900 mb-5 text-center m-10'>
                There are no items in your cart
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
