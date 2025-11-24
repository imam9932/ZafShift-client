import React from 'react';
import { Link } from 'react-router';

const PaymentCancell = () => {
  return (
    <div>
<h1 className='text-secondary text-2xl font-bold text-center'>Payment is cancelled . Please try again</h1>
<Link className='btn btn-primary text-black' to={'/dashboard/my-parcels'}>Try Again</Link>
    </div>
  );
};

export default PaymentCancell;