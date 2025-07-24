import React from 'react';
import './Details.css';
import Navbar from './navbar';
import Footer from '../Footer'


const Details = () => {
  return (
    <>
    <Navbar/>
    <div className="details-container">
      <h1>About Our Event Management Platform</h1>
      <p>
        Our platform is designed to make organizing events simple, efficient, and stress-free.
        Whether you're planning a large-scale conference, a wedding, a college fest, or a private party, our tools help you stay organized at every step.
      </p>
      
      <p>
        We believe that great events begin with great planning. That's why our system gives you full control — from sending digital invites and collecting RSVPs, to tracking attendance and post-event feedback.
        You focus on creating memorable experiences — we'll handle the logistics.
      </p>

      <h2>Key Features:</h2>
      <ul>
        <li>Smart registration & guest list management</li>
        <li>Custom event web pages with branding</li>
        <li>Automated email & SMS notifications</li>
        <li>Real-time check-ins and attendee tracking</li>
        <li>Insights through dashboards and reports</li>
        <li>Budget tracking and expense planning</li>
      </ul>

      <p>
        Whether you're a student, event planner, or business — our platform is tailored to meet your needs.
        It's built to scale, easy to use, and helps you make informed decisions throughout your event journey.
      </p>

      <p>
        Join us in creating smarter, better-managed events that leave lasting impressions.
      </p>

    </div>
    <Footer/>
    </>
  );
};

export default Details;
