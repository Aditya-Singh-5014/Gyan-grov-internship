import React from "react";
import "./style.css";
import Map from "../Images/map.svg";
import Arrow from "../Images/arrow.svg";
const Location = (props) => {
  return (
    <div className="division-location">
      <section className="section-location">
        <div className="location">
          <img className="svg-small svg-black" src={Map} alt="" />
          <span> Mumbai, India</span>

          <img className="svg-small" src={Arrow} alt="" />
        </div>
        <div className="navigation">
          <a href="#">Live</a>
          <a href="#">Movies</a>
          <a href="#">Plays</a>
          <a href="#">Streams</a>
          <a href="#">Events</a>
          <a href="#">Sports </a>
          <a href="#">Activities</a>
        </div>
        <div className="empty"></div>
      </section>
    </div>
  );
};

export default Location;
