import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();

  const handleSendParcel=(data)=>{

  }
  return (
    <div>
      <h1 className='text-secondary text-2xl text-center'>Send Your Parcel</h1>
      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* parcel document */}
        <div>
 <label className="label">
  <input type="radio" value={document} className="radio" defaultChecked {...register('')} />
  Document</label>
 <label className="label">
  <input type="radio" value='non-document' className="radio" defaultChecked {...register('')} />
  Non-document</label>
        </div>
        {/* parcel info:name,weight */}
        <div>

        </div>

        {/* two column */}
        <div>

          {/*  sender info*/}
          <div>

          </div>
          {/* receiver info */}
          <div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;