import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
  const {user}=UseAuth();
  const axiosSecure=UseAxiosSecure();

  const {data:parcels=[],refetch}=useQuery({
    queryKey:['parcels',user.email,'driver_assigned'],
    queryFn:async()=>{
      const res=await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`)
      console.log('data',res.data)
      return res.data;
    }
  });

  const handleStatusUpdate=(parcel,status)=>{
const statusInfo={deliveryStatus:status}

let message=`parcel status is updated with ${status.split('_').join(' ')}`

axiosSecure.patch(`/parcels/${parcel._id}/status`,statusInfo)
.then(res=>{
  if(res.data.modifiedCount){
    refetch()
     Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }
})
  }
  return (
    <div>
      <h1>Parcels pending pickup : {parcels.length}</h1>

      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Confirm</th>
        <th>Other Actions</th>
      </tr>
    </thead>
    <tbody>
      { parcels.map((parcel,i)=>  <tr>
        <th>{i+1}</th>
        <td>Cy Ganderton</td>
        <td>
         {
          parcel.deliveryStatus==='driver_assigned' ? <li>

             <button onClick={()=>handleStatusUpdate(parcel,'rider_arriving')} className='btn-btn-primary text-black'>Accept</button>
          <button className='btn-btn-warning text-black'>Reject</button>
          </li> :
          <span> Accepted</span>
         }
          
        </td>
        <td> 
          <button onClick={()=>handleStatusUpdate(parcel,'parcel_picked_up')} className='btn btn-primary text-black'>Mark as Picked up</button>
          <button onClick={()=>handleStatusUpdate(parcel,'parcel_delivered')} className='btn btn-primary text-black'>Mark as Delivered</button>
        </td>
      </tr> )}
     
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AssignedDeliveries;