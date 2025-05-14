import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login/login.jsx";
import Signup from './login/Signup.jsx';
import Details from './Main_Home/Details.jsx';
import Contact from './Contact.jsx';
import Home from './Main_Home/Home.jsx'; 
import Categorie from './categories/category.jsx';



const App = () => {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path='/' element={<ImageSlider />}/> */}
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path="/detail" element={<Details />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path='/categories' element={<Categorie/>}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App