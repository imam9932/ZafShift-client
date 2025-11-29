 import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';
import { toast } from 'react-toastify';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
 
const Register = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const {registerUser,logInUserWithGoogle,updateUserProfile, }= UseAuth()
  const navigate=useNavigate();
  const location=useLocation();
  const axiosSecure=UseAxiosSecure()

  const handleRegistration=(data)=>{
    console.log('after register',data);
    const profileImg=data.photo[0];


    registerUser(data.email,data.password)
    .then(result=>{
      console.log(result.user);
      toast.success('create account successful')

      // store the image and get the photo url
      const formData=new FormData();
      formData.append('image',profileImg)
      const image_API_URL=`https://api.imgbb.com/1/upload?key=a52fc5e71b64ac0b6b528963b985be2a`

      axios.post(image_API_URL,formData)
      .then(res=>{
         const photoURL=res.data.data.url;

        //  create user in database
       const userInfo={
        email:data.email,
        displayName:data.name,
        photoURL:photoURL
       }
        axiosSecure.post('/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log('user created in the database')
          }
        })
      


      // update user profile

      const userProfile={
        displayName:data.name,
        photoURL:photoURL,
      }
      return updateUserProfile(userProfile)
      })
      .then(res=>{
        console.log('updated profile',res)
        Navigate(location.state|| '/')
      })
      .catch(error=>{
        console.log(error)
      })
    })
    .catch(error=>{
      console.log(error.message)
      toast.error(error.message)
    })

    
    }
    const handleGoogleLogin=()=>{
  logInUserWithGoogle()
  // email verification
  // emailVerification()
  // .then(result=>{
  //       console.log(result.user);
  //       toast.success('Check your email')
  //     })
  //     .catch(error=>{
  //       console.log(error.message)
  //       toast.error(error.message)
  //     })



  .then(result=>{
        console.log(result.user);
        toast.success('Google login successful')
       navigate(location?.state || '/')
// create user in the database
        const userInfo={
        email:result.user.email,
        displayName:result.user.name,
        photoURL:result.user.photoURL
       };
       axiosSecure.post('/users',userInfo)
       .then(res=>{
        console.log('user data has been stored',res.data)
         navigate(location?.state || '/')

       })
      })
      .catch(error=>{
        console.log(error.message)
        toast.error(error.message)
      })
  }
  
  

  return (
    <div  className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
       <h3 className='text-3xl text-center text-secondary font-bold'>Create an Account</h3>
    <p className='text-sm text-center'>Register with ZapShift</p>
      <form onSubmit={handleSubmit(handleRegistration)} className='card-body'>
        <fieldset className="fieldset">
          {/* photo */}
          <label className="label">Your Photo</label>
          <input type="file" {...register('photo',{required:true})} className="file-input" placeholder="Your Photo" />
          {
            errors.photo?.type==='required' && <p className='text-red-500'>
              photo is required.
            </p>
          }
          {/* name */}
          <label className="label">Your Name</label>
          <input type="text" {...register('name',{required:true})} className="input" placeholder="name" />
          {
            errors.name?.type==='required' && <p className='text-red-500'>
              name is required.
            </p>
          }
          {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
          {
            errors.email?.type==='required' && <p className='text-red-500'>
              Email is required.
            </p>
          }
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,
            minLength:6,
            pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
})} className="input" placeholder="Password" />
          {
            errors.password?.type==='required' && <p className='text-red-500'>Password is required</p>
          }
          {
            errors.password?.type==='minLength' && <p className='text-red-500'>
              Password must be 6 characters or longer
            </p>
          }
          {
            errors.password?.type==='pattern' && <p className='text-red-500'>
              password should be one upperCase,one lowerCase
            </p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='text-center text-lg'>-----------or-----------</p>
        </fieldset>
      </form>
          <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
         <p className='text-sm text-center'>Already have an account ? please <Link state={location.state} to={'/login'} className='text-blue-700 underline'>Login</Link></p>
    </div>
  );
};

export default Register;