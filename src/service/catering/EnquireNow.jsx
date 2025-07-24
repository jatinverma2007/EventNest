import React from "react";
import "./EnquireNow.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";

const EnquireNow = () => {
  return (
    <>
      <Navbar />
      <div className="enquire-container">
        <div className="enquire-header">
          <h1>Enquire Now</h1>
          <p>Let's discuss how we can make your event unforgettable.</p>
        </div>

        <form className="enquire-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Event Type</label>
          <select required>
            <option value="">Select...</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Meet</option>
            <option value="birthday">Birthday Bash</option>
            <option value="catering">Catering Only</option>
            <option value="other">Other</option>
          </select>

          <label>Your Message</label>
          <textarea placeholder="Tell us what you're looking for..." rows="5"></textarea>

          <button type="submit">Submit Enquiry</button>
        </form>

        <div className="enquire-contact">
          <h3>Need Help?</h3>
          <p>Email: support@eventnest.com</p>
          <p>Phone: +91-98765-43210</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnquireNow;
