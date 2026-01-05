import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvaider/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const {handleRegister,updateUser, setUser,googleSignIn}=useContext(AuthContext)
    const [nameError, setNameError] = useState("");
     const navigate=useNavigate()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(email,password,name,photo);

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

if (!regex.test(password)) {
  setNameError(
    "Password must contain at least 1 uppercase, 1 lowercase and be at least 6 characters long"
  );
  toast.error("Invalid password");
  return;
} else {
  setNameError("");
}
        
        handleRegister(email,password)
        .then(res=>{

            const result=res.user
            updateUser({ displayName: name, photoURL: photo })
            .then(()=>{
                setUser({...result,displayName: name, photoURL: photo})
                toast.success("update successfull")
                navigate('/')
                
            }).catch((err)=>{
               toast.error(err.code)
            })
            toast.success('Register Successfull')
            
        }).catch((err)=>{
            console.log(err.message);
            toast.error(err.code)
            setNameError(err.message)
        })

    }
    
    const handleSignInWithGoogle=()=>{
      googleSignIn()
      .then(res=>{
            console.log(res.user);
            toast.success('Login Successfull')
            navigate('/')
        }).catch(err=>{
            toast.error(err.code)
        })
   }

    return (
        <div className="hero  min-h-screen
          shadow-[0_20px_50px_rgba(0,0,0,0.1)]
           bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500">

  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-white">Register!</h1>
      
    </div>
    <div className="card bg-white/80 w-full max-w-sm shrink-0 shadow-2xl bg-white/70, backdrop-blur-xl rounded-[2.5rem]">
      <div className="card-body">

        <form onSubmit={handleSubmit}>
           <fieldset className="fieldset">
            {/* Name Input */}
            <label className="label">Your Name</label>
            <input type="text" className="input rounded-2xl" placeholder="Name" name='name' required />
            {/* Photo URL Input */}
            <label className="label">Photo Url</label>
            <input type="text" className="input rounded-2xl" placeholder="Photo Url " name='photo' required />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input rounded-2xl" placeholder="Email" name='email'/>
          {/* password */}
          <label className="label">Password</label>
          {
            setNameError && <p className='text-red-500 font-bold'>{setNameError}</p>
          }
          <input type="password" className="input rounded-2xl" placeholder="Password" name='password'/>
          {
            nameError && <p className='font-bold text-red-500'>{nameError}</p>
          }
          <button
           className="btn btn-neutral mt-4 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 ">
            Register
            </button>
            {/* Google */}
                       <button onClick={handleSignInWithGoogle} type="button" className="btn bg-white text-black border-[#e5e5e5]">
                       <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                         signup with Google
                       </button>
            <p className='font-semibold text-center pt-5'>
            Already have an Account? 
            <NavLink className='text-secondary ml-1' to='/login'>Login</NavLink>
            </p>
            
        </fieldset>
        </form>
        
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;