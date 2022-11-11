import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider'
const Register = () => {
 
  const {createUser} = useContext(AuthContext)
  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        alert('Registration is Success')
        form.reset();
       
    })
    .catch(error => {
      console.log(error)
      alert('Registration is Failed')

    } )
} 

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register!</h1>
      <p className="py-6"></p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
          <p>New here to Learn Code ? <Link to="/login" className="link link-hover">Login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-secondary">Register</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;