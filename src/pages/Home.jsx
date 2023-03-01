import React from 'react'
import { Link } from 'react-router-dom'
import { mainLogo, videoBackground } from '../assets'

function Home() {
  return (
    <div className='relative'>
      <video
        className='absolute top-0 left-0 object-cover w-full h-full'
        autoPlay
        muted
        loop
      >
        <source src={videoBackground} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex flex-col items-center justify-center h-screen px-8'>
        <div className='container my-10 flex justify-between items-center mx-auto flex-wrap'>
          <img src={mainLogo} alt='logo' className='w-64' />
          <nav className='flex flex-wrap justify-center'>
            <Link className='p-2 sm:p-3 font-bold text-white' to='/'>
              Home
            </Link>
            <Link className='p-2 sm:p-3 font-bold text-white' to='/about'>
              About
            </Link>
            <Link className='p-2 sm:p-3 font-bold text-white' to='/products'>
              Products
            </Link>
            <Link className='p-2 sm:p-3 font-bold text-white' to='/location'>
              Location
            </Link>
            <Link className='p-2 sm:p-3 font-bold text-white' to='/contact-us'>
              Contact Us
            </Link>
          </nav>
        </div>
        <div className='flex flex-col justify-center items-center h-full w-full text-center'>
          <h1 className='text-4xl font-bold text-white mb-8'>
            Explore The Anime World
          </h1>
          <Link
            className='bg-white text-black rounded-full py-4 px-8 font-bold hover:bg-gray-200'
            to='/products'
          >
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
