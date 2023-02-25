import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import '../App.css'
// import required modules
import {
  animeBrandOne,
  animeBrandTwo,
  animeBrandThree,
  animeBrandFour,
  animeBrandFive,
  animeBrandSix,
  animeBrandSeven,
  animeBrandEight,
  animeBrandNine,
  animeBrandTen,
  animeBrandEleven,
  animeBrandTwelve
} from '../assets'
import { Autoplay, Navigation, Pagination } from 'swiper'
const FeaturedBrand = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='mySwiper my-16'
      >
        <SwiperSlide className='flex justify-center items-center'>
          <img className='w-1/4 h-40' src={animeBrandOne} alt='anime-brand' />
          <img className='w-1/4 h-40' src={animeBrandTwo} alt='anime-brand' />
          <img className='w-1/4 h-40' src={animeBrandThree} alt='anime-brand' />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <img className='w-1/4 h-40' src={animeBrandFour} alt='anime-brand' />
          <img className='w-1/4 h-40' src={animeBrandFive} alt='anime-brand' />
          <img className='w-1/4 h-40' src={animeBrandSix} alt='anime-brand' />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <img className='w-1/4 h-40' src={animeBrandSeven} alt='anime-brand' />
          <img className='w-1/4 h-40' src={animeBrandEight} alt='anime-brand' />
          <img className='w-1/4 h-40' src={animeBrandNine} alt='anime-brand' />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
          <img className='w-1/4 h-40' src={animeBrandTen} alt='anime-brand' />
          <img
            className='w-1/4 h-40'
            src={animeBrandEleven}
            alt='anime-brand'
          />
          <img
            className='w-1/4 h-40'
            src={animeBrandTwelve}
            alt='anime-brand'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FeaturedBrand
