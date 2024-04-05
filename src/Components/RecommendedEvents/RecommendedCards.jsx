import React, { useState, useEffect } from "react";
import "./StyleOfRecommended.css";
import MapWhite from "../Images/map - white.svg";

// Import all the rectangle images
import RectangleOne from "../Images/recommended/RectangleOne.svg";
import RectangleTwo from "../Images/recommended/RectangleTwo.svg";
import RectangleThree from "../Images/recommended/RectangleThree.svg";
import RectangleFour from "../Images/recommended/RectangleFour.svg";
import RectangleFive from "../Images/recommended/RectangleFive.svg";
import RectangleSix from "../Images/recommended/RectangleSix.svg";
import RectangleSeven from "../Images/recommended/RectangleSeven.svg";
import RectangleEight from "../Images/recommended/RectangleEight.svg";

// Create an array containing all the rectangle images
const rectangleImages = [
  RectangleOne,
  RectangleTwo,
  RectangleThree,
  RectangleFour,
  RectangleFive,
  RectangleSix,
  RectangleSeven,
  RectangleEight,
];

const EventCardCopy = ({ event }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    // Set a timeout to update the loaded state after a short delay
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 0);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []); // This effect runs only once after the component mounts

  useEffect(() => {
    // Choose a random image from the array
    const randomIndex = Math.floor(Math.random() * rectangleImages.length);
    setCurrentImage(rectangleImages[randomIndex]);
  }, []); // This effect runs only once after the component mounts

  return (
    <div
      style={{ backgroundImage: `url(${currentImage})` }}
      className={`carousel-item ${loaded ? "loaded" : ""}`}
    >
      <div className="carousel-details">
        <div className="event-details">
          <h2>{event.eventName}</h2>
          <h3>{new Date(event.date).toLocaleDateString()}</h3>
        </div>
        <div className="card-location">
          <div>
            <img className="svg-small" src={MapWhite} alt="" />
            <h3>{event.cityName}</h3>
          </div>
          <div>
            <h3>
              {event.weather} | {Math.floor(event.distanceKm)} km
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardCopy;
