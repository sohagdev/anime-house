import React from 'react'
import { aboutUs } from '../assets'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container my-10 mx-auto'>
      <div className='flex flex-col md:flex-row gap-10'>
        <img
          className='w-full md:w-2/4 p-3 h-auto mx-auto my-auto flex-1'
          src={aboutUs}
          alt='aboutUs'
        />
        <div className='content p-5 sm:p-0 flex-1'>
          <div className='heading mx-auto my-auto'>
            <h1 className='mb-10 text-3xl font-extrabold leading-none tracking-tight text-slate-900 md:text-4xl'>
              Our Story{' '}
              <span className='underline underline-offset-3 decoration-8 decoration-primary-color'>
                Why Choose Us?
              </span>
            </h1>
            <p className='leading-relaxed mb-10 text-slate-600 text-base'>
              We are New Zealand biggest anime merchandise wholesaler and
              retailer shops with 15 shops nationwide and selling over 1,000
              products with wide range brands. We only sell officially licensed
              products.Our first animate store was opened In 1990 In Auckland.
              Across our over thirty three years of history. Our aim when we
              opened our first shop was not to make our business as a cultural
              hub and melting pot of western, Japanese and Korean cultures.
              <br /> <br />
              If you visit New Zealand, please visit our stores and explore the
              anime world.
            </p>
            <Link
              className='bg-primary-color text-white rounded-full py-4 px-8 font-bold'
              to='/products'
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
