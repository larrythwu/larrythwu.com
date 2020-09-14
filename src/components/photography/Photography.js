import React from "react";
import { Link } from "react-router-dom";
import Photo1 from "./photos/Photo1.jpg";
import Photo2 from "./photos/Photo2.jpg";
import Photo3 from "./photos/Photo3.jpg";
import Photo4 from "./photos/Photo4.jpg";
import Photo5 from "./photos/Photo5.jpg";
import Photo6 from "./photos/Photo6.jpg";
import Photo7 from "./photos/Photo7.jpg";

import "./photography.css";

export default function Photography() {
  return (
    <div className="photo-container">
      <div class="card" style={{ width: "700px" }}>
        <img style={{ width: "700px" }} src={Photo1} alt="Card image cap" />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Kensington Market, 2019</p>
        </div>
      </div>

      <div class="card" style={{ width: "700px" }}>
        <img style={{ width: "700px" }} src={Photo2} alt="Card image cap" />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">CN Tower and OCAD, 2020</p>
        </div>
      </div>
      <div class="card" style={{ width: "700px" }}>
        <img style={{ width: "700px" }} src={Photo3} alt="Card image cap" />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">TTC, 2018</p>
        </div>
      </div>
      <div class="card" style={{ width: "700px" }}>
        <img style={{ width: "700px" }} src={Photo4} alt="Card image cap" />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Industry Complex, 2019</p>
        </div>
      </div>
      <div class="card" style={{ width: "700px" }}>
        <img style={{ width: "700px" }} src={Photo5} alt="Card image cap" />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Sugar Beach, 2019</p>
        </div>
      </div>
      <div class="card" style={{ width: "700px" }}>
        <img style={{ width: "700px" }} src={Photo6} alt="Card image cap" />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">St. George, 2019</p>
        </div>
      </div>
      <div class="card" style={{ width: "700px" }}>
        <img style={{ width: "700px" }} src={Photo7} alt="Card image cap" />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">ROM, 2019</p>
        </div>
      </div>
    </div>
  );
}
