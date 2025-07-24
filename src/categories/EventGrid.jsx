import React from "react";
import "./EventGrid.css";
import Img4 from "../Images/images4.jpg";
import Img5 from "../Images/image5.jpg";
import Img6 from "../Images/image6.jpg";
import Img10 from "../Images/image10.jpg";
import Img11 from "../Images/image11.jpg";
import Img12 from "../Images/image12.jpg";
import { Link } from "react-router-dom";

const EventGrid = () => {
  const events = [
    {
      name: "Wedding Gala",
      price:
        "Celebration event platform that brings together premium vendors, designers, and services for unforgettable weddings.",
      priceValue: "$5,000",
      image: Img4,
    },
    {
      name: "Corporate Meet",
      price:
        "Host impactful conferences and business gatherings with our dedicated Corporate Meet section.",
      priceValue: "$3,200",
      image: Img5,
    },
    {
      name: "Birthday Bash",
      price:
        "Celebrate birthdays in style with personalized themes, fun activities, and unforgettable moments.",
      priceValue: "$2,000",
      image: Img6,
    },
    {
      name: "Cultural Fest",
      price:
        "Celebrate diversity and tradition with vibrant performances, art, and cultural showcases.",
      priceValue: "$3,800",
      image: Img10,
    },
    {
      name: "Award Ceremony",
      price:
        "Honor excellence and achievements with a prestigious, unforgettable celebration.",
      priceValue: "$4,000",
      image: Img11,
    },
    {
      name: "Food Festival",
      price:
        "Savor the flavors of the world with a delectable feast of culinary delights and gourmet experiences.",
      priceValue: "$3,000",
      image: Img12,
    },
  ];

  return (
    <div className="grid-container">
      {events.map((event, index) => {
        const isBirthday = event.name === "Birthday Bash";
        const isWedding = event.name === "Wedding Gala";
        const isCorporate = event.name === "Corporate Meet";
        const isFest = event.name === "Cultural Fest";
        const isAward = event.name === "Award Ceremony";
        const isFoodFestival = event.name === "Food Festival";

        const content = (
          <div className="grid-item" key={index}>
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>{event.price}</p>
            <div className="event-price">{event.priceValue}</div>
          </div>
        );

        if (isWedding) {
          return (
            <Link
              to="/wedding-gala"
              key={index}
              style={{ textDecoration: "none" }}
            >
              {content}
            </Link>
          );
        } else if (isCorporate) {
          return (
            <Link
              to="/corporate-meet"
              key={index}
              style={{ textDecoration: "none" }}
            >
              {content}
            </Link>
          );
        } else if (isBirthday) {
          return (
            <Link
              to="/birthday-bash"
              key={index}
              style={{ textDecoration: "none" }}
            >
              {content}
            </Link>
          );
        } else if (isFest) {
          return (
            <Link
              to={"/cultural-fest"}
              key={index}
              style={{ textDecoration: "none" }}
            >
              {content}
            </Link>
          );
        } else if (isAward) {
          return (
            <Link
              to={"/award-ceremony"}
              key={index}
              style={{ textDecoration: "none" }}
            >
              {content}
            </Link>
          );
        } else if (isFoodFestival) {
          return (
            <Link
              to={"/food-festival"}
              key={index}
              style={{ textDecoration: "none" }}
            >
              {content}
            </Link>
          );
        } else {
          return content;
        }
      })}
    </div>
  );
};

export default EventGrid;
