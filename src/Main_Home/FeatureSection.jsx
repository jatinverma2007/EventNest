import React from 'react';
import './FeatureSection.css';
import Img13 from '../Images/image13.jpeg';
import Img14 from '../Images/image14.jpeg';
import Img15 from '../Images/image15.jpeg';

const FeatureSection = () => {
  return (
    <section className="features-section">
      <div className="feature-card customize">
        <h3>Plan with Precision</h3>
        <p>
          Effortlessly organize events from start to finish. Set dates, venues, schedules, 
          and delegate tasks—all within one centralized dashboard.
        </p>
        <img src={Img13} alt="Plan with Precision" />
      </div>
      <div className="feature-card control">
        <h3>Engage Your Audience</h3>
        <p>
          Build memorable guest experiences with branded invites, Tracking, 
          live polls, and customized communication tools.
        </p>
        <img src={Img14} alt="Engage Your Audience" />
      </div>
      <div className="feature-card automate">
        <h3>Intelligent service upgrades</h3>
        <p>
          Monitor attendance, collect insights, and analyze performance in real time. 
          Make smarter decisions to improve every future event.
        </p>
        <img src={Img15} alt="Track & Optimize" />
      </div>
    </section>
  );
};

export default FeatureSection;
