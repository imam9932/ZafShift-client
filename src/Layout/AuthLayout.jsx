import React from 'react';
import Logo from '../Component/Logo';
import { Outlet } from 'react-router';
import AuthImg from '../assets/authImage.png';

const AuthLayout = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Logo>

      </Logo>
     <div className='flex items-center'>
       <div className='flex-1'>
        <Outlet></Outlet>
      </div>
      <div className='flex-1'>
        <img src={AuthImg} alt="zapShift " />
      </div>
     </div>
    </div>
  );
};

export default AuthLayout;