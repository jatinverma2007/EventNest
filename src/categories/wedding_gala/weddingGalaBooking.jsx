import React, { useState } from 'react';
import './WeddingBooking.css';
import Navbar from '../../Main_Home/navbar';
import Footer from '../../Footer';

const WeddingBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    package: 'Basic',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Successful for ${formData.name}! We will contact you soon.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      package: 'Basic',
      message: ''
    });
  };

  return (
    <>
    <Navbar/>
    <div className="booking-container">
      <h1>Book Your Dream Wedding</h1>
      <p>Fill out the form below to reserve your special day with Careely</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <select
          name="package"
          value={formData.package}
          onChange={handleChange}
        >
          <option value="Basic">Basic Package</option>
          <option value="Premium">Premium Package</option>
          <option value="Royal">Royal Package</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          placeholder="Any special requests?"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default WeddingBooking;