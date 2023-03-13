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
              We are New Zealand Biggest Anime Merchandise Wholesaler and
              Retailer Shops with 15 shops Nation Wider And Selling Wide Range
              Of Products And Brands. We Carry Officially Licensed Products -
              Including Those Taht COme with Bonus Items - And Hold Special
              Events. The First Animate Store Was Opened In 1990 In Auckland.
              Across Our Over Thirty Three Years of History. We Have Aimed To
              NOt Only Simply Sell Goods But Also Serve As A Cultural Hub And
              Gateway To The Cutting Edge Of The Japanese And K-Pop Anime Scene.
              <br />
              <br />
              If You Come To New Zealand. By All Means Please Stop By At An
              Animate Store And Experience It For YouSelf.
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
