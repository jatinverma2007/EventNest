import React from "react";
import "./CulturalFest.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import Image32 from "../../Images/Traditional-Performance.jpg";
import Image33 from "../../Images/Cultural-Art-Display.jpg";
import Image34 from "../../Images/Food-Festival.jpg";
import { Link } from "react-router-dom";

const CulturalFest = () => {
  return (
    <>
      <Navbar />
      <div className="culturalfest-page">
        <header className="culturalfest-hero">
          <h1>Celebrate Diversity with Our Cultural Fest</h1>
          <p>Bringing together art, tradition, music, and color from all corners of the nation!</p>
        </header>

        <section className="culturalfest-section">
          <div className="culturalfest-row">
            <div className="culturalfest-text">
              <h2>Traditional Performances</h2>
              <p>Experience folk dances, classical music, and regional performances that reflect the true essence of Indian heritage.</p>
            </div>
            <img src={Image32} alt="Traditional Performance" className="culturalfest-img" />
          </div>

          <div className="culturalfest-row reverse">
            <img src={Image33} alt="Cultural Art Display" className="culturalfest-img" />
            <div className="culturalfest-text">
              <h2>Art & Craft Exhibitions</h2>
              <p>Explore local crafts, handmade art, and heritage exhibits from across the country. A vibrant platform for artisans and creators.</p>
            </div>
          </div>

          <div className="culturalfest-row">
            <div className="culturalfest-text">
              <h2>Food Stalls & Regional Cuisines</h2>
              <p>Taste authentic flavors from different states — from Rajasthani thalis to South Indian filter coffee and more!</p>
            </div>
            <img src={Image34} alt="Food Festival" className="culturalfest-img" />
          </div>
        </section>

        <section className="culturalfest-cta">
          <h2>Host a Cultural Fest with Us</h2>
          <p>Celebrate tradition, talent, and togetherness. Reach out now to organize a vibrant cultural event!</p>
          <Link to={"/cultural-fest-enquire"}>
          <button className="culturalfest-btn">Enquire Now</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CulturalFest;
