import React from 'react';
import heart from '../../../assets/service.png'

const OurServices = () => {
  return (
    <div className='bg-secondary px-10 py-10 rounded-2xl mt-10'>
      <h1 className='text-center text-2xl text-white font-bold'>Our Services</h1>
      <h5 className='text-center text-sm text-white mt-2'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</h5>
      <div className='grid md:grid-cols-3 grid-cols-1 mt-5 px-5 gap-5'>
        <div className='bg-white rounded-lg shadow-md py-4 px-5 flex flex-col items-center'>
                <img src={heart} className='w-[40px] h-[40px]' alt="" />
                <h2 className='font-bold mt-2 text-secondary'>Express  & Standard Delivery</h2>
                <p className='text-sm mt-2'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
              </div>
        <div className='bg-white rounded-lg shadow-md py-4 px-5 flex flex-col items-center'>
                <img src={heart} className='w-[40px] h-[40px]' alt="" />
                <h2 className='font-bold mt-2 text-secondary'>Nationwide Delivery</h2>
                <p className='text-sm mt-2'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
              </div>
        <div className='bg-white rounded-lg shadow-md py-4 px-5 flex flex-col items-center'>
                <img src={heart} className='w-[40px] h-[40px]' alt="" />
                <h2 className='font-bold mt-2 text-secondary'>Fulfillment Solution</h2>
                <p className='text-sm mt-2'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
              </div>
        <div className='bg-white rounded-lg shadow-md py-4 px-5 flex flex-col items-center'>
                <img src={heart} className='w-[40px] h-[40px]' alt="" />
                <h2 className='font-bold mt-2 text-secondary'>Cash on Home Delivery</h2>
                <p className='text-sm mt-2'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
              </div>
        <div className='bg-white rounded-lg shadow-md py-4 px-5 flex flex-col items-center'>
                <img src={heart} className='w-[40px] h-[40px]' alt="" />
                <h2 className='font-bold mt-2 text-secondary'>Corporate Service / Contract In Logistics</h2>
                <p className='text-sm mt-2'>Customized corporate services which includes warehouse and inventory management support.</p>
              </div>
        <div className='bg-white rounded-lg shadow-md py-4 px-5 flex flex-col items-center'>
                <img src={heart} className='w-[40px] h-[40px]' alt="" />
                <h2 className='font-bold mt-2 text-secondary'>Parcel Return</h2>
                <p className='text-sm mt-2'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
              </div>
      </div>
      
    </div>
  );
};

export default OurServices;