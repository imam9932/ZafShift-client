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

      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Cost</th>
        <th> Actions</th>
      </tr>
    </thead>
    <tbody>
       {
        parcels.map((parcel,index)=>
           <tr key={parcel._id}>
        <th> {index+1}</th>
        <td> {parcel.parcelName}</td>
        <td> {parcel.cost}</td>
        <td><button className='btn btn-square'>
          <CiEdit />

          </button></td>
      </tr>
        )
       }
     
       
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyParcels;