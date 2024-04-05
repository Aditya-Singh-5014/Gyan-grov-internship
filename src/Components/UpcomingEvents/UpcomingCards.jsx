import React from "react";
import Map from "../Images/map.svg";
import "./style.css";

// Import SVG images
import One from "../Images/upcoming/one.svg";
import Two from "../Images/upcoming/two.svg";
import Three from "../Images/upcoming/three.svg";
import Four from "../Images/upcoming/four.svg";
import Five from "../Images/upcoming/five.svg";
import Six from "../Images/upcoming/six.svg";
import Seven from "../Images/upcoming/seven.svg";
import Eight from "../Images/upcoming/eight.svg";
import Nine from "../Images/upcoming/nine.svg";
import Ten from "../Images/upcoming/ten.svg";

const images = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten];

const EventCardTwo = ({ event }) => {
  // Generate a random index to select an image from the array
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return (
    <div className="main-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${randomImage})` }}
      >
        <h2 className="event-date">
          {new Date(event.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h2>
      </div>
      <div className="card-details">
        <h2>{event.eventName}</h2>
        <div className="card-location">
          <div>
            <img className="svg-small" src={Map} alt="" />
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

export default EventCardTwo;
