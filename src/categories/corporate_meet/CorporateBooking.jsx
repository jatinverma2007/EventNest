import React, { useState } from 'react';
import './CorporateBooking.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Main_Home/navbar';
import Footer from '../../Footer';

const CorporateBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
    alert('Your booking request has been submitted!');
    setFormData({ name: '', email: '', phone: '', eventType: '', date: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    <div className="booknow-container">
      <h2>Book Your Event</h2>
      <form className="booknow-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="eventType" placeholder="Event Type (e.g., Wedding, Corporate)" value={formData.eventType} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <textarea name="message" placeholder="Additional Details" value={formData.message} onChange={handleChange} rows="4"></textarea>
        <button type="submit">
            Submit Booking
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default CorporateBooking;
