import React from 'react'
import { animePoints } from '../assets'
const AnimeHousePoints = () => {
  return (
    <div className='relative'>
      <img src={animePoints} alt='animePoints' className='w-screen h-screen' />
      <div className='absolute inset-0 bg-black opacity-40'></div>
      <div className='container  mx-auto'>
        <h1 className='absolute top-0 left-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl my-10'>
          <span className='text-2xl font-bold'>Anime House</span> <br />
          Pts
        </h1>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-2/4 h-2/4 bg-white rounded-2xl m-auto text-center'>
          <div className=''>
            <h1 className='text-slate-800 font-semibold sm:mt-24 mt-14'>
              Become a member
            </h1>
            <p className='text-slate-600 mt-3'>
              With more ways to unlock exciting perks, this is your all access
              pass to exclusive rewards
            </p>
            <button className='px-10 py-5 rounded-lg my-10 bg-primary-color text-white font-bold'>
              Join Now
            </button>
            <p className='text-slate-600'>
              Already have an account?{' '}
              <button className='text-primary-color underline'>Sign in</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeHousePoints
