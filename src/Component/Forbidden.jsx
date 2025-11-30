import React from 'react';
import { Link } from 'react-router';

const Forbidden = () => {
  return (
    <div>
      <h1 className='text-4xl text-secondary text-center font-bold'>You are not allowed for this access</h1>
      <Link to={'/'}>Go Home</Link>
    </div>
  );
};

export default Forbidden;