import React from 'react'
import Navbar from "./Home/navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login";


const Home = () => (
  <section style={{ padding: '2rem' }}>
    <h2>Welcome to the Home Page</h2>
  </section>
);

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>

    
  )
}

export default App