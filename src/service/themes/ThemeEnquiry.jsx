import React from "react";
import "./ThemeEnquiry.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";

const ThemeEnquiry = () => {
  return (
    <>
      <Navbar />
      <div className="theme-enquiry-container">
        <h1 className="theme-enquiry-heading">Enquire for Custom Theme & Decor</h1>
        <p className="theme-enquiry-subtext">
          Tell us your vision and we'll bring it to life with elegance and creativity.
        </p>

        <form className="theme-enquiry-form">
          <div className="theme-enquiry-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="theme-enquiry-row">
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Preferred Event Date" required />
          </div>

          <textarea placeholder="Describe your theme idea or inspiration..." rows="5" required />

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ThemeEnquiry;
