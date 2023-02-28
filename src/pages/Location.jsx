import React from 'react'
const locations = [
  {
    id: 1,
    name: 'Westfield Newmarket',
    image:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6383.634911506143!2d174.776891!3d-36.870788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48776b649daf%3A0x17f4eb9a90b18f3b!2sWestfield%20Newmarket!5e0!3m2!1sen!2snz!4v1677566447158!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    id: 2,
    name: 'Anime House, NZ',
    image:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23141.068719211584!2d172.598833!3d-43.530833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318af33e049b35%3A0xc1393ee1a45e482d!2sWestfield%20Riccarton!5e0!3m2!1sen!2snz!4v1677566156604!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    id: 3,
    name: 'Westfield St Lukes',
    image:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6315.801146808609!2d176.2238!3d-37.675044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d6af73947a557%3A0x8621e9f9455609d2!2sBayfair%20Shopping%20Centre!5e0!3m2!1sen!2snz!4v1677566694518!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  }
]
function LocationList() {
  return (
    <div className='mt-16 flex flex-col items-center gap-5'>
      {locations.map((location) => (
        <div
          key={location.id}
          className='p-4 w-2/4 h-full border-2 border-gray-200 rounded-md'
        >
          <h2 className='text-lg font-semibold mb-2'>{location.name}</h2>
          <iframe
            src={location.image}
            alt={location.name}
            height='500'
            className='w-full h-2/3 object-cover mb-2'
          ></iframe>
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
