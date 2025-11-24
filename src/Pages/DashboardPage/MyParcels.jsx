import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { CiEdit } from "react-icons/ci";
import { FaMagnifyingGlass 
} from "react-icons/fa6";
import { CiTrash } from "react-icons/ci";
import Swal from 'sweetalert2';
import { Link } from 'react-router';




const MyParcels = () => {
  const {user}=UseAuth();
  const axiosSecure=UseAxiosSecure();
  const {data: parcels=[],refetch}=useQuery({
    queryKey:['myParcels',user?.email],
    queryFn:async()=>{
      const res=await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;    }
  });

  const handleDelete=(id)=>{
    console.log(id);
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    axiosSecure.delete(`/parcels/${id}`)
    .then(res=>{
      console.log(res.data)

      if(res.data.deletedCount){

// refresh the ui
        refetch()
        Swal.fire({
          title: "Deleted!",
          text: "Your parcel has been deleted.",
          icon: "success"
        });
      }
    })
  }
});
  }
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
        <th> Payment Status</th>
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
        <td> 
          {
            parcel.paymentStatus==='paid'? <span className='text-green-400'>paid</span> : <Link to={`/dashboard/payment/${parcel._id}`} className='btn btn-primary text-black'>pay</Link>
          }
        </td>
        <td className='flex gap-3'>
          <button className='btn btn-square hover:bg-primary'>
        <CiEdit/>
</button>
          <button className='btn btn-square hover:bg-primary'>
       <FaMagnifyingGlass />

</button>
          <button onClick={()=>handleDelete(parcel._id)} className='btn btn-square hover:bg-primary'>
       <CiTrash />

</button>
</td>
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