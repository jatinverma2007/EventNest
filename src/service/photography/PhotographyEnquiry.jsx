import React from "react";
import "./PhotographyEnquiry.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";

const PhotographyEnquiry = () => {
  return (
    <>
      <Navbar />
      <div className="photo-enquiry-container">
        <h1 className="photo-enquiry-title">Photography & Videography Enquiry</h1>
        <p className="photo-enquiry-subtitle">
          Let’s discuss how we can capture your special moments in the most beautiful way.
        </p>

        <form className="photo-enquiry-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Full Name" required />

          <label>Email:</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Phone Number:</label>
          <input type="tel" placeholder="Your Contact Number" required />

          <label>Event Type:</label>
          <select required>
            <option value="">Select</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Corporate Event</option>
            <option>Other</option>
          </select>

          <label>Event Date:</label>
          <input type="date" required />

          <label>Message / Requirements:</label>
          <textarea rows="4" placeholder="Tell us what you’re looking for..." />

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PhotographyEnquiry;
