import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./RecommendedCards";
import "./StyleOfRecommended.css";
import Strip from "./Strip.jsx";

function MainComponent() {
  const [scrollPos, setScrollPos] = useState(0);
  const [events, setEvents] = useState([]);
  let itemsPerPage = 4; // Number of items visible in the carousel at a time

  // Check the screen size and update itemsPerPage accordingly
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
        );
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      setScrollPos((prevPos) => prevPos + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Check the screen size and update itemsPerPage accordingly
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        itemsPerPage = 1;
      } else {
        itemsPerPage = 4;
      }
    };

    handleResize(); // Call it once to set initial value

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Calculate the maximum scroll position
    const maxScrollPos = Math.ceil(events.length / itemsPerPage + 3);

    if (scrollPos >= maxScrollPos) {
      // Reset scroll position to 0 when it reaches the end
      setTimeout(() => {
        setScrollPos(0);
      }, 1000);
    }
  }, [scrollPos, events, itemsPerPage]);

  return (
    <>
      <div className="carousel-container">
        <Strip name="Recommended for you" check="true" />
        <div
          className="carousel"
          style={{ transform: `translateX(-${scrollPos * 25}%)` }}
        >
          {events.map((event, index) => (
            <div className="col" key={index}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default MainComponent;
