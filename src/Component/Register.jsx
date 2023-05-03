import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const [error, setError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const name = form.name.value;
    const Photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(name, Photo, email, password)
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) {
      setError('password Minimum eight characters, at least one letter and one number');
      return
    }
    createUser(email, password)
      .then(result => {
        const loggeduser = result.user;
        console.log(loggeduser);

      })
      .catch(err => {
        console.log(err.massage);
        setError(err.message);
      })
  }





  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      
      
        <div className="hero-content flex-col">
        <h1 className='text-2xl font-bold'>Register Now</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered"  required/>
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-base">Already have an account?<Link to='/login' className='text-amber-500 font-bold'> LogIn</Link></a>
              </label>
              <p className=''><small className='text-red-500'>{error}</small></p>
            </form>
            
          </div>
        </div>
    </div>

  );
};

export default Register;