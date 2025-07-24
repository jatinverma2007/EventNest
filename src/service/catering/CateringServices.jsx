import React from "react";
import "./CateringServices.css";
import { FaUtensils, FaLeaf, FaConciergeBell, FaWineGlassAlt } from "react-icons/fa";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import Image20 from "../../Images/catering1.jpg"
import Image21 from "../../Images/catering2.jpg"
import Image22 from "../../Images/catering3.jpg"
import Image23 from "../../Images/catering4.jpg"
import { Link } from "react-router-dom";

const CateringServices = () => {
  return (
    <>
      <Navbar />
      <div className="catering-page">

        <header className="catering-hero">
          <div className="catering-overlay">
            <h1>Catering Services</h1>
            <p>Delight your guests with gourmet flavors and unforgettable dining experiences</p>
          </div>
        </header>

        <section className="catering-highlights">
          <h2>Why Choose Our Catering?</h2>
          <div className="highlight-cards">
            <div className="highlight-card">
              <FaUtensils className="highlight-icon" />
              <h3>Multi-Cuisine Options</h3>
              <p>Choose from Indian, Continental, Italian, Asian, and Fusion menus.</p>
            </div>
            <div className="highlight-card">
              <FaLeaf className="highlight-icon" />
              <h3>Vegan & Dietary</h3>
              <p>Customized menus for vegans, Jains, keto, and gluten-free guests.</p>
            </div>
            <div className="highlight-card">
              <FaConciergeBell className="highlight-icon" />
              <h3>Live Counters</h3>
              <p>Interactive live food stations: Chaat, Pasta, Grill, and Desserts.</p>
            </div>
            <div className="highlight-card">
              <FaWineGlassAlt className="highlight-icon" />
              <h3>Beverage Bars</h3>
              <p>Mocktails, juices, cold brews, and curated bar setups for all events.</p>
            </div>
          </div>
        </section>

        <section className="catering-gallery">
            <h2>Visual Taste</h2>
            <div className="gallery-grid">
                <figure>
                    <img src={Image20} alt="Buffet Spread" />
                <figcaption>Buffet Spread</figcaption>
                </figure>
                <figure>
                    <img src={Image21} alt="Live Counter" />
                <figcaption>Live Counter</figcaption>
                </figure>
                <figure>
                    <img src={Image22} alt="Plated Dish" />
                <figcaption>Plated Dish</figcaption>
                </figure>
                <figure>
                    <img src={Image23} alt="Dessert Bar" />
                <figcaption>Dessert Bar</figcaption>
                </figure>
            </div>
        </section>


        <section className="catering-cta">
          <h2>Let’s Serve Your Guests</h2>
          <p>Reach out to discuss customized menu curation and food styling for your event.</p>
          <Link to={"/enquire-now"}>
          <button className="catering-book-btn">Enquire Now</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CateringServices;
