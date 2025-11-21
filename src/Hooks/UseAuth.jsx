import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const UseAuth = () => {
   
  return useContext(AuthContext);
};

export default UseAuth;