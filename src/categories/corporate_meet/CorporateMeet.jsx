import React from 'react';
import './CorporateMeet.css';
import bannerImg from '../../Images/corporate-banner.jpg';
import agendaImg from '../../Images/corporate-agenda.jpg';
import venueImg from '../../Images/corporate-venue.jpg';
import reviewImg from '../../Images/corporate-review.jpg';
import Navbar from '../../Main_Home/navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
const CorporateMeet = () => {
  return (
    <>
    <Navbar/>
    <div className="corporate-page">


      <section className="hero-section">
        <img src={bannerImg} alt="Corporate Meet" className="hero-image" />
        <div className="hero-text">
          <h1>Plan Smart. Meet Smarter.</h1>
          <p>Corporate events designed to impress, connect, and inspire.</p>
        </div>
      </section>


      <section className="why-section">
        <h2>Why Choose Us for Your Corporate Meet?</h2>
        <ul>
          <li>Tailored agendas and tech-enabled setups</li>
          <li>End-to-end logistics, hospitality, and catering</li>
          <li>Trusted by top brands for smooth execution</li>
        </ul>
      </section>


      <section className="package-section">
        <h2>Corporate Packages</h2>
        <div className="package-cards">
          <div className="card">
            <h3>Essential</h3>
            <p>Venue + Audio/Visual Setup + Tea/Coffee</p>
            <p className="price">₹ 60,000</p>
          </div>
          <div className="card">
            <h3>Professional</h3>
            <p>Essential + Branding Setup + Lunch + Tech Support</p>
            <p className="price">₹ 1,20,000</p>
          </div>
          <div className="card">
            <h3>Executive</h3>
            <p>All Professional + Panel Host + Corporate Gifting</p>
            <p className="price">₹ 2,00,000</p>
          </div>
        </div>
      </section>


      <section className="themes-section">
        <h2>Popular Conference Themes</h2>
        <img src={agendaImg} alt="Corporate Agenda" className="theme-img" />
        <p>Whether it's leadership, innovation, or industry-specific trends, we align your meet with your business goals.</p>
      </section>


      <section className="venue-section">
        <h2>Premium Venue Options</h2>
        <img src={venueImg} alt="Corporate Venue" className="venue-img" />
        <p>We offer elegant halls, conference centers, and hotels with world-class infrastructure and connectivity.</p>
      </section>


      <section className="testimonial-section">
        <h2>Client Experiences</h2>
        <div className="testimonial">
          <img src={reviewImg} alt="Corporate Client" />
          <p>
            "Careely handled our annual summit flawlessly. Highly professional and detailed."
          </p>
          <p>- Ankit Sharma, CEO of TechBridge</p>
        </div>
      </section>


      <section className="cta-section">
        <h2>Host Your Corporate Meet with Us</h2>
        <p>Schedule a consultation or get a customized quote tailored to your company needs.</p>
        <Link to="/corporate-booking">
            <button>Book Now</button>
        </Link>
      </section>

    </div>
    <Footer/>
    </>
  );
};
        
        

export default CorporateMeet;
