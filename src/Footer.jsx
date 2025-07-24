import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">


        <div className="footer-about">
          <h2>Event Nest</h2>
          <p>Empowering event success — from dream weddings to corporate meets, we plan it all with style and precision.</p>
        </div>


        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>


        <div className="footer-services">
          <h3>Our Events</h3>
          <ul>
            <li><Link to="/wedding-gala">Wedding Gala</Link></li>
            <li><Link to="/corporate-meet">Corporate Meets</Link></li>
            <li><Link to="/birthday-bash">Birthday Bash</Link></li>
            <li><Link to="/cultural-fest">Cultural Fest</Link></li>
          </ul>
        </div>


        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Rishihood University, Sonipat, Haryana</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> contact@eventnest.com</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Event Nest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
