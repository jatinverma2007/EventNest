import React from 'react';
import './EventGrid.css';
import  Img4 from '../Images/images4.jpg';
import  Img5 from '../Images/image5.jpg';
import Img6 from '../Images/image6.jpg';
import Img7 from '../Images/image7.jpg';
import Img8 from '../Images/image8.jpg';
import Img9 from '../Images/image9.jpg';
import Img10 from '../Images/image10.jpg';
import Img11 from '../Images/image11.jpg';
import Img12 from '../Images/image12.jpg';

const EventGrid = () => {
  const events = [
    { name: 'Wedding Gala', price: ' Celebration event platform that brings together premium vendors, designers, and services for unforgettable weddings.', image: Img4 },
    { name: 'Corporate Meet', price: 'Host impactful conferences and business gatherings with our dedicated Corporate Meet section.', image: Img5 },
    { name: 'Birthday Bash', price: "Celebrate birthdays in style with personalized themes, fun activities, and unforgettable moments.", image: Img6 },
    { name: 'Fashion Show', price: "Showcase style, glamour, and trends with stunning runway experiences at your fashion event.", image: Img7 },
    { name: 'Music Concert', price: "Bring the stage to life with electrifying performances and unforgettable music experiences.", image: Img8 },
    { name: 'Charity Event', price: "Make a difference through meaningful gatherings that inspire giving and create impact.", image: Img9 },
    { name: 'Cultural Fest', price: "Celebrate diversity and tradition with vibrant performances, art, and cultural showcases.", image: Img10 },
    { name: 'Award Ceremony', price: "Honor excellence and achievements with a prestigious, unforgettable celebration.", image: Img11 },
    { name: 'Food Festival', price: "Savor the flavors of the world with a delectable feast of culinary delights and gourmet experiences."

, image: Img12},
  ];

  return (
    <div className="grid-container">
      {events.map((event, index) => (
        <div className="grid-item" key={index}>
          <img src={event.image} alt={event.name} />
          <h3>{event.name}</h3>
          <p>{event.price}</p>
        </div>
      ))}
    </div>
  );
};

export default EventGrid;
