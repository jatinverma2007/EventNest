import React from "react";
import "./GuestManagement.css";
import { FaUserCheck, FaEnvelopeOpenText, FaClipboardList } from "react-icons/fa";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const GuestManagement = () => {
  return (
    <>
      <Navbar />
      <div className="guest-management-page">
        <header className="guest-hero">
          <h1><FaUserCheck className="guest-icon" /> Smart Guest Management</h1>
          <p>Make every guest feel special while keeping things organized and hassle-free.</p>
        </header>

        <section className="guest-features">
          <div className="guest-feature-box">
            <FaEnvelopeOpenText className="feature-icon" />
            <h3>Digital Invitations</h3>
            <p>Send beautifully crafted e-invites via email, SMS or WhatsApp in seconds.</p>
          </div>
          <div className="guest-feature-box">
            <FaClipboardList className="feature-icon" />
            <h3>Real-time RSVP Tracking</h3>
            <p>Know exactly who’s coming and follow up easily with smart RSVP tools.</p>
          </div>
          <div className="guest-feature-box">
            <FaUserCheck className="feature-icon" />
            <h3>Guest List Management</h3>
            <p>Segment guests, manage preferences, assign seating, and more!</p>
          </div>
        </section>

        <section className="guest-cta">
          <h2>Effortless Guest Handling Awaits</h2>
          <p>Focus on the celebration — we’ll handle the logistics.</p>
          <Link to={"/guest-management-page"}>
          <button>Get Started with Guest Management</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GuestManagement;
