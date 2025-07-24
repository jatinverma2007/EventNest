import React from "react";
import "./PhotographyServices.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import { FaCameraRetro, FaVideo, FaPhotoVideo, FaImage } from "react-icons/fa";
import img24 from "../../Images/Bride-Portrait.jpg";
import img25 from "../../Images/Cinematic-Shot.jpg";
import img26 from "../../Images/Event-Highlights.jpg";
import img27 from "../../Images/Drone-View.jpg";
import { Link } from "react-router-dom";

const PhotographyServices = () => {
  return (
    <>
      <Navbar />
      <div className="photo-page">

        <header className="photo-hero">
          <div className="photo-overlay">
            <h1>Photography & Videography</h1>
            <p>Preserve your precious memories with professional photo & video coverage</p>
          </div>
        </header>


        <section className="photo-services">
          <h2>Our Creative Offerings</h2>
          <div className="photo-service-grid">
            <div className="photo-card">
              <FaCameraRetro className="photo-icon" />
              <h3>Event Photography</h3>
              <p>High-resolution candid and posed shots for all event types.</p>
            </div>
            <div className="photo-card">
              <FaVideo className="photo-icon" />
              <h3>HD Videography</h3>
              <p>Professional cinematic video coverage and highlight reels.</p>
            </div>
            <div className="photo-card">
              <FaPhotoVideo className="photo-icon" />
              <h3>Drone Shots</h3>
              <p>Bird’s-eye views and sweeping event coverage from the sky.</p>
            </div>
            <div className="photo-card">
              <FaImage className="photo-icon" />
              <h3>Photo Albums</h3>
              <p>Custom-designed digital & printed albums with elegant layouts.</p>
            </div>
          </div>
        </section>


        <section className="photo-gallery">
  <h2>Captured Moments</h2>
  <div className="gallery-images">
    <div className="gallery-item">
      <img src={img24} alt="Bride Portrait" />
      <p className="image-caption">Bride Portrait</p>
    </div>
    <div className="gallery-item">
      <img src={img25} alt="Cinematic Shot" />
      <p className="image-caption">Cinematic Shot</p>
    </div>
    <div className="gallery-item">
      <img src={img26} alt="Event Highlights" />
      <p className="image-caption">Event Highlights</p>
    </div>
    <div className="gallery-item">
      <img src={img27} alt="Drone View" />
      <p className="image-caption">Drone View</p>
    </div>
  </div>
</section>



        <section className="photo-cta">
          <h2>Book Your Coverage</h2>
          <p>Let’s make your memories last forever. Reach out to book a package that fits your style.</p>
          <Link to={"/photography-enquire"}>
          <button className="photo-btn">Enquire Now</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PhotographyServices;
