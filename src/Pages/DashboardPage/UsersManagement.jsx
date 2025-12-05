import React, { useState } from 'react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FiShieldOff } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';


const UsersManagement = () => {

  const axiosSecure=UseAxiosSecure();
  const [searchText,setSearchText]=useState('')

   const {data:users=[],refetch}=useQuery({
queryKey:['users',searchText],
queryFn:async()=>{
  const res=await axiosSecure.get(`/users?searchText=${searchText}`);
  return res.data;
  
}

   });
   


   const handleMakeUser=(user)=>{
    const roleInfo={role:'admin'}

// must ask for confirmation before proceed



    axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
    .then(res=>{
      if(res.data.modifiedCount){
      console.log(res.data)
      refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} User Marked as an Admin`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
   }
   const handleRemoveAdmin=(user)=>{
    const roleInfo={role:'user'}

    //  must ask for confirmation before proceed



    axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
    .then(res=>{
      if(res.data.modifiedCount){
      console.log(res.data)
      refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} removed from Admin`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
   }
  return (
    <div>
      <h1 className='text-center text-secondary text-3xl font-bold'>User Management : {users.length}</h1>

      <div className="overflow-x-auto">
        <p>Search text :{searchText}</p>

<label className="input">
  
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className="grow" placeholder="Search" onChange={(e)=>setSearchText(e.target.value)} />
   
</label>


  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Admin Action</th>
        <th>Others Action</th>
      </tr>
    </thead>
    <tbody>
      { users.map((user,index)=> <tr key={user._id}>
        <th>{index+1}</th>
        <td> {user.displayName}</td>
        <td> {user.email}</td>
        <td>  
          {user.role==='admin'? <button onClick={()=>handleRemoveAdmin(user)} className='btn'> <FiShieldOff />
</button>: <button onClick={()=>handleMakeUser(user)} className='btn'> <FaUserShield />

</button> }
        </td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>)}
      
       
    </tbody>
  </table>
</div>
    </div>
  );
};

export default UsersManagement;