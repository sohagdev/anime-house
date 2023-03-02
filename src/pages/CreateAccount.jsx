import React from 'react'
import { Link } from 'react-router-dom'
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram
} from 'react-icons/ai'
const Login = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl my-10 mx-3'>
        Create An{' '}
        <span className='underline underline-offset-3 decoration-8 decoration-primary-color'>
          Account
        </span>
      </h1>
      <form className=' sm:w-2/4 sm:mx-auto flex flex-col my-14 mx-5'>
        <div className='flex justify-between items-center gap-5'>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            className='bg-white border-b-2 border-primary-color  outline-none mr-2 w-full'
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className='bg-white border-b-2 border-primary-color  outline-none mr-2 w-full my-10'
          />
        </div>
        <div className='flex justify-between items-center gap-5'>
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='bg-white border-b-2 border-primary-color  outline-none mr-2 w-full'
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='bg-white border-b-2 border-primary-color  outline-none mr-2 w-full my-10'
          />
        </div>
        <div className='flex items-center'>
          <button
            type='submit'
            value='login'
            className='bg-primary-color text-white rounded-full py-4 px-8 font-bold w-1/3'
          >
            Create
          </button>
          <div className='pl-5'>
            {' '}
            Returning Customer{'  '}
            <Link to='/login' className='text-primary-color'>
              Sign In
            </Link>
          </div>
        </div>
        <button className='flex justify-between items-center mt-10 bg-blue-700 text-white p-3 rounded-md'>
          Sign in with Facebook
          <AiFillFacebook className='w-8 h-8' />
        </button>
        <button className='flex justify-between items-center bg-red-500 text-white p-3 rounded-md mt-3'>
          Sign in with Google
          <AiFillGoogleCircle className='w-8 h-8' />
        </button>
        <button className='flex justify-between items-center bg-blue-400 text-white p-3 rounded-md mt-3'>
          Sign in with Twitter
          <AiFillTwitterCircle className='w-8 h-8' />
        </button>
        <button className='flex justify-between items-center bg-cyan-600 text-white p-3 rounded-md mt-3'>
          Sign in with Linkedin
          <AiFillLinkedin className='w-8 h-8' />
        </button>
        <button className='flex justify-between items-center bg-pink-400 text-white p-3 rounded-md mt-3'>
          Sign in with Instagram
          <AiFillInstagram className='w-8 h-8' />
        </button>
      </form>
    </div>
  )
}

export default Login
