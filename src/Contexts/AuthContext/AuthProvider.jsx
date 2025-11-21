import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
 
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);


  const registerUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  };

  const signInUser=(email,password)=>{
setLoading(true);
    return signInWithEmailAndPassword(email,password)
  };

  const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)
  };
  const updateUserProfile=(profile)=>{
    return updateProfile(auth.currentUser,profile)
  }

  const googleProvider=new GoogleAuthProvider();

  const logInUserWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
  };

  const emailVerification=()=>{
    return sendEmailVerification(auth.currentUser);
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false)
    })
    return ()=>{
      unSubscribe();
    }
  },[])

  const authInfo={
registerUser,
signInUser,
signOutUser,
logInUserWithGoogle,
user,
loading,
updateUserProfile,
emailVerification,

  }
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;

};

export default AuthProvider;