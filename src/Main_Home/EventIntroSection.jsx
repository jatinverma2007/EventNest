import React from 'react';
import './EventIntroSection.css';
import Img16 from '../Images/image16.jpg';
import Img17 from '../Images/image17.jpg';
import Img18 from '../Images/image18.jpg';

const EventIntroSection = () => {
  return (
    <div>
      <section className="event-section">
        <div className="event-text">
          <div className="icon-box">
            <span className="gear-icon">⚙️</span>
          </div>
          <h2>Plan Smart. Execute Flawlessly.</h2>
          <p>
            Create and manage events effortlessly with our all-in-one platform. Customize invites, manage attendees, and oversee everything from a single dashboard—so you can focus on delivering exceptional experiences.
          </p>
        </div>
        <div className="event-image">
          <img src={Img16} alt="Dashboard preview" />
        </div>
      </section>

      <section className="event-section">
        <div className="event-image">
          <img src={Img17} alt="Registration preview" />
        </div>
        <div className="event-text">
          <div className="icon-box">
            <span className="gear-icon">📋</span>
          </div>
          <h2>Streamlined Guest Registration</h2>
          <p>
            From Event Nest to on-site check-ins, simplify the guest experience with automated workflows. Collect data, send confirmations, and manage updates without lifting a finger.
          </p>
        </div>
      </section>

      <section className="event-section">
        <div className="event-text">
          <div className="icon-box">
            <span className="gear-icon">📊</span>
          </div>
          <h2>Advanced real-time services</h2>
          <p>
            Gain powerful insights into your event performance. Monitor attendance, analyze responses, and make data-driven decisions to improve every event you host.
          </p>
        </div>
        <div className="event-image">
            <div className='img-18'>
                <img src={Img18} alt="Analytics dashboard" />
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default EventIntroSection;
