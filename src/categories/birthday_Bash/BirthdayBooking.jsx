import React from 'react';
import './BirthdayBooking.css';
import Navbar from '../../Main_Home/navbar';
import Footer from '../../Footer';

const BirthdayBooking = () => {
  return (
    <>
      <Navbar />
      <div className="birthday-booking-container">
        <h1 className="birthday-booking-title">Book Your Birthday Bash</h1>
        <p className="birthday-booking-subtitle">Celebrate in style with custom themes, delicious cakes, and fun activities!</p>

        <form className="birthday-booking-form">
          <label>Name:</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email address" required />

          <label>Phone Number:</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Event Date:</label>
          <input type="date" required />

          <label>Guest Count:</label>
          <input type="number" placeholder="Approx. number of guests" required />

          <label>Theme Preference:</label>
          <select>
            <option value="superhero">Superhero</option>
            <option value="princess">Princess</option>
            <option value="sports">Sports</option>
            <option value="custom">Custom</option>
          </select>

          <label>Additional Notes:</label>
          <textarea placeholder="Any special requests or ideas..." rows="4" />

          <button type="submit">Submit Booking</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BirthdayBooking;
