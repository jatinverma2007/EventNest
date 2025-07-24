import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { auth } from "../login/firebase";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleClick = () => setFlag(!flag);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="navbar">
      <h1>Event Nest</h1>
      <div className="menu-icon" onClick={handleClick}>
        ☰
      </div>
      <ul className={`nav-links ${flag ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {user ? (
        <button className="login-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
