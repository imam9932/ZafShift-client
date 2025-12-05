import React, { useRef, useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignRiders = () => {
  const openModalRef=useRef();
  const [selectedParcel,setSelectedParcel]=useState(null);
  const axiosSecure=UseAxiosSecure();
  const {data:parcels=[],refetch:parcelsRefetch}=useQuery({
    queryKey:['parcels','pending-pickup'],
    queryFn:async()=>{
      const res=await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
      return res.data
    }
  });

  const {data:riders=[]}=useQuery({
  queryKey:['/riders',selectedParcel?.senderDistrict,'available'],
  enabled:!!selectedParcel,
  queryFn:async()=>{
    const res=await axiosSecure.get(`/riders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`);
    return res.data;
  }
  })


  const openAssignModal=(parcel)=>{
    setSelectedParcel(parcel)
    openModalRef.current.showModal()
  };


  const handleAssignRider=rider=>{
    const riderAssignInfo={
      riderId:rider._id,
      riderEmail:rider.email,
      riderName:rider.name,
      parcelId:selectedParcel._id

    }
    axiosSecure.patch(`/parcels/${selectedParcel._id}`,riderAssignInfo)
    .then(res=>{
      if(res.data.modifiedCount){
openModalRef.current.close()
parcelsRefetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Rider has been assigned",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  return (
    <div>
      <h2 className='text-3xl text-secondary text-center font-bold'>Assign Riders : {parcels.length }</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Cost</th>
        <th>Created Time</th>
        <th>Pickup District</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
        parcels.map((parcel,index)=>  <tr key={parcel._id}>
        <th>{index+1}</th>
        <td className='font-bold'> {parcel.parcelName}</td>
        <td> {parcel.cost} $</td>
        <td> {parcel.createdAt}</td>
        <td> {parcel.senderDistrict}</td>
        <td onClick={()=>openAssignModal(parcel)} className='btn btn-primary text-black'>Find RIders</td>
      </tr> )
       }
      
       
    </tbody>
  </table>

   
<dialog ref={openModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Riders : {riders.length}</h3>
     <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
        riders.map((rider,index)=>  <tr key={rider._id}>
        <th>{index+1}</th>
        <td className='font-bold'> {rider.name}</td>
        <td> {rider.email} $</td>
        
        <td onClick={()=>handleAssignRider(rider)} className='btn btn-primary text-black'>Assign RIders</td>
      </tr> )
       }
      
       
    </tbody>
  </table>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
    </div>
  );
};

export default AssignRiders;