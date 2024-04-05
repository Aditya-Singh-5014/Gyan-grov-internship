import React from "react";
import ArrowRightWhite from "../Images/arrow-right.svg";
import ArrowRightBlack from "../Images/arrow-right copy.svg";

const Strip = (props) => {
  const fontColor = props.check === "true" ? "white" : "black";
  return (
    <>
      <div className="strip">
        <h2>
          <a style={{ color: fontColor }} className="recommendation" href="#">
            <span>{props.name}</span>
            {props.check === "true" ? (
              <img className="svg" src={ArrowRightWhite} alt="" />
            ) : (
              <img className="svg" src={ArrowRightBlack} alt="" />
            )}
          </a>
        </h2>
        {props.check === "true" ? (
          <h5>
            <a href="#">See all</a>
          </h5>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Strip;
