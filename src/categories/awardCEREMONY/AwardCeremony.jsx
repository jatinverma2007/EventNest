import React from "react";
import "./AwardCeremony.css";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import award1 from "../../Images/Trophy-Presentation.jpg";
import award2 from "../../Images/Red-Carpet-Walk.jpg";
import award3 from "../../Images/Live-Performance.jpg";
import { Link } from "react-router-dom";

const AwardCeremony = () => {
  return (
    <>
      <Navbar />
      <div className="award-page">
        <header className="award-hero">
          <div className="award-overlay">
            <h1>Celebrate Excellence with Elegance</h1>
            <p>From red carpets to stage lighting, we craft prestigious award ceremonies that leave a mark.</p>
          </div>
        </header>

        <section className="award-highlights">
          <div className="award-feature">
            <FaTrophy className="award-icon" />
            <h3>Customized Stage & Trophies</h3>
            <p>Design stunning awards and an elegant setup that matches your organization’s branding.</p>
          </div>
          <div className="award-feature">
            <FaMedal className="award-icon" />
            <h3>Nominee & Winner Management</h3>
            <p>Seamless coordination of nominations, voting, and winner announcement process.</p>
          </div>
          <div className="award-feature">
            <FaStar className="award-icon" />
            <h3>Red Carpet Experience</h3>
            <p>Photobooths, backdrops, press walls, and red carpet entry that dazzles guests.</p>
          </div>
        </section>

        <section className="award-gallery">
          <h2>Memorable Moments</h2>
          <div className="award-gallery-grid">
            <div>
              <img src={award1} alt="Trophy Presentation" />
              <p>Trophy Presentation</p>
            </div>
            <div>
              <img src={award2} alt="Red Carpet Walk" />
              <p>Red Carpet Walk</p>
            </div>
            <div>
              <img src={award3} alt="Live Performance" />
              <p>Live Performance</p>
            </div>
          </div>
        </section>

        <section className="award-cta">
          <h2>Plan Your Award Ceremony</h2>
          <p>Let’s design a night to honor success and create unforgettable memories. Contact our experts today.</p>
          <Link to={"/award-enquire"}>
          <button className="award-button">Book Now</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AwardCeremony;
