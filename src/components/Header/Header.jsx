import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="header_logo_nav">
        <div className="header_logo_container">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <h1>JL Museum</h1>
          </Link>
        </div>
        <ul
          className={
            click ? "header_nav_options header_active" : "header_nav_options"
          }
        >
          <li className="header_option" onClick={() => closeMobileMenu()}>
            <Link
              to="/exhibits"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: 25,
              }}
            >
              Exhibits
            </Link>
          </li>
          <li className="header_option" onClick={() => closeMobileMenu()}>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: 25,
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="header_mobile_menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="header_menu_icon" />
        ) : (
          <MenuIcon className="header_menu_icon" />
        )}
      </div>
    </div>
  );
}

export default Header;
