import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';

const Reviews = ({reviewsPromise}) => {
  const data=use(reviewsPromise);
  console.log(data);
  return (
    <div>
      <div>
        <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate:50,
          stretch:'50%',
          scale:0.75,
          depth:100,
          modifierL:1,
          slideShadows:true,
        }}
        autoplay={{
          delay:1000,
          disableOnInteraction:false,
        }}
        pagination={true}
        modules={[EffectCoverflow,Pagination,Autoplay]}
        className='mySwiper'
        >
{
  data.map(review=> <SwiperSlide key={review.id}>
   <ReviewsCard review={review} ></ReviewsCard>
</SwiperSlide>)
}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;