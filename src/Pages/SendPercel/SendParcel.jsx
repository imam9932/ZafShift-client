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
        {/* document */}
        <div>

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