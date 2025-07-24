import React from "react";
import "./ServiceSection.css";
import {
  FaCalendarAlt,
  FaUsers,
  FaMusic,
  FaUtensils,
  FaCameraRetro,
  FaPalette,
} from "react-icons/fa";
import Navbar from "../Main_Home/navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaCalendarAlt />,
    title: "Event Planning",
    description: "End-to-end event coordination from concept to execution.",
    link: "/event-planning",
  },
  {
    icon: <FaUsers />,
    title: "Guest Management",
    description: "Seamless guest list handling and RSVP tracking.",
    link:"/guest-management"
  },
  {
    icon: <FaMusic />,
    title: "Live Entertainment",
    description:
      "Book the best DJs, live bands, and performers for your event.",
    link:"/live-entertainment"
  },
  {
    icon: <FaUtensils />,
    title: "Catering Services",
    description: "Delicious cuisines curated for all tastes and preferences.",
    link:"/catering-service"
  },
  {
    icon: <FaCameraRetro />,
    title: "Photography & Videography",
    description: "Capture every memorable moment with professional services.",
    link:"/photography"
  },
  {
    icon: <FaPalette />,
    title: "Custom Themes & Decor",
    description: "Creative themes and decorations tailored for each occasion.",
    link:"/theme-page"
  },
];

const ServiceSection = () => {
  return (
    <>
      <Navbar />
      <div className="service-section">
        <h2>Our Event Services</h2>
        <div className="service-grid">
          {services.map((service, index) => {
            const content = (
             
              <div className="service-card" key={index}>
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              
            );

            return service.link ? (
              <Link
                to={service.link}
                key={index}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {content}
              </Link>
            ) : (
              content
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceSection;
