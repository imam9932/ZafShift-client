import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseAuth from '../../Hooks/UseAuth';
import { useLoaderData } from 'react-router';

import riderimage from '../../assets/agent-pending.png';
import Swal from 'sweetalert2';
const Rider = () => {
   const { register, handleSubmit,  
    control } = useForm();

    const axiosSecure=UseAxiosSecure();
    const {user}=UseAuth();

    const data=useLoaderData();
   

  const duplicateRegions=data.map(region=>region.region);
  const regions=[...new Set(duplicateRegions)];
  
  const riderRegion=useWatch( {control,name:'riderRegion'});

  const handleRiderApplication=(data)=>{
console.log(data);
axiosSecure.post('/riders',data)
.then(res=>{
  if(res.data.insertedId){
     Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your application has been submitted.We will reach to you in 45 days ",
      showConfirmButton: false,
      timer: 1500
    });
  }
})
  };

   const districtsByRegions=region=>{
    const regionDistricts=data.filter(r=>r.region===region);
    const districts=regionDistricts.map(d=>d.district);
    return districts;

  }
  return (
    <div className='mt-5 p-3 '>
      <h2 className='text-4xl text-secondary text-center font-bold'>Be a Rider</h2>

       <form onSubmit={handleSubmit(handleRiderApplication)}>
        
        
        

        {/* two column */}
        <div className='flex flex-col md:flex-row items-center gap-12  '>

          <div className='flex-1'>
            {/*  Rider info*/}
            <h4 className='text-2xl font-semibold text-secondary'>Tell us about yourself</h4>
            <fieldset className="fieldset">
              {/* your name */}
              <label className="label">Your Name</label>
              <input type="text" {...register('yourName')} className="input w-full" placeholder="your name" defaultValue={user?.displayName} />
              {/* your email address */}
              <label className="label">Your Email</label>
              <input type="email" {...register('yourEmail')} className="input w-full" placeholder="your email" defaultValue={user?.email} />
               
              {/* your NID no */}
              <label className="label">Your NID Number</label>
              <input type="number" {...register('yourNIDNumber')} className="input w-full" placeholder="NID" />
              {/* your phone no */}
              <label className="label">Your Number</label>
              <input type="number" {...register('yourPhoneNumber')} className="input w-full" placeholder="number" />
              {/* your age*/}
              <label className="label">Your age</label>
              <input type="number" {...register('yourAge')} className="input w-full" placeholder="your age" />
              {/* sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Regions</legend>
                <select  {...register('riderRegion')}defaultValue="Pick a region" className="select w-full">
                  <option disabled={true}>Pick a region</option>
                 {
                  regions.map((r,i)=> <option key={i} value={r}>{r} </option>)
                 }
                 </select>
                   
              </fieldset>

               {/* sender district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Districts</legend>
                <select  {...register('senderDistrict')}defaultValue="Pick a district" className="select w-full">
                  <option disabled={true}>Pick a district</option>
                 {
                  districtsByRegions( riderRegion).map((r,i)=> <option key={i} value={r}>{r} </option>)
                 }
                 </select>
                   
              </fieldset>



              
              {/* work destination */}
              <label className="label">Which wire-house you want to work</label>
              <input type="text" {...register('workDestination')} className="input w-full" placeholder="write wire-house name" />
            </fieldset>
          </div>

          <div className='flex-1'>
            <img src={riderimage} alt="" />
          </div>
           
           
        </div>
        <input type='submit' className='btn btn-primary my-8 text-black' value='Apply as a Rider' />
      </form>
    </div>
  );
};

export default Rider;