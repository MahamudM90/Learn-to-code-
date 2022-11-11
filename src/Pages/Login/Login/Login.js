import React, {useContext} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider'
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      login(email, password)
      .then( result => {
          const user = result.user;
          console.log(user);
          alert('Login Success')
          form.reset();
          navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error)
        alert('Login Failed')

      } )
  }

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
          .then(result => {
              const user = result.user;
              console.log(user);
             // navigate(from, { replace: true });
          })
          .catch(error => console.error(error))
  }
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6"></p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p>Are You Not Registered? <Link to="/register" className="link link-hover">Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google SignIn</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;