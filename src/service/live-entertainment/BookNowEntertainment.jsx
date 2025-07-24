import React from "react";
import "./BookNowEntertainment.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";

const BookNowEntertainment = () => {
  return (
    <>
      <Navbar />
      <div className="entertainment-booknow-container">
        <h1 className="entertainment-title">Book Live Entertainment Services</h1>
        <p className="entertainment-subtitle">
          From electrifying performances to unforgettable shows — make your event come alive!
        </p>

        <form className="entertainment-form">
          <label>Full Name:</label>
          <input type="text" placeholder="Your Full Name" required />

          <label>Email Address:</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Contact Number:</label>
          <input type="tel" placeholder="Mobile Number" required />

          <label>Select Entertainment Type:</label>
          <select required>
            <option value="">Choose an option</option>
            <option value="dj">DJ Night</option>
            <option value="band">Live Band</option>
            <option value="dance">Dance Performance</option>
            <option value="anchor">Anchor / Host</option>
            <option value="celebrity">Celebrity Appearance</option>
          </select>

          <label>Preferred Date:</label>
          <input type="date" required />

          <label>Venue / Location:</label>
          <input type="text" placeholder="Venue Address" required />

          <label>Additional Notes:</label>
          <textarea rows="4" placeholder="Any special requests or details?" />

          <button type="submit">Submit Booking</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookNowEntertainment;
