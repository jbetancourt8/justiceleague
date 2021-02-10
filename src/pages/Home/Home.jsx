import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import Header from "../../components/Header";

function Home() {
  return (
    <div className="home_container">
      <div className="home_header">
        <Header />
      </div>

      <div>
        <video
          className="home_video"
          autoPlay="autoPlay"
          muted="muted"
          loop="loop"
          playsInline
        >
          <source src="./assets/Earth_Loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="home_content">
        <img
          src="./assets/Justice-League-logo.png"
          alt="JL logo"
          className="home_logo"
        />
        <p className="home_title">Welcome to the Justice League Museum</p>
        <p className="home_text">
          Honoring the heros that keep our planet safe.
        </p>
        <p className="home_text">Opening Soon!</p>

        <Link to="./exhibits">
          <button className="home_button">
            <h4>Check out our exhibits</h4>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
