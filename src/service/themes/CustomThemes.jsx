import React from "react";
import "./CustomThemes.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import { FaFeatherAlt, FaCrown, FaTree, FaStar } from "react-icons/fa";
import Image28 from "../../Images/Boho-Chic-Setup.jpg";
import Image29 from "../../Images/Royal-Entrance.jpg";
import Image30 from "../../Images/Nature-Stage.jpg";
import Image31 from "../../Images/Celestial-Decor.jpg";
import { Link } from "react-router-dom";

const CustomThemes = () => {
  return (
    <>
      <Navbar />
      <div className="custom-decor-page">
        <header className="decor-hero">
          <div className="decor-hero-overlay">
            <h1>Custom Themes & Decor</h1>
            <p>Create magic with personalized themes and artistic event styling</p>
          </div>
        </header>

        <section className="decor-themes">
          <h2>Explore Our Themes</h2>
          <div className="theme-cards">
            <div className="theme-card">
              <FaFeatherAlt className="theme-icon" />
              <h3>Boho Chic</h3>
              <p>Dreamy setups with pampas grass, pastels & minimal elegance.</p>
            </div>
            <div className="theme-card">
              <FaCrown className="theme-icon" />
              <h3>Royal Palace</h3>
              <p>Rich textures, chandeliers & grand floral installations.</p>
            </div>
            <div className="theme-card">
              <FaTree className="theme-icon" />
              <h3>Nature Inspired</h3>
              <p>Earthy palettes, greens, and sustainable design elements.</p>
            </div>
            <div className="theme-card">
              <FaStar className="theme-icon" />
              <h3>Celestial</h3>
              <p>Galaxy lights, moon props, and magical evening vibes.</p>
            </div>
          </div>
        </section>

        <section className="decor-gallery">
          <h2>Visual Inspirations</h2>
          <div className="gallery-images">
            <div>
              <img src={Image28} alt="Boho Chic Setup" />
              <p className="img-label">Boho Chic Setup</p>
            </div>
            <div>
              <img src={Image29} alt="Royal Entrance" />
              <p className="img-label">Royal Entrance</p>
            </div>
            <div>
              <img src={Image30} alt="Nature Stage" />
              <p className="img-label">Nature Stage</p>
            </div>
            <div>
              <img src={Image31} alt="Celestial Decor" />
              <p className="img-label">Celestial Decor</p>
            </div>
          </div>
        </section>

        <section className="decor-cta">
          <h2>Design Your Own Theme</h2>
          <p>Our team of designers will work closely with you to craft a decor story that matches your vision and personality.</p>
          <Link to={"/theme-enquiry"}>
          <button className="decor-contact-btn">Enquire Now</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CustomThemes;
