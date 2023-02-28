import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import Wave from 'react-wavify'
const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())
  return (
    <>
      <div className='bg-primary-color text-white text-sm lg:text-xl'>
        <Wave
          fill='#BF011C'
          className='bg-white'
          paused={false}
          options={{
            height: 40,
            bones: 10,
            amplitude: 80,
            speed: 0.15,
            points: 4
          }}
        />
        <div className='container flex flex-col justify-center mx-auto items-center py-5 pt-10'>
          <div className='social-links flex'>
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
          <div className='pages flex flex-wrap justify-center items-center py-10 text-lg'>
            <Link className='m-3  font-bold' to='/'>
              Home
            </Link>
            <Link className='m-3  font-bold' to='/about'>
              About
            </Link>
            <Link className='m-3  font-bold' to='/products'>
              Products
            </Link>
            <Link className='m-3  font-bold' to='/location'>
              Location
            </Link>
            <Link className='m-3  font-bold' to='/contact-us'>
              Contact Us
            </Link>
            <Link className='m-3  font-bold' to='/terms & condition'>
              Term & Condition
            </Link>
            <Link className='m-3 sm:m-5 font-bold' to='/refund-policy'>
              Refund Policy
            </Link>
            <Link className='m-3 sm:m-5 font-bold' to='/shipping-policy'>
              Delivery Policy
            </Link>
            <Link className='m-3 sm:m-5 font-bold' to='/anime-house-points'>
              Anime House Points
            </Link>
          </div>
          <div className='copyright pb-10'>
            <h1>&copy; {year} Arywan | All Right Reserved</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
