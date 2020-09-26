import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./carousel.css";

import Traffic1 from "./photos/traffic1.jpg";
import Traffic2 from "./photos/traffic2.jpg";
import Traffic3 from "./photos/traffic3.jpg";

export default function TrafficLight() {
  return (
    <div className="slideshow">
      <div className="container-fluid">
        <Carousel
          style={{
            "text-align": "center",
            background: "#00000030",
            width: "900px",
          }}
        >
          <Carousel.Item style={{ height: "auto" }}>
            <img
              alt=""
              style={{ "margin-right": 0, width: "700px" }}
              src={Traffic1}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "auto" }}>
            <img
              alt=""
              style={{ "margin-right": 0, width: "700px" }}
              src={Traffic2}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "auto" }}>
            <img
              alt=""
              style={{ "margin-right": 0, width: "700px" }}
              src={Traffic3}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
