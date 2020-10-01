import React, { Component } from "react";
import Description from "./photos/Description.png";
import GameControl from "./photos/GameControl.png";
import GameScreenshot from "./photos/GameScreenshot.png";

import Iframe from "react-iframe";

export class DoomSlayer extends Component {
  render() {
    return (
      <div className="DescriptionContainer">
        <iframe
          className="mymap"
          width="560"
          height="400"
          src="https://www.youtube.com/embed/XDjh_E4bBHg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
        <img className="mymap" src={Description} />
        <div
          style={{
            width: "50em",
            margin: "0 auto",
            "margin-top": "30px",
            "margin-bottom": "30px",
          }}
        >
          <img
            className="mymap"
            style={{ margin: "0 0 0 0", width: "30em" }}
            src={GameControl}
          />
          <img
            className="mymap"
            style={{ margin: "0 0 0 0", width: "20em" }}
            src={GameScreenshot}
          />
        </div>
      </div>
    );
  }
}

export default DoomSlayer;
