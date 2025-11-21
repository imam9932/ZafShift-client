import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import startPeople from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';


const Brands = () => {
  return (
    <div className='my-10 space-y-5'>
      <div>
        <h1 className='text-secondary text-2xl text-center font-bold'>We've helped thousands of sales teams</h1>
      </div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }} >
        <SwiperSlide><img src={amazon} alt="" /></SwiperSlide>
        <SwiperSlide><img src={casio} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moonstar} alt="" /></SwiperSlide>
        <SwiperSlide><img src={randstad} alt="" /></SwiperSlide>
        <SwiperSlide><img src={star} alt="" /></SwiperSlide>
        <SwiperSlide><img src={startPeople} alt="" /></SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Brands;