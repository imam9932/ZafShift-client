import React from 'react';
import liveParcel from '../../../assets/live-tracking.png';
import safeDelivery from '../../../assets/safe-delivery.png';

const LiveTracking = () => {
  return (
    <div className='px-10 mt-5'>
      <div className='bg-white rounded-lg flex gap-10 items-center py-3 px-5 mb-5 space-y-2'>
        <div>
          <img src={liveParcel} alt="" />

        </div>
        <div>
          <h1 className='text-secondary font-bold'>Live Parcel Tracking</h1>
          <p className='text-sm'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
        </div>
      </div>
      <div className='bg-white rounded-lg flex gap-10 items-center py-3 px-5 mb-5 space-y-2'>
        <div>
          <img src={safeDelivery} alt="" />

        </div>
        <div>
          <h1 className='text-secondary font-bold'>100% Safe Delivery</h1>
          <p className='text-sm'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
        </div>
      </div>
      <div className='bg-white rounded-lg flex gap-10 items-center py-3 px-5 mb-5 space-y-2'>
        <div>
          <img src={safeDelivery} alt="" />

        </div>
        <div>
          <h1 className='text-secondary font-bold'>24/7 Call Center Support</h1>
          <p className='text-sm'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;