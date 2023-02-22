import React from 'react'
import { Link } from 'react-router-dom'
import { RiAccountCircleFill } from 'react-icons/ri'
import {
  BsFillCartFill,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsYoutube
} from 'react-icons/bs'
import logo from '../assets/Logo.png'
const Navbar = () => {
  return (
    <nav className='overflow-hidden'>
      <form className='my-10 mx-10'>
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
          <button className='relative ml-2 sm:ml-0'>
            <span className='absolute top-0 right-0 font-bold px-1 bg-slate-900 text-white rounded-full'>
              5
            </span>
            <BsFillCartFill className='text-primary-color w-8 h-8' />
          </button>
        </div>
      </form>
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
  )
}

export default Navbar
