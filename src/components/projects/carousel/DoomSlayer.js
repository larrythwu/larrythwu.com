import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

import Piston1 from "./photos/piston1.jpg";
import Piston2 from "./photos/piston2.jpg";
import Piston3 from "./photos/piston3.jpg";

export default function DoomSlayer() {
  return (
    <div className="slideshow">
      <div className="container-fluid">
        <Carousel
          style={{
            "text-align": "center",
            background: "#00000030",
            width: "700px",
          }}
        >
          <Carousel.Item style={{ height: "auto" }}>
            <img style={{ "margin-right": 0, width: "500px" }} src={Piston1} />
          </Carousel.Item>
          <Carousel.Item style={{ height: "auto" }}>
            <img style={{ "margin-right": 0, width: "500px" }} src={Piston2} />
          </Carousel.Item>
          <Carousel.Item style={{ height: "auto" }}>
            <img style={{ "margin-right": 0, width: "500px" }} src={Piston3} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
