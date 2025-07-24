import React from 'react';
import './WeddingGala.css';
import weddingImg from '../../Images/wedding-banner.jpg';
import themeImg from '../../Images/wedding-themes.jpg';
import venueImg from '../../Images/wedding-venue.jpg';
import reviewImg from '../../Images/wedding-review.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../../Main_Home/navbar';
import Footer from '../../Footer';

const WeddingGala = () => {
  return (
    <>
      <Navbar />
      <div className="wedding-page">

        <section className="wedding-hero-section">
          <img src={weddingImg} alt="Wedding Gala" className="wedding-hero-image" />
          <div className="wedding-hero-text">
            <h1>Make Your Dream Wedding Come True</h1>
            <p>Elegant, Memorable, and Uniquely Yours with Careely</p>
          </div>
        </section>

        <section className="wedding-why-section">
          <h2>Why Choose Us for Your Wedding Gala?</h2>
          <ul>
            <li>Customizable wedding themes and experiences</li>
            <li>Experienced planners and curated vendors</li>
            <li>End-to-end services: venue, decor, food, entertainment</li>
          </ul>
        </section>


        <section className="wedding-package-section">
          <h2>Wedding Packages</h2>
          <div className="wedding-package-cards">
            <div className="wedding-card">
              <h3>Basic</h3>
              <p>Venue + Catering + Decor</p>
              <p className="wedding-price">₹ 1,00,000</p>
            </div>
            <div className="wedding-card">
              <h3>Premium</h3>
              <p>All Basic + Live Music + Photography</p>
              <p className="wedding-price">₹ 2,50,000</p>
            </div>
            <div className="wedding-card">
              <h3>Royal</h3>
              <p>All Premium + Luxury Decor + Designer Outfits</p>
              <p className="wedding-price">₹ 5,00,000</p>
            </div>
          </div>
        </section>


        <section className="wedding-themes-section">
          <h2>Popular Wedding Themes</h2>
          <img src={themeImg} alt="Wedding Themes" className="wedding-theme-img" />
          <p>Choose from Beach, Palace, Garden, or Modern Minimalist themes customized to your style.</p>
        </section>


        <section className="wedding-venue-section">
          <h2>Top Venue Options</h2>
          <img src={venueImg} alt="Wedding Venue" className="wedding-venue-img" />
          <p>We collaborate with premium venues across India — from royal palaces to modern banquets.</p>
        </section>


        <section className="wedding-testimonial-section">
          <h2>What Our Couples Say</h2>
          <div className="wedding-testimonial">
            <img src={reviewImg} alt="Happy Couple" />
            <p>
              "Careely made our wedding the best day of our lives! Every detail was perfect."
            </p>
            <p>- Riya & Aarav</p>
          </div>
        </section>


        <section className="wedding-cta-section">
          <h2>Plan Your Wedding with Us</h2>
          <p>Contact our team today to schedule a consultation or request a quote.</p>
          <button className="wedding-bookButton">
            <Link to="/wedding-booking" style={{ color: 'white', textDecoration: 'none' }}>Book Now</Link>
          </button>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default WeddingGala;
