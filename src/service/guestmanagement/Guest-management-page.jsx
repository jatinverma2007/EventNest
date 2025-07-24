import React from "react";
import "./Guest-management-page.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import { FaUserFriends, FaPaperPlane, FaClipboardCheck } from "react-icons/fa";

const GuestManagement = () => {
  return (
    <>
      <Navbar />
      <div className="guest-wrap">
        <header className="guest-hero">
          <h1>Smart Guest Management Services</h1>
          <p>Ensure smooth guest handling from invitations to confirmations with our powerful tools.</p>
        </header>

        <section className="guest-tools">
          <div className="guest-card">
            <FaUserFriends className="guest-icon" />
            <h3>Upload Guests</h3>
            <p>Upload contacts via spreadsheet or manually. Categorize your guests by type or group.</p>
          </div>
          <div className="guest-card">
            <FaPaperPlane className="guest-icon" />
            <h3>Send Digital Invites</h3>
            <p>Design custom e-invites and share instantly with RSVP tracking built-in.</p>
          </div>
          <div className="guest-card">
            <FaClipboardCheck className="guest-icon" />
            <h3>Manage Attendance</h3>
            <p>Track responses, send follow-ups, and generate a live attendance report.</p>
          </div>
        </section>

        <section className="guest-contact-form">
          <h2>Need Help Managing Guests?</h2>
          <p>Submit your details and we’ll help you create a seamless guest experience for your event.</p>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Share your guest requirements..." rows="4" required></textarea>
            <button type="submit">Contact Guest Manager</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GuestManagement;
