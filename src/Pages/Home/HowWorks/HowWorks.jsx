import React from 'react';
import deliveryVan from '../../../assets/delivery-van.png'

const HowWorks = () => {
  return (
    <div className='mt-10 px-10 py-5'>
      <h1 className='text-center text-2xl font-bold'>How it Works</h1>
     <div className='grid md:grid-cols-4 grid-cols-2 gap-5 mt-5'>
       <div className='bg-white rounded-lg shadow-md py-4 px-5'>
        <img src={deliveryVan} className='w-[50px] h-[50px]' alt="" />
        <h2 className='font-bold'>Booking Pick & Drop</h2>
        <p className='text-sm mt-2'>From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
       <div className='bg-white rounded-lg shadow-md py-4 px-5'>
        <img src={deliveryVan} className='w-[50px] h-[50px]' alt="" />
        <h2 className='font-bold'>Cash On Delivery</h2>
        <p className='text-sm mt-2'>From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
       <div className='bg-white rounded-lg shadow-md py-4 px-5'>
        <img src={deliveryVan} className='w-[50px] h-[50px]' alt="" />
        <h2 className='font-bold'>Delivery Hub</h2>
        <p className='text-sm mt-2'>From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
       <div className='bg-white rounded-lg shadow-md py-4 px-5'>
        <img src={deliveryVan} className='w-[50px] h-[50px]' alt="" />
        <h2 className='font-bold'>Booking SME & Corporate</h2>
        <p className='text-sm mt-2'>From personal packages to business shipments — we deliver on time, every time.</p>
      </div>
     </div>
    </div>
  );
};

export default HowWorks;