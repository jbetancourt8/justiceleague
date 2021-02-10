import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";
import Header from "../../components/Header";

function Detail() {
  const location = useLocation();

  if (location.state !== undefined) {
    const { data } = location.state;
    const isSagan = data.sagan ? (
      <iframe className="detail_iframe" src={data.sagan} title="Sagan"></iframe>
    ) : null;

    const status = data.status ? (
      <div className="detail_sagan">
        <h2>
          Want to check out the exhibit? Try our 3D immersive experience,
          powered by{" "}
          <a href="https://saganworks.com/" target="_blank" rel="noreferrer">
            Saganworks
          </a>
          .
        </h2>
        {isSagan}
      </div>
    ) : (
      <div className="detail_soon">
        <h2 className="detail_soon_text">A 3D experience is coming soon!</h2>
      </div>
    );

    return (
      <div
        className="detail_container"
        style={{
          backgroundImage: `url(${data.bg})`,
        }}
      >
        <Header />

        <div className="detail_content">
          <h1>{data.hero}</h1>
          <img
            src={`../../assets/${data.profile}`}
            alt={data.alt}
            width="200"
            className="detail_image"
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
