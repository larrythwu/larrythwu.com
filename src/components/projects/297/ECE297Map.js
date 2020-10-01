import React, { Component } from "react";
import LiveWeather from "./photos/LiveWeather.png";
import DarkMode from "./photos/DarkMode.png";
import SearchSuggestions from "./photos/SearchSuggestions.png";
import MyMap from "./photos/MyMap.png";

import Iframe from "react-iframe";
import "./mymap.css";

export class ECE297Map extends Component {
  render() {
    return (
      <div className="DescriptionContainer">
        <iframe
          className="mymap"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3EIzls7Gpo0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
        <img className="mymap" alt="dark mode" src={MyMap} />
        <img className="mymap" alt="live weather" src={LiveWeather} />
        <img className="mymap" alt="dark mode" src={DarkMode} />
        <img className="mymap" alt="dark mode" src={SearchSuggestions} />
      </div>
    );
  }
}

export default ECE297Map;
