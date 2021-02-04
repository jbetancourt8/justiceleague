import React from "react";
import "./Heros.css";
import { Link } from "react-router-dom";

function Heros({
  hero,
  name,
  logo,
  alt,
  sidekick,
  powers,
  origin,
  status,
  colors,
}) {
  return (
    <Link to={`/${alt}`}>
      <div
        className="heros"
        style={{
          backgroundColor: colors && colors[1],
          borderColor: colors && colors[2],
          borderStyle: "solid",
          borderRadius: 10,
        }}
      >
        <img
          src={`../../assets/${logo}`}
          alt={alt}
          width="80"
          className="heros_logo"
        />
        <h2>{hero}</h2>
      </div>
    </Link>
  );
}

export default Heros;

/*<Link to={alt && `/${alt}`}>
      <div
        className="heros"
        style={{
          backgroundColor: bgColor,
          borderColor: bc,
          borderStyle: "solid",
          borderRadius: 10,
        }}
      >
        <img src={src} alt={alt} width="50" className="heros_logo" />
        <h2>{hero}</h2>
        {status && <h3>{status}</h3>}
      </div>
    </Link>*/
