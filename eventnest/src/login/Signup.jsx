import React, { useState } from 'react';
import './Signup.css';
import Navbar from '../Main_Home/navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signup Data:', formData)
  };
    
  return (
    <>
    <Navbar/>
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} required/>

        <button type="submit">Sign Up</button>

        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
    </>
  );
};

export default Signup;
