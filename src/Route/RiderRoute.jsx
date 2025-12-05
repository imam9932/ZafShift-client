import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import UseRole from '../Hooks/UseRole';

const RiderRoute = ({children}) => {

  const {user,loading}=UseAuth();
  const {role,roleLoading}=UseRole()

  if(loading||roleLoading ||!user){
    return  <div>
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  }

  if(role!== 'rider'){
    return
      // <Forbidden></Forbidden>
  }
  return children;
  ;
};

export default RiderRoute;