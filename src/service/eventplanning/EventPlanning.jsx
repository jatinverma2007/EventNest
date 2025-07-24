import React from "react";
import "./EventPlanning.css";
import { FaCalendarCheck } from "react-icons/fa";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const EventPlanning = () => {
  return (
    <>
      <Navbar />
      <div className="event-planning-page">
        <header className="event-planning-hero">
          <FaCalendarCheck className="calendar-icon" />
          <h1>Professional Event Planning</h1>
          <p>From concept to celebration — we plan it all flawlessly!</p>
        </header>

        <section className="event-planning-details">
          <h2>Our Planning Services Include:</h2>
          <ul>
            <li>Initial event consultation and theme design</li>
            <li>Timeline creation and milestone tracking</li>
            <li>Venue sourcing and vendor coordination</li>
            <li>Budget planning and resource management</li>
            <li>On-site supervision and team management</li>
          </ul>
        </section>

        <section className="event-planning-cta">
          <h2>Ready to Start Planning?</h2>
          <p>Let’s turn your ideas into a memorable event. Contact us today to begin!</p>
          <Link to={"/schedule-consultation"}>
          <button>Schedule a Consultation</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EventPlanning;
