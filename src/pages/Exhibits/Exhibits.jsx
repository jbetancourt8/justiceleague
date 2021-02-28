import React from "react";
import "./Exhibits.css";
import { Link, useLocation } from "react-router-dom";
import data from "../../data/data.json";
import Header from "../../components/Header";
import museumImage from "../../assets/museum.jpg";

function Exhibits() {
  const location = useLocation();
  return (
    <div className="exhibits_container">
      <Header />

      <div className="exhibits_history">
        <h1>Welcome to the Justice League Museum!</h1>
        <div>
          <img src={museumImage} alt="museum" className="exhibits_museum" />
        </div>
        <p>
          Located in Washington, D.C., this state of the art facility was
          originally designed by John Stewart and Wonder Woman, financed by
          Batman, and built by Superman to be the headquarters of the Justice
          League.
        </p>
        <p>
          However, with the construction of the Justice Leagure Satellite, the
          facility was donated to the city of Washington. As a tribute to all
          the League has done, the facility is being converted into a museum.
        </p>
        <p>
          After months of renovation, we are happy to unveil our first three
          exhibits for Batman, Superman, and Wonder Woman. Click on the each
          hero to learn more about them.
        </p>
      </div>

      <div className="exhibits_bottom_content">
        {data.map((data) => {
          return (
            <div className="exhibits_item" key={data.id}>
              <Link
                to={{
                  pathname: `/${data.alt}`,
                  state: { data: data },
                }}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <div
                  className="exhibits_hero"
                  style={{
                    backgroundColor: data.colors[0],
                    borderColor: data.colors[1],
                    borderStyle: "solid",
                    borderRadius: 10,
                    borderWidth: 5,
                  }}
                >
                  <img
                    src={data.logo}
                    alt={data.alt}
                    className="exhibits_hero_logo"
                  />
                  <h2 className="exhibits_name">{data.hero}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exhibits;
