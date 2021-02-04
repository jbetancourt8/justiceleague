import React from "react";
import "./Exhibits.css";

import Heros from "../../components/Heros";
import data from "../../data/data.json";

function Exhibits() {
  return (
    <div className="exhibits_container">
      {data.map(
        ({
          id,
          hero,
          name,
          logo,
          alt,
          sidekick,
          powers,
          origin,
          status,
          colors,
        }) => {
          return (
            <Heros
              key={id}
              hero={hero}
              name={name}
              logo={logo}
              alt={alt}
              sidekick={sidekick}
              power={powers}
              origin={origin}
              status={status}
              colors={colors}
            />
          );
        }
      )}
    </div>
  );
}

export default Exhibits;

/*
<Heros
        bgColor="lightgray"
        bc="black"
        src="../../assets/batman.png"
        alt="batman"
        hero="Batman"
      />

      <Heros
        bgColor="lightblue"
        bc="blue"
        src="../../assets/superman.png"
        alt="superman"
        hero="Superman"
      />
      <Heros
        bgColor="#f6576d"
        bc="#3f6cb8"
        src="../../assets/wonderwoman.png"
        alt="wonderwoman"
        hero="Wonder Woman"
      />
      <Heros
        bgColor="#dddf3b"
        bc="#AB0020"
        src="../../assets/flash.png"
        alt="flash"
        hero="The Flash"
        status="Coming Soon!"
      />
      <Heros
        bgColor="lightgreen"
        bc="green"
        src="../../assets/greenlantern.png"
        alt="greenlanter"
        hero="Green Lantern"
        status="Coming Soon!"
      />
      <Heros
        bgColor="gold"
        bc="green"
        src="../../assets/aquaman.svg"
        alt="aquaman"
        hero="Aquaman"
        status="Coming Soon!"
      />
      <Heros
        bgColor="darkseagreen"
        bc="darkred"
        src="../../assets/martian.png"
        alt="martian"
        hero="Martian Manhunter"
        status="Coming Soon!"
      />*/
