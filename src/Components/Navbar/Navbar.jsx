import React, { useState, useEffect } from "react";
import Search from "../Images/search.svg";
import Menu from "../Images/menu.svg";
import Heart from "../Images/heart.svg";
import Account from "../Images/account.svg";
import "./navbar.css";

const Navbar = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="navbar">
        <h1>BookUsNow</h1>
        <div className="search">
          <button className="categories">
            <img className="svg" src={Menu} alt="" />
            Categories
          </button>
          <div className="input">
            <input
              spellCheck="false"
              type="text"
              placeholder="DJI phanton"
              className="search-input"
            />
            <img className="svg search-icon" src={Search} alt="" />
          </div>
        </div>
        <div className="fav-login">
          {/* Conditional rendering for fav button or icon */}
          {windowWidth >= 1220 ? (
            <>
              <button className="fav">
                <img className="svg" src={Heart} alt="" />
                Favorites
              </button>
              <button className="signIn">
                <img className="svg" src={Account} alt="" />
                Sign In
              </button>
            </>
          ) : (
            <>
              {windowWidth <= 500 && ( // Check if window width is 500px or less
                <button className="search-img">
                  <img className="svg" src={Search} alt="" />
                </button>
              )}
              <button className="fav">
                <img className="svg" src={Heart} alt="" />
              </button>
              <button className="signIn">
                <img className="svg" src={Account} alt="" />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
