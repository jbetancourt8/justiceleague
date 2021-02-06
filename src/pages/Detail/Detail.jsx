import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";
import Header from "../../components/Header";

function Detail() {
  const location = useLocation();

  if (location.state !== undefined) {
    const { data } = location.state;
    const isSagan = data.sagan ? (
      <iframe
        style={{
          width: "80%",
          height: 500,
        }}
        src="https://app.saganworks.com/public/6d635888-a830-4208-d2fe-08d8cad36071"
      ></iframe>
    ) : null;

    const status = data.status ? (
      <div className="detail_sagan">
        <h2>
          Want to check out the exhibit? Try our 3D immersive experience,
          powered by{" "}
          <a href="https://saganworks.com/" target="_blank">
            Saganworks
          </a>
          .
        </h2>
        {isSagan}
      </div>
    ) : (
      <div>
        <h2>A 3D experience is coming soon!</h2>
      </div>
    );

    return (
      <div className="detail">
        <Header />
        <div className="detail_container">
          <h1>{data.hero}</h1>
          <img
            src={`../../assets/${data.profile}`}
            alt={data.alt}
            width="200"
          />
          <p>{data.bio}</p>
        </div>
        {status}
      </div>
    );
  }
  return <div></div>;
}

export default Detail;
