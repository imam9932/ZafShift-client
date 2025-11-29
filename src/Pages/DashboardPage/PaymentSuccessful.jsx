import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const PaymentSuccessful = () => {
const [paymentInfo,setPaymentInfo]
=useState({});
  const [searchParams]=useSearchParams();
  const sessionId=searchParams.get('session_id')
  const axiosSecure=UseAxiosSecure();
  console.log(sessionId);

  useEffect(()=>{
  if(sessionId){
    axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
    .then(res=>{
      console.log(res.data)
      setPaymentInfo({
      transactionId:res.data.transactionId,
      trackingId:res.data.trackingId})
    })
  }
  },[sessionId,axiosSecure])
  return (
    <div>
      <h1 className='text-center text-secondary font-bold text-2xl'>Payment Successful</h1>
      <p>Your Transaction ID : <span className='text-red-700 font-bold'>{paymentInfo.transactionId}</span></p>
      <p >Your parcel Tracking ID : <span className='text-red-700 font-bold'>{paymentInfo.trackingId}</span></p>
    </div>
  );
};

export default PaymentSuccessful;