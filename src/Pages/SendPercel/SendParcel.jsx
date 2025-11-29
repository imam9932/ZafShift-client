import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseAuth from '../../Hooks/UseAuth';

const SendParcel = () => {
  const { register, handleSubmit,  
  control } = useForm();
const axiosSecure=UseAxiosSecure();
const {user}=UseAuth()
const navigate=useNavigate();



  const data=useLoaderData();
   

  const duplicateRegions=data.map(region=>region.region);
  const regions=[...new Set(duplicateRegions)];
  
  const senderRegion=useWatch( {control,name:'senderRegion'});
  const receiverRegion=useWatch({control,name:'receiverRegion'})

  const districtsByRegions=region=>{
    const regionDistricts=data.filter(r=>r.region===region);
    const districts=regionDistricts.map(d=>d.district);
    return districts;

  }
  
  

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument =data.parcelType==='document';
    const isSameDistrict=data.senderDistrict===data.receiverDistrict;
     const parcelWeight=parseFloat(data.parcelWeight);
    //  console.log(parcelWeight);


     let cost=0;
     if(isDocument){
      cost=isSameDistrict? 60:80;

     }
     else{
      if(parcelWeight <3){
        cost=isSameDistrict? 110:150;

      }
      else{
        const minCharge=isSameDistrict? 110:150;
        const extraWeight=parcelWeight-3;
        const extraCharge=isSameDistrict? extraWeight*40 : extraWeight *40+40;
        cost=minCharge+extraCharge;
      }
     }
     console.log(cost);
 
     data.cost=cost;

     Swal.fire({
  title: "Please check the cost before confirmation",
  text: `You have to pay ${cost} TK `,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, I Agree"
}).then((result) => {
  if (result.isConfirmed) {

    // save parcel info to the database
    axiosSecure.post('/parcels',data)
    .then(res=>{
    console.log('after saving parcel',res.data);

    if(res.data.insertedId){

      navigate('/dashboard/my-parcels')
      
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
    }
    }
    )

  }
});
  }
  return (
    <div className='p-3'>
      <h1 className='text-secondary text-2xl text-center'>Send Your Parcel</h1>
      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* parcel document */}
        <div>
          <label className="label">
            <input type="radio" value='document' className="radio" defaultChecked {...register('parcelType')} />
            Document</label>
          <label className="label">
            <input type="radio" value='non-document' className="radio" defaultChecked {...register('parcelType')} />
            Non-document</label>
        </div>
        {/* parcel info:name,weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          {/* name */}
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel name" />
          </fieldset>
          {/* weight */}
          <fieldset className="fieldset">
            <label className="label">Parcel weight (kg)</label>
            <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel weight" />
          </fieldset>
        </div>

        {/* two column */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 '>

          <div>
            {/*  sender info*/}
            <h4 className='text-2xl font-semibold'>Sender Details</h4>
            <fieldset className="fieldset">
              {/* sender name */}
              <label className="label">Sender Name</label>
              <input type="text" {...register('senderName')} className="input w-full" placeholder="sender name" defaultValue={user?.displayName} />
              {/* sender email address */}
              <label className="label">Sender Email</label>
              <input type="email" {...register('senderEmail')} className="input w-full" placeholder="sender email" defaultValue={user?.email} />
               
              {/* sender phone no */}
              <label className="label">Sender Phone Number</label>
              <input type="number" {...register('senderPhoneNumber')} className="input w-full" placeholder="sender phone number" />
              {/* sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Regions</legend>
                <select  {...register('senderRegion')}defaultValue="Pick a region" className="select">
                  <option disabled={true}>Pick a region</option>
                 {
                  regions.map((r,i)=> <option key={i} value={r}>{r} </option>)
                 }
                 </select>
                   
              </fieldset>

               {/* sender district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Districts</legend>
                <select  {...register('senderDistrict')}defaultValue="Pick a district" className="select">
                  <option disabled={true}>Pick a district</option>
                 {
                  districtsByRegions( senderRegion).map((r,i)=> <option key={i} value={r}>{r} </option>)
                 }
                 </select>
                   
              </fieldset>



              
              {/* pickup instruction */}
              <label className="label">PickUp Instruction</label>
              <input type="text" {...register('pickupInstruction')} className="input w-full" placeholder="pickup instruction" />
            </fieldset>
          </div>
          {/* receiver info */}
          <div>

            <h4 className='text-2xl font-semibold'>Receiver Details</h4>
            <fieldset className="fieldset">
              {/* receiver name */}
              <label className="label">Receiver Name</label>
              <input type="text" {...register('receiverName')} className="input w-full" placeholder="receiver name" />
              {/* receiver email address */}
              <label className="label">Receiver Email</label>
              <input type="email" {...register('receiverEmail')} className="input w-full" placeholder="receiver email" />
              
              {/* receiver phone no */}
              <label className="label">Receiver Phone Number</label>
              <input type="number" {...register('receiverPhoneNumber')} className="input w-full" placeholder="receiver phone number" />
              {/* receiver region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Regions</legend>
                <select  {...register('receiverRegion')}defaultValue="Pick a region" className="select">
                  <option disabled={true}>Pick a region</option>
                 {
                  regions.map((r,i)=> <option key={i} value={r}>{r} </option>)
                 }
                 </select>
                   
              </fieldset>

               {/* receiver district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Districts</legend>
                <select  {...register('receiverDistrict')}defaultValue="Pick a district" className="select">
                  <option disabled={true}>Pick a district</option>
                 {
                  districtsByRegions( receiverRegion).map((r,i)=> <option key={i} value={r}>{r} </option>)
                 }
                 </select>
                   
              </fieldset>

              {/* delivery instruction */}
              <label className="label">Delivery Instruction</label>
              <input type="text" {...register('deliveryInstruction')} className="input w-full" placeholder="delivery instruction" />
            </fieldset>
          </div>
          <p>* PickUp Time 4pm-7pm Approx.</p>
        </div>
        <input type='submit' className='btn btn-primary mt-8 text-black' value='send Parcel' />
      </form>
    </div>
  );
};

export default SendParcel;