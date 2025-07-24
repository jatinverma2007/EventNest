import React from "react";
import "./AwardEnquire.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";

const AwardEnquire = () => {
  return (
    <>
      <Navbar />
      <div className="award-enquire-container">
        <div className="award-enquire-box">
          <h1>Enquire for Award Ceremony</h1>
          <p>Let us help you craft an unforgettable celebration of achievement and excellence.</p>
          
          <form className="award-enquire-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Organization / Brand" />
            <input type="date" placeholder="Preferred Date" />

            <textarea rows="4" placeholder="Tell us more about your award ceremony..."></textarea>

            <button type="submit">Submit Enquiry</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AwardEnquire;
