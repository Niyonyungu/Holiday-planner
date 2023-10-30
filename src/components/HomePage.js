import React from "react";
import "../styles/Homepage.css";
import { ImLocation } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import About from "./AboutUs";

const Homepage = () => {
  return (
    <div>
      <div className="hometop">
        <h1>
          Get Ready to Travel <br />
          <span>The World.</span>
        </h1>
        <p>
          A journey of a 1000 miles starts with a single step. <br /> Import the
          full demo content with 1 click and create <br /> a head-turning
          website for your <br /> travel agency.
        </p>
      </div>
      <div className="whereto">
        <div className="wrap">
          <span>
            <ImLocation className="locationn" />
          </span>
          <input type="text" placeholder="where To ?" />
        </div>
        <span className="caalnd">
          <FaCalendarAlt />
        </span>
        <select name="" id="">
          <option value=""> When ?</option>
          <option value="">january</option>
          <option value="">february</option>
        </select>
        <span className="tlv">
          <FaFlag />
        </span>
        <select name="" id="">
          <option value="">Travel Type</option>
          <option value="">january</option>
          <option value="">february</option>
        </select>
        <button>FIND NOW</button>
      </div>
      <About />
    </div>
  );
};

export default Homepage;
