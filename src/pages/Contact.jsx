import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'

const Contact = () => {
  return (
    <div className='container flex flex-col sm:flex-row mx-auto'>
      <div className='contact-details my-10 mx-auto p-5 flex-1'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl'>
          Get In{' '}
          <span className='underline underline-offset-3 decoration-8 decoration-primary-color'>
            Touch
          </span>
        </h1>
        <p className='mt-10 text-slate-600'>
          We Love Hearing From All Our Customers If you Have Any Questions Or
          Feedback About Our Products Please Feel Free To Fill Out The Form
          Below Or Call Us At The Below Contact Details
        </p>
        <div className='contact-links mt-10 flex'>
          <button className='text-primary-color border-2 border-primary-color p-3 rounded-full'>
            <BsTelephoneFill className='w-10 h-10' />
          </button>
          <p className='text-2xl text-primary-color font-bold ml-5'>
            Phone <br />{' '}
            <span className='text-lg font-medium text-slate-600'>
              09-214-8850
            </span>
          </p>
        </div>
        <div className='contact-links mt-5 flex'>
          <button className='text-primary-color border-2 border-primary-color p-3 rounded-full'>
            <MdEmail className='w-10 h-10' />
          </button>
          <p className='text-2xl text-primary-color font-bold ml-5'>
            Email <br />{' '}
            <span className='text-lg font-medium text-slate-600'>
              info@animehouse.Co.Nz
            </span>
          </p>
        </div>
        <div className='contact-links mt-5 flex'>
          <button className='text-primary-color border-2 border-primary-color p-3 rounded-full'>
            <HiLocationMarker className='w-10 h-10' />
          </button>
          <p className='text-2xl text-primary-color font-bold ml-5'>
            Location <br />{' '}
            <span className='text-lg font-medium text-slate-600'>
              13K Ryan Place Manukau 2104
            </span>
          </p>
        </div>
      </div>
      <div className='contact-form p-5 mx-auto my-auto flex-1'>
        <form action='#'>
          <div className='flex mb-5'>
            <input
              className='bg-white border-b-2 border-primary-color  outline-none mr-2 w-full'
              type='text'
              name='name'
              placeholder='Your Name'
            />
            <input
              className='bg-white border-b-2 border-primary-color outline-none ml-2 w-full'
              type='text'
              name='email'
              placeholder='Email'
            />
          </div>
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            className='bg-white border-b-2 border-primary-color outline-none w-full'
          />
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='5'
            placeholder='Say Something'
            className='bg-white border-b-2 border-primary-color outline-none w-full mt-10'
          ></textarea>
          <button
            type='submit'
            value='Send Message'
            className='bg-primary-color text-white rounded-full py-4 px-8 font-bold mt-10'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
