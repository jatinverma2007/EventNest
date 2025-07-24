import React, { useState } from 'react';
import './Signup.css';
import Navbar from '../Main_Home/navbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { useNavigate } from 'react-router-dom';
import { setDoc,doc } from 'firebase/firestore';
import { toast } from 'react-toastify';



const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })


  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = formData.email;
    const name = formData.name;
    const password = formData.password;
    try { 
      await createUserWithEmailAndPassword(auth,formData.email,formData.password)
      const user = auth.currentUser;
      console.log(user)
      console.log("user registered succesfully")
    
      if (user){
        await setDoc(doc(db,'users',user.uid),{
          email:user.email,
          firstname:formData.name,
          password:formData.password
        });
        console.log("user registered succesfully")
        toast.success("User Registered Succesfully",{position:'top-center'})
      };
      navigate("/")
      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message,{position:'bottom-center',})
      };
      
    }
    console.log('Signup Data:', formData)
   ;
    
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
