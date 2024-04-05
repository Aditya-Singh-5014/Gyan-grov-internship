import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import MainComponent from "./Components/RecommendedEvents/RecommendedEvents";
import Location from "./Components/Location/Location";
import Strip from "./Components/RecommendedEvents/Strip";
import UpcomingEvents from "./Components/UpcomingEvents/UpcomingEvengts";
const App = (props) => {
  return (
    <div className="MainBody">
      <Navbar />
      <Location />
      <Home />
      <MainComponent />
      <Strip name="Upcoming Events" check="false" />
      <UpcomingEvents />
    </div>
  );
};

export default App;
