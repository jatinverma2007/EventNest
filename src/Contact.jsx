import React from 'react';
import './Contact.css';
import Navbar from './Main_Home/navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="main-contact-container">
      <h2 className="contact-title">Contact us</h2>
      <h3 className="contact-subtitle">
        <span className="highlight">Chat to our friendly team</span> 
      </h3>
      <p className="contact-desc">
        We’d love to hear from you. Please fill out this form or shoot us an email.
      </p>

      <div className="contact-sections">
        <div className="contact-info">
          <div className="contact-box">
            <div className="icon">📧</div>
            <h4>Email</h4>
            <p>Our friendly team is here to help.</p>
            <a href="eventnest@gmail.com">eventnest@gmail.com</a>
          </div>

          <div className="contact-box">
            <div className="icon">💬</div>
            <h4>Live Chat</h4>
            <p>Our team is here to help.</p>
            <a href="#">Start new chat</a>
          </div>

          <div className="contact-box">
            <div className="icon">📍</div>
            <h4>Office</h4>
            <p>Come say hello at our HQ.</p>
            <a href="#">100 Smith Street, VIC 3066 AU</a>
          </div>

          <div className="contact-box">
            <div className="icon">📞</div>
            <h4>Phone</h4>
            <p>Mon–Fri from 8am to 5pm.</p>
            <a href="+91 678396303269">+91 (010) 0000-0000</a>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email address" required />
            <textarea rows="6" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
