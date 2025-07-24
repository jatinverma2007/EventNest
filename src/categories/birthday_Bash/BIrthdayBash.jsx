import React from 'react';
import './BirthdayBash.css';
import birthdayBanner from '../../Images/birthday-banner.jpg';
import birthdayTheme from '../../Images/birthday-theme.jpg';
import birthdayVenue from '../../Images/birthday-venue.jpg';
import birthdayReview from '../../Images/birthday-review.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../../Main_Home/navbar';
import Footer from '../../Footer';

const BirthdayBash = () => {
  return (
    <>
      <Navbar />
      <div className="birthday-page">

        <section className="birthday-hero-section">
          <img src={birthdayBanner} alt="Birthday Bash" className="birthday-hero-image" />
          <div className="birthday-hero-text">
            <h1>Throw the Perfect Birthday Party</h1>
            <p>Fun, Colorful, and Custom-Tailored Celebrations</p>
          </div>
        </section>


        <section className="birthday-why-section">
          <h2>Why Choose Us for Your Birthday Bash?</h2>
          <ul>
            <li>Creative themes and party games</li>
            <li>Custom cakes, balloons, and entertainment</li>
            <li>Venues and décor tailored to all age groups</li>
          </ul>
        </section>


        <section className="birthday-package-section">
          <h2>Birthday Party Packages</h2>
          <div className="birthday-package-cards">
            <div className="birthday-card">
              <h3>Basic</h3>
              <p>Venue + Decoration + Cake</p>
              <p className="birthday-price">₹ 25,000</p>
            </div>
            <div className="birthday-card">
              <h3>Premium</h3>
              <p>All Basic + Games + Live Host</p>
              <p className="birthday-price">₹ 45,000</p>
            </div>
            <div className="birthday-card">
              <h3>Deluxe</h3>
              <p>All Premium + Magician + Photographer</p>
              <p className="birthday-price">₹ 75,000</p>
            </div>
          </div>
        </section>


        <section className="birthday-themes-section">
          <h2>Birthday Party Themes</h2>
          <img src={birthdayTheme} alt="Birthday Themes" className="birthday-theme-img" />
          <p>Choose from Cartoon, Princess, Superhero, Jungle, or DIY themes and we’ll bring them to life.</p>
        </section>


        <section className="birthday-venue-section">
          <h2>Our Favorite Venues</h2>
          <img src={birthdayVenue} alt="Birthday Venue" className="birthday-venue-img" />
          <p>From cozy indoor spaces to outdoor fun zones — we have the right place for every birthday.</p>
        </section>


        <section className="birthday-testimonial-section">
          <h2>What Parents Say</h2>
          <div className="birthday-testimonial">
            <img src={birthdayReview} alt="Happy Parent" />
            <blockquote>
              "Careely planned my son’s birthday so perfectly — the joy on his face said it all!"
            </blockquote>
            <cite>- Neha Sharma</cite>
          </div>
        </section>

        <section className="birthday-cta-section">
          <h2>Ready to Celebrate?</h2>
          <p>Connect with us to start planning the perfect birthday experience.</p>
          <button className="birthday-bookButton">
            <Link to="/birthday-booking" style={{ color: 'white', textDecoration: 'none' }}>Book Now</Link>
          </button>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default BirthdayBash;
