import React from "react";
import "./FoodFestival.css";
import Navbar from "../../Main_Home/navbar";
import Footer from "../../Footer";
import { FaIceCream, FaHamburger, FaPizzaSlice, FaLeaf, FaFish } from "react-icons/fa";
import Img1 from "../../Images/Tasty-Bites.jpg";
import Img2 from "../../Images/Food-Stalls.jpg";
import Img3 from "../../Images/Crowd-&-Performances.jpg";
import { Link } from "react-router-dom";

const FoodFestival = () => {
  return (
    <>
      <Navbar />
      <div className="foodfest-page">

        <header className="foodfest-hero">
          <h1>Welcome to the Ultimate Food Festival</h1>
          <p>Flavors of the world — all in one place!</p>
        </header>

        <section className="foodfest-highlights">
          <div className="highlight-card">
            <FaPizzaSlice className="highlight-icon" />
            <h3>Street Food Carnival</h3>
            <p>Sample local favorites and international delights from hand-picked vendors.</p>
          </div>
          <div className="highlight-card">
            <FaIceCream className="highlight-icon" />
            <h3>Dessert Paradise</h3>
            <p>From gelato to gourmet pastries — indulge your sweet tooth!</p>
          </div>
          <div className="highlight-card">
            <FaLeaf className="highlight-icon" />
            <h3>Organic & Vegan Stalls</h3>
            <p>Healthy, sustainable, and full of flavor!</p>
          </div>
          <div className="highlight-card">
            <FaFish className="highlight-icon" />
            <h3>Live Grills & Seafood</h3>
            <p>Watch master chefs cook your favorite dishes live!</p>
          </div>
          <div className="highlight-card">
            <FaHamburger className="highlight-icon" />
            <h3>Food Challenges & Competitions</h3>
            <p>Join spicy-eating contests, cook-offs, and win fun prizes!</p>
          </div>
        </section>

        <section className="foodfest-gallery">
            <h2>Festival Moments</h2>
            <div className="gallery-wrapper">
                <figure>
                <img src={Img1} alt="Tasty Bites" />
                <figcaption>Tasty Bites</figcaption>
                </figure>
                <figure>
                <img src={Img2} alt="Food Stalls" />
                <figcaption>Food Stalls</figcaption>
                </figure>
                <figure>
                <img src={Img3} alt="Crowd & Performances" />
                <figcaption>Crowd & Performances</figcaption>
                </figure>
            </div>
        </section>


        <section className="foodfest-cta">
          <h2>Hungry to Join the Feast?</h2>
          <p>Reserve your spot now for a day of delicious fun!</p>
          <Link to={"/food-enquire"}>
          <button className="foodfest-button">Book Now</button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FoodFestival;
