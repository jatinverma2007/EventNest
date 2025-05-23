import React,{useState} from "react"
import "./navbar.css"
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [flag,setFlag] = useState(false)
  const handleclick = () => {
    setFlag(!flag)
  }

  return (
    <nav className="navbar">
      <h1>Event Nest</h1>
      <div className = "menu-icon" onClick={handleclick}>☰</div>
      <ul className={`nav-links ${flag?'active':""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><a href="#service">Service</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Link to="/login">
      <button className="login-btn">Login</button>
      </Link>


    </nav>
    
  );
};

export default Navbar;