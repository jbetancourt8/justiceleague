import React from "react";
import "./Exhibits.css";
import { Link, useLocation } from "react-router-dom";
import data from "../../data/data.json";
import Header from "../../components/Header";

function Exhibits() {
  const location = useLocation();
  return (
    <div className="exhibits">
      <Header />
      <h1>Welcome to the Justice League Museum.</h1>
      <div className="exhibits_history">
        <div>
          <img
            src="../../assets/museum.jpg"
            alt="museum"
            height={250}
            className="exhibits_museum"
          />
        </div>
        <p>
          Located in Washington, D.C., this state of the art facility was
          originally designed by John Stewart and Wonder Woman, financed by
          Batman, and built by Superman to be the headquarters of the JL.
        </p>
        <p>
          However, with the construction of the Justice Leagure Satellite, the
          facility was donated to the city of Washington. As a tribute to all
          the League has done, the facility is being converted into a museum.
        </p>
        <p>
          After months of renovation, we are happy to unveil our first three
          exhibits.
        </p>
      </div>
      <div className="exhibits_list">
        {data.map((data) => {
          return (
            <Link
              className="exhibits_item"
              key={data.id}
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
                }}
              >
                <img
                  src={`../../assets/${data.logo}`}
                  alt={data.alt}
                  width="100"
                  className="exhibits_hero_logo"
                />
                <h2 className="exhibits_name">{data.hero}</h2>
              </div>
            </Link>
          );
        })}

        <div
          className="exhibits_hero"
          style={{
            backgroundColor: "lightgray",
            borderColor: "black",
            borderStyle: "solid",
            borderRadius: 10,
          }}
        >
          <h2>More coming soon!</h2>
        </div>
      </div>
    </div>
  );
}

export default Exhibits;
