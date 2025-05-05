import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login/login.jsx";
import ImageSlider from './Main_Home/imageSlider.jsx';
import Signup from './login/Signup.jsx';




const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ImageSlider />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App