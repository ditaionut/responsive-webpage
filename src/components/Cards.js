import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out this EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the amazonian jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Fly to Bali"
              label="Beach"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Ride in the Saharah desert in a guided Camel Tour"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Set seil in the Atlantic Ocean"
              label="Water"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Expirience football on the top of the Himalayan Mountains"
              label="Sport"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
