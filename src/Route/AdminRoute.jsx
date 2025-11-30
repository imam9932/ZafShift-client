import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import UseRole from '../Hooks/UseRole';
import Forbidden from '../Component/Forbidden';

const AdminRoute = ({children}) => {
  const {user,loading}=UseAuth();
  const {role,roleLoading}=UseRole()

  if(loading||roleLoading){
    return  <div>
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  }

  if(role!== 'admin'){
    return  <Forbidden></Forbidden>
  }
  return children;
};

export default AdminRoute;