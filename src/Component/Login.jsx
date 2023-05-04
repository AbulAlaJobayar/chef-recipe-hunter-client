import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { singIn, singInWithGoogle, singInWithGithub } = useContext(AuthContext)

  const navigate=useNavigate();
  const location=useLocation();
  const from =location.state?.from?.pathname || "/";
const [error,setError]=useState('')

  const handleLogin = (event) => {
    event.preventDefault();
    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email, password) {
      singIn(email, password)
        .then(result => {
          const singInUser = result.user;
          navigate(from,{replace:true})
        })
        .catch(err => {
          console.log(err.message)
          setError(err.message)
        })
    }

  }

  const handleGoogleSingin = () => {
    singInWithGoogle()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const handleGithubSingin = () => {
    singInWithGithub()
      .then((result) => {

        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  }


  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body"  onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email"  name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
              
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            </div>
              
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-base">Don't have an account? <Link to='/register' className='text-amber-500 font-bold'> Register</Link></a>
              </label>
              <p className='text-red-400'>{error}</p>
          </form>
          <div className='flex flex-col'>
      <button className='mt-2 btn btn-primary' onClick={handleGoogleSingin}> <FaGoogle></FaGoogle> sing in with google</button>
      <button  className='mt-2 btn btn-success' onClick={handleGithubSingin}><FaGithub></FaGithub> sing in with github</button>
      </div>
        </div>
      </div>

    </div>
  );
};

export default Login;