import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const PaymentSuccessful = () => {

  const [searchParams]=useSearchParams();
  const sessionId=searchParams.get('session_id')
  const axiosSecure=UseAxiosSecure();
  console.log(sessionId);

  useEffect(()=>{
  if(sessionId){
    axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
    .then(res=>{
      console.log(res.data)
    })
  }
  },[sessionId,axiosSecure])
  return (
    <div>
      <h1 className='text-center text-secondary font-bold text-2xl'>Payment Successful</h1>
    </div>
  );
};

export default PaymentSuccessful;