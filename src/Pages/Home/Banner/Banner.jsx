import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';
import { FaLocationArrow } from 'react-icons/fa';


const Banner = () => {
  return (
    <div className='relative'>
       <Carousel infiniteLoop={true} autoPlay={true} >
                <div >
                    <img  src= {bannerImg1} />
                   
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={bannerImg2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={bannerImg3} />
                    <p className="legend">Legend 3</p>
                </div>
               
            </Carousel>
             <div className='absolute  w-full bottom-38 left-16 flex gap-5'>
                   <button className='btn  bg-primary font-bold'>Track Your Parcel
                                       <FaLocationArrow />

                   </button>
                   <button className='btn font-bold'>Be A Rider</button>
                </div>
    </div>
  );
};

export default Banner;