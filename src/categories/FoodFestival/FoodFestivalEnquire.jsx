import React from "react";
import "./FoodFestivalEnquire.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";

const FoodFestivalEnquire = () => {
  return (
    <>
      <Navbar />
      <div className="foodfest-enquire-container">
        <h1 className="foodfest-enquire-title">Book a Slot for Food Festival</h1>
        <p className="foodfest-enquire-subtitle">
          Join the ultimate culinary celebration — let’s plan your food experience!
        </p>

        <form className="foodfest-enquire-form">
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email Address:</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Phone Number:</label>
          <input type="tel" placeholder="Enter your contact number" required />

          <label>Stall / Participation Type:</label>
          <select>
            <option value="">Select Option</option>
            <option value="food-stall">Food Stall</option>
            <option value="chef-show">Live Cooking Show</option>
            <option value="sponsor">Sponsorship</option>
            <option value="guest">Guest / Visitor</option>
          </select>

          <label>Date Preference:</label>
          <input type="date" required />

          <label>Special Requirements:</label>
          <textarea rows="4" placeholder="Mention any cuisine, setup, or support needs..." />

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FoodFestivalEnquire;
