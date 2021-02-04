import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_container">
      <video
        className="home_video"
        autoPlay="autoPlay"
        muted="muted"
        loop="loop"
      >
        <source src="./assets/Earth_Loop.mp4" type="video/mp4" />
      </video>

      <div className="home_content">
        <img
          src="./assets/Justice-League-logo.png"
          alt="JL logo"
          height="200"
        />
        <h1 className="home_text">Welcome to the Justice League Museum</h1>
        <h2 className="home_text">
          Honoring the heros that keep our planet safe.
        </h2>
        <h3 className="home_text">Opening Soon!</h3>

        <Link to="./exhibits">
          <button className="home_button">Check out exhibits</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
