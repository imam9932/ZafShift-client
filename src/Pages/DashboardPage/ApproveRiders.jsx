import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { CiEdit } from 'react-icons/ci';
import {   FaTrashCan  } from 'react-icons/fa6';
 
import { BsPersonCheckFill } from "react-icons/bs";
import { BsFillPersonXFill } from "react-icons/bs";
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';




const ApproveRiders = () => {
  const axiosSecure=UseAxiosSecure();
  const {data:riders=[],refetch}=useQuery({
    queryKey:['riders','pending'],
    queryFn:async()=>{
      const res=await axiosSecure.get("/riders");
      return res.data;
    }
  });

  const updateRidersStatus=(r,status)=>{
const updateInfo={status: status,email:r.email}
     axiosSecure.patch(`/riders/${r._id}`,updateInfo)
     .then(res=>{
      if(res.data.modifiedCount){
       Swal.fire({
        position: "top-end",
        icon: "success",
        title:  `Rider status is set to ${status}`,
        showConfirmButton: false,
        timer: 1500
      });
      refetch();
    }
     })
  }

  const handleApproval=(r)=>{
     updateRidersStatus(r,'approved')
    console.log('approval clicked')
  };

  const handleRejection=r=>{
 updateRidersStatus(r,'rejected')
  }
  return (
    <div>
      <h1 className='text-center text-3xl text-secondary font-bold'>Riders pending Approval : {riders.length}</h1>

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>NO</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>District</th>
        <th>NID</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {

        riders.map((r,index)=> <tr key={r._id}>
        <th>{index+1}</th>
        <td className='font-bold'>{r.yourName}</td>
        <td>{r.yourEmail}</td>
        <td>{
          <p className={`${r.status==='approved' ? 'text-green-800 font-bold' : 'text-red-800 font-bold'}`}>{r.status}</p>
}</td>
        <td>{r.senderDistrict}</td>
        <td>{r.yourNIDNumber}</td>
        <td>{r.yourAge}</td>
        <td className='flex gap-3'>
                  <button className='btn btn-square hover:bg-primary'>
               <FaEye></FaEye>

        </button>
                  <button onClick={()=>handleApproval(r)} className='btn btn-square hover:bg-primary'>
               <BsPersonCheckFill />

        </button>
                  <button onClick={()=>handleRejection(r)} className='btn btn-square hover:bg-primary'>
               <BsFillPersonXFill />


        </button>
                  <button className='btn btn-square hover:bg-primary'>
                 <FaTrashCan/>
        </button>
                  
                   
        </td>
        
      </tr>)
      }
      
       
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ApproveRiders;