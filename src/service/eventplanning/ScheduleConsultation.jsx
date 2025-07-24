import React from "react";
import "./ScheduleConsultation.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";

const ScheduleConsultation = () => {
  return (
    <>
      <Navbar />
      <div className="schedule-container">
        <h2>Schedule Your Consultation</h2>
        <p>Let’s connect and start planning your perfect event!</p>
        <form className="schedule-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email address" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Select a Date</label>
          <input type="date" required />

          <label>Preferred Time</label>
          <input type="time" required />

          <label>Additional Notes</label>
          <textarea placeholder="Share any specific expectations..." rows="4" />

          <button type="submit">Confirm Appointment</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ScheduleConsultation;
