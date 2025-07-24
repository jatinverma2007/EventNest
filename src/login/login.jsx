import React from 'react';
import './Login.css';
import Navbar from '../Main_Home/navbar';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password);
      console.log("user logged in successfully");
      toast.success("user loged in successfully",{position:'top-center'})
      navigate("/")
      
    } catch (error) {
      console.log(error.message)
      toast.error(error.message,{position:'bottom-center'})
      
    }

  }


  return (
    <>
    <Navbar/>
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue</p>
        <form className="login-form" onSubmit={handleSubmit}>
        <input type="email"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>

        <div className="social-login">
          <div className="google-login">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="social-icon"
            />
            <span>Login with Google</span>
          </div>
          <div className="facebook-login">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="social-icon"
            />
            <span>Login with Facebook</span>
          </div>
        </div>
        <p className="login-footer">Don't have an account? <a href='/signup'>Sign Up</a></p>
      </div>
    </div>
    </>
  );
};

export default Login;
