import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'

const locations = [
  {
    id: 1,
    name: 'Auckland Shop',
    phone: '09 - 9488825',
    addressName: 'Anime House /Shop 313, Westfield Newmarket Auckland',
    image:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.7771025840316!2d174.77450431586576!3d-36.871753788500804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d49338b35dfa9%3A0xcaea25b3b897254f!2sAnime%20House%20at%20Westfield%20Newmarket!5e0!3m2!1sen!2sbd!4v1678425138575!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    id: 2,
    name: 'Wellington Shop',
    phone: '04 - 9792618',
    addressName: 'Anime House / 49 Dixon Street. Wellington',
    image:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.778793106851!2d174.7745777159816!3d-41.29191854867604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38aff3d834510f%3A0x145f9f0a3b4f92c5!2sAnime%20House%20Wellington!5e0!3m2!1sen!2sbd!4v1678425192541!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    id: 3,
    name: 'Christchurch Shop',
    phone: '03 - 4203888',
    addressName: 'Anime House / Riccarton Mall Shop036 Christchurch',
    image:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.6056049513973!2d172.59463331604363!3d-43.53141648993699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318b257267e45d%3A0x6973acaae279f96e!2sAnime%20House%20at%20Westfield%20Riccarton!5e0!3m2!1sen!2sbd!4v1678425240278!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  }
]
function LocationList() {
  return (
    <div className=' flex flex-col items-center gap-5'>
      {locations.map((location) => (
        <div className='container flex flex-col sm:flex-row mx-auto'>
          <div className='flex-1 contact-details p-3'>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary-color'>
              {location.name}
            </h1>
            <p className='mt-10 text-primary-color'>
              Our Shop Is Located In The {location.addressName}
            </p>
            <div className='contact-links mt-10 flex'>
              <button className='text-primary-color border-2 border-primary-color p-3 rounded-full mr-3'>
                <BsTelephoneFill className='w-7 h-7' />
              </button>
              <p className='text-2xl text-primary-color font-bold'>
                Phone <br />{' '}
                <span className='text-sm font-medium text-slate-600'>
                  {location.phone}
                </span>
              </p>
            </div>
            <div className='contact-links mt-5 flex'>
              <button className='text-primary-color border-2 border-primary-color p-3 rounded-full mr-3'>
                <MdEmail className='w-7 h-7' />
              </button>
              <p className='text-2xl text-primary-color font-bold'>
                Email <br />{' '}
                <span className='text-sm font-medium text-slate-600'>
                  info@animehouse.Co.Nz
                </span>
              </p>
            </div>
            <div className='contact-links mt-5 flex'>
              <button className='text-primary-color border-2 border-primary-color p-3 rounded-full mr-3'>
                <HiLocationMarker className='w-7 h-7' />
              </button>
              <p className='text-2xl text-primary-color font-bold'>
                Location <br />{' '}
                <span className='text-sm font-medium text-slate-600 flex flex-wrap'>
                  {location.addressName}
                </span>
              </p>
            </div>
          </div>
          <div className='flex-1 p-5 mx-auto my-auto sm:w-2/4 w-full h-full'>
            <iframe
              src={location.image}
              frameborder='0'
              className='w-full h-80 border-2 border-primary-color rounded-lg'
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  )
}
const Location = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='p-3 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl my-10'>
        Find{' '}
        <span className='underline underline-offset-3 decoration-8 decoration-primary-color'>
          Us
        </span>
      </h1>
      <LocationList />
    </div>
  )
}

export default Location
