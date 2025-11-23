import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyParcels = () => {
  const {user}=UseAuth();
  const axiosSecure=UseAxiosSecure();
  const {data: parcels=[]}=useQuery({
    queryKey:['myParcels',user?.email],
    queryFn:async()=>{
      const res=await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;    }
  })
  return (
    <div  className='mt-5'>
      <h1 className='text-center text-secondary text-2xl font-bold'>All of My parcels ({parcels.length})</h1>
    </div>
  );
};

export default MyParcels;