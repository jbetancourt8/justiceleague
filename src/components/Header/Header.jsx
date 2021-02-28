import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import jlLogo from "../../assets/jllogo.png";

function Header() {
  return (
    <div className="header">
      <div className="header_logo_nav">
        <div className="header_logo_container">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <img className="header_logo" src={jlLogo} alt="jl logo" />
          </Link>
        </div>
        <ul style={{ listStyleType: "none" }}>
          <li className="header_option">
            <Link
              to="/exhibits"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 25,
                textShadow: "2px 2px red",
              }}
            >
              Exhibits
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
