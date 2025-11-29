import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UsersManagement = () => {

  const axiosSecure=UseAxiosSecure();

   const {data:users=[]}=useQuery({
queryKey:['users'],
queryFn:async()=>{
  const res=await axiosSecure.get(`/users`);
  return res.data;
  
}

   });
   console.log(users)
  return (
    <div>
      <h1 className='text-center text-secondary text-3xl font-bold'>User Management : {users.length}</h1>
    </div>
  );
};

export default UsersManagement;