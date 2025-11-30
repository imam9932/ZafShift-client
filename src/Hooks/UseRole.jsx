import React from 'react';
import UseAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseRole = () => {
  const {user}=UseAuth();
  const axiosSecure=UseAxiosSecure();
  const {isLoading:roleLoading,data:role='user'}=useQuery({
    queryKey:['user-role',user?.email],
    queryFn:async()=>{
      const res=await axiosSecure.get(`/users/${user.email},'role`)
      return res.data;
    }
  })
  return {
    role,roleLoading
   };
};

export default UseRole;