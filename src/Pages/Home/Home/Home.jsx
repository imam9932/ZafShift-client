import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brand/Brands';
import LiveTracking from '../LiveTracking/LiveTracking';
import Reviews from '../Reviews/Reviews';

const reviewsPromise=fetch('/reviews.json').then(res=>res.json())

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <HowWorks></HowWorks>
       <OurServices></OurServices>
       <Brands></Brands>
       <LiveTracking></LiveTracking>
       <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;