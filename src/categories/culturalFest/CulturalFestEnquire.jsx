import React from "react";
import "./CulturalFestEnquire.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";

const FestEnquire = () => {
  return (
    <>
      <Navbar />
      <div className="fest-enquire-container">
        <div className="fest-enquire-header">
          <h1>Enquire for Cultural Fest</h1>
          <p>Host a vibrant celebration of art, tradition, and talent — make it unforgettable with us!</p>
        </div>

        <form className="fest-enquire-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="Enter contact number" required />
          </div>

          <div className="form-group">
            <label>Event Date</label>
            <input type="date" required />
          </div>

          <div className="form-group">
            <label>Type of Cultural Fest</label>
            <select required>
              <option value="">Select</option>
              <option>Inter-college Fest</option>
              <option>School Annual Function</option>
              <option>Public Cultural Showcase</option>
              <option>Custom Event</option>
            </select>
          </div>

          <div className="form-group">
            <label>Special Requirements</label>
            <textarea rows="4" placeholder="Any special instructions or cultural performances?"></textarea>
          </div>

          <button type="submit" className="fest-submit-btn">Submit Enquiry</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FestEnquire;
