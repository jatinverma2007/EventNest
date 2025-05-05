import React from 'react';
import './ImageSlider.css';
import Navbar from './navbar';
const EventSection = () => {
  return (
    <>
    <Navbar/>
    <div className="event-section">
      <div className="event-text">
        <h1>Manage Events Effortlessly</h1>
        <p>Our platform helps you automate your event journey from invites to check-ins — all in one place.</p>
        <button className="learn-btn">Learn More</button>
      </div>

      <div className="event-images">
        <div className='box1'> <img src="https://wowtheparty.com/img/4.jpg" alt="Event 1" /></div>
        <div className='box2'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQInnHM4ZjbUit0BzJX8nc9w7BWRwIZbuD9Q&s" alt="Event 2" /></div>
        
        
        <div  className='box3'> <img src="https://imgs.search.brave.com/c0Y2iSB9-m9jU4u_LPJpBGaSfxxK4XcG9AEEvU5r4Jo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9l/eGNpdGVkLWF1ZGll/bmNlLXdhdGNoaW5n/LWNvbmZldHRpLWZp/cmV3b3Jrcy1oYXZp/bmctZnVuLW11c2lj/LWZlc3RpdmFsLW5p/Z2h0LWNvcHktc3Bh/Y2VfNjM3Mjg1LTU1/OS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw" alt="Event 3" /></div>
      
      </div>
    </div>
    </>
  );
};

export default EventSection;
