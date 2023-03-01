import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'

const locations = [
  {
    id: 1,
    name: 'Auckland Shop',
    image:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6383.634911506143!2d174.776891!3d-36.870788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48776b649daf%3A0x17f4eb9a90b18f3b!2sWestfield%20Newmarket!5e0!3m2!1sen!2snz!4v1677566447158!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    id: 2,
    name: 'Wellington Shop',
    image:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23141.068719211584!2d172.598833!3d-43.530833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318af33e049b35%3A0xc1393ee1a45e482d!2sWestfield%20Riccarton!5e0!3m2!1sen!2snz!4v1677566156604!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    id: 3,
    name: 'Christchurch Shop',
    image:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6315.801146808609!2d176.2238!3d-37.675044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d6af73947a557%3A0x8621e9f9455609d2!2sBayfair%20Shopping%20Centre!5e0!3m2!1sen!2snz!4v1677566694518!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  }
]
function LocationList() {
  return (
    <div className='mt-16 flex flex-col items-center gap-5'>
      {locations.map((location) => (
        <div className='container flex flex-col sm:flex-row mx-auto'>
          <div className='contact-details my-10 mx-auto p-5'>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary-color'>
              {location.name}
            </h1>
            <p className='mt-10 text-primary-color'>
              Our Shop Is Located In The Riccarton Mall, Chrischurch
            </p>
            <div className='contact-links mt-10 flex'>
              <button className='text-primary-color border-2 border-primary-color p-3 rounded-full'>
                <BsTelephoneFill className='w-7 h-7' />
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
                <MdEmail className='w-7 h-7' />
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
                <HiLocationMarker className='w-7 h-7' />
              </button>
              <p className='text-2xl text-primary-color font-bold ml-5'>
                Location <br />{' '}
                <span className='text-lg font-medium text-slate-600'>
                  Anime House / Shop 036, Riccarton Mall Christchurch
                </span>
              </p>
            </div>
          </div>
          <div className='contact-form p-5 mx-auto my-auto w-2/4 h-full'>
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
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl my-10'>
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
