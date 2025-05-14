import React from 'react';
import './ImageSlider.css';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
// import EventGrid from './EventGrid';
import Img1 from '../Images/image1.jpg';
import Img2 from '../Images/image2.jpg';
import Img3 from '../Images/image3.jpg';


const EventSection = () => {
  return (
    <>
    <div className="event-section">
      <div className="event-text">
        <h1>Manage Events Effortlessly</h1>
        <p>Our platform helps you automate your event journey from invites to check-ins — all in one place.</p>
        <Link to="/detail">
        <button className="learn-btn">Learn More</button>
        </Link>
      </div>

      <div className="event-images">
        <div className='box1'> <img src={Img1} alt="Event 1" /></div>
        <div className='box2'> <img src={Img2} alt="Event 2" /></div>
        <div  className='box3'> <img src={Img3} alt="Event 3" /></div>
      </div>
    </div>
    </>
  );
};

export default EventSection;
