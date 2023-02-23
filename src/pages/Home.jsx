import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import '../App.css'

import {
  sliderOne,
  sliderTwo,
  sliderThree,
  sliderFour,
  sliderFive,
  sliderSix
} from '../assets/index'

// import required modules
import { Autoplay, Navigation } from 'swiper'

const Home = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide className='relative'>
          <img className='w-full h-full' src={sliderOne} alt='slider' />
          <div className='content lg:block hidden absolute top-1/4 left-2/3 text-white'>
            <h1 className='bg-black text-2xl hover:underline px-5 py-3'>
              Got Anime? Members One Day Sale
            </h1>
            <h3 className='bg-black text-lg px-5 py-3 my-5'>
              A members-only sale! <br /> Sale Ends: Soon
            </h3>
            <p className='bg-black text-lg px-5 py-3 w-full inline hover:underline'>
              Lord Over These Deals
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='w-full h-full' src={sliderTwo} alt='slider' />
          <div className='content lg:block hidden absolute top-1/4 left-2/3 text-black'>
            <h1 className='bg-white text-2xl hover:underline px-5 py-3'>
              Look What The Truck Dragged In
            </h1>
            <h3 className='bg-white text-lg px-5 py-3 my-5'>
              New Releases Galore!
            </h3>
            <p className='bg-white text-lg px-5 py-3 w-full inline hover:underline'>
              Order Before They're Gone!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='w-full h-full' src={sliderThree} alt='slider' />
          <div className='content lg:block hidden absolute top-1/4 left-2/3 text-white'>
            <h1 className='bg-black text-2xl hover:underline px-5 py-3'>
              Pre-Order To Not Get PO'd
            </h1>
            <h3 className='bg-black text-lg px-5 py-3 my-5'>
              Put Off Ordering No Longer!
            </h3>
            <p className='bg-black text-lg px-5 py-3 w-full inline hover:underline'>
              Get your items ASAP!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full' src={sliderFour} alt='slider' />
          <div className='content lg:block hidden absolute top-1/4 left-2/3 text-black'>
            <h1 className='bg-white text-2xl hover:underline px-5 py-3'>
              Dark Horse/Square Enix/Graphic Novels
            </h1>
            <h3 className='bg-white text-lg px-5 py-3 my-5'>
              The Weekly Specials Anime-zing Race is on!
            </h3>
            <p className='bg-white text-lg px-5 py-3 w-full inline hover:underline'>
              On your marks, get set, go!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full' src={sliderFive} alt='slider' />
          <div className='content lg:block hidden absolute top-1/4 right-2/3 text-white'>
            <h1 className='bg-black text-2xl hover:underline px-5 py-3'>
              What The DEALS?!?!
            </h1>
            <h3 className='bg-black text-lg px-5 py-3 my-5'>
              Don't miss out! We have new deals EVERY! DAY!
            </h3>
            <p className='bg-black text-lg px-5 py-3 w-full inline hover:underline'>
              Save Now!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full' src={sliderSix} alt='slider' />
          <div className='content lg:block hidden absolute top-1/4 left-2/3 text-white'>
            <h1 className='bg-black text-2xl hover:underline px-5 py-3'>
              Got Anime? Savings Club
            </h1>
            <h3 className='bg-black text-lg px-5 py-3 my-5'>
              If you buy even a few items a year, <br /> you can start saving
              some cash now by joining Anime House
            </h3>
            <p className='bg-black text-lg px-5 py-3 w-full inline hover:underline'>
              Learn More
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Home
