import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvaider/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {
    const {login}=useContext(AuthContext)
    const location=useLocation()
    console.log(location);
    
    const navigate=useNavigate()
   const handleLogin=(e)=>{
     e.preventDefault()
     const email = e.target.email.value;
        const password = e.target.password.value;
        login(email,password)
        .then(res=>{
            console.log(res.user);
            toast.success('Login Successfull')
            navigate(`${location.state ? location.state :'/'}`)
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
      <h1 className="text-5xl font-bold text-white">Login Now!</h1>
      
    </div>
    <div className="card bg-white/80 backdrop-blur-md w-full max-w-sm shrink-0 shadow-2xl rounded-[2.5rem]">
      <div className="card-body">

        <form onSubmit={handleLogin}>
           <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input rounded-2xl" placeholder="Email" name='email'/>
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input rounded-2xl" placeholder="Password" name='password'/>
           <div><a className="link link-hover">Forgot password?</a></div>
          
          <button
           className="btn btn-neutral mt-4 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500">
            Login
            </button>

            

            <p className='font-semibold text-center pt-5'>
            New to our Account? 
            <NavLink className='text-secondary ml-1' to='/register'>Register Now</NavLink>
            </p>
            
            
        </fieldset>
        </form>

       

      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;