import React from "react";
import "./LiveEntertainment.css";
import { FaMicrophoneAlt, FaGuitar, FaHeadphones, FaMusic } from "react-icons/fa";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const LiveEntertainment = () => {
  return (
    <>
      <Navbar />
      <div className="live-entertainment-container">
        <header className="live-entertainment-hero">
          <FaMusic className="live-icon" />
          <h1>Live Entertainment Services</h1>
          <p>Bring your event to life with unforgettable performances!</p>
        </header>

        <section className="live-services">
          <h2>Our Entertainment Offerings</h2>
          <div className="live-service-cards">
            <div className="live-card">
              <FaMicrophoneAlt className="card-icon" />
              <h3>Professional Emcees</h3>
              <p>Engaging hosts to manage the stage, games, and announcements with energy.</p>
            </div>
            <div className="live-card">
              <FaGuitar className="card-icon" />
              <h3>Live Bands</h3>
              <p>Versatile bands across genres like pop, classical, Bollywood, and fusion.</p>
            </div>
            <div className="live-card">
              <FaHeadphones className="card-icon" />
              <h3>Top DJs</h3>
              <p>Dance the night away with curated playlists by the best DJs in the industry.</p>
            </div>
          </div>
        </section>

        <section className="live-extras">
          <h2>Extra Features</h2>
          <ul>
            <li>Stage & lighting setup with dynamic effects</li>
            <li>Customized playlists and genre preferences</li>
            <li>Interactive games and audience engagement</li>
            <li>Pre-event coordination with artists</li>
          </ul>
        </section>

        <section className="live-cta">
          <h2>Book Your Entertainment</h2>
          <p>Let’s curate the perfect sound and vibe for your event. Reach out today!</p>
          <Link to={"/booknow-entertainment"}>
          <button className="live-book-btn">Book Now</button>
          </Link> 
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LiveEntertainment;
