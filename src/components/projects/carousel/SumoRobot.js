import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import Sumo1 from "./photos/sumo1.jpg";
import Sumo2 from "./photos/sumo2.jpg";
import Sumo3 from "./photos/sumo3.jpg";

import "./carousel.css";

export class Piston extends Component {
  render() {
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
              <img style={{ "margin-right": 0, width: "500px" }} src={Sumo1} />
            </Carousel.Item>
            <Carousel.Item style={{ height: "auto" }}>
              <img style={{ "margin-right": 0, width: "500px" }} src={Sumo2} />
            </Carousel.Item>
            <Carousel.Item style={{ height: "auto" }}>
              <img style={{ "margin-right": 0, width: "500px" }} src={Sumo3} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Piston;
