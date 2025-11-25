// import React from 'react';
// import { useParams } from 'react-router';
// import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

// const Payment = () => {
//   const {parcelId} =useParams();
//   const axiosSecure=UseAxiosSecure();

//   const {isLoading,data:parcel}=useQuery({
//     queryKey:['parcels',parcelId
//     ],
//     queryFn:async()=>{
//       const res=await axiosSecure.get(`/parcels/${parcelId}`)
//       return res.data;
//     }
//   })

//   if(isLoading){
//     return <div>
//       <span className="loading loading-spinner loading-xl"></span>
//     </div>
//   };

//   console.log(parcel);
//   const handlePayment=async()=>{
//     const paymentInfo={
//       cost:parcel.cost,
//       parcelId:parcel._id,
//       senderEmail:parcel.senderEmail,
//       parcelName:parcel.parcelName,
//     };

//     const res=await axiosSecure.post('/create-checkout-session',paymentInfo);
//     console.log(res.data);
//     window.location.href=res.data.url;
    
//   }
//   return (
//     <div className='mt-5'>
//       <h1 className='text-center text-secondary text-2xl font-bold'>please Pay <span className='text-red-500'>$ {parcel.cost}</span> for <span className='text-red-500'>{parcel.parcelName}</span></h1>
//       <button onClick={handlePayment} className='bg-primary text-black btn'>pay</button>
//     </div>
//   );
// };

// export default Payment;