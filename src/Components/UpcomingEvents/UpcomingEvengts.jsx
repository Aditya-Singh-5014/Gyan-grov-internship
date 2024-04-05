import React from "react";
import EventCardTwo from "./UpcomingCards";
import { useState, useEffect } from "react";
import axios from "axios";

const UpcomingEvents = (props) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
        );
        setEvents(response.data.events.slice(0, 6)); // Get only the first 6 events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  // Shuffle the events array
  const shuffledEvents = events.sort(() => Math.random() - 0.5);

  // Take the first 6 events
  const selectedEvents = shuffledEvents.slice(0, 6);
  return (
    <div className="upcomingEvents">
      {events.map((event, index) => (
        <div className="col-main" key={index}>
          <EventCardTwo event={event} />
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
