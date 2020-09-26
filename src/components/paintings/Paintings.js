import React from "react";
import { Link } from "react-router-dom";
import Photo1 from "./photos/IMG1.jpg";
import Photo2 from "./photos/IMG2.jpg";
import Photo3 from "./photos/IMG3.jpg";
import Photo4 from "./photos/IMG4.jpg";
import Photo5 from "./photos/IMG5.jpg";
import Photo6 from "./photos/IMG6.jpg";
import Photo7 from "./photos/IMG7.jpg";
import Photo8 from "./photos/IMG8.jpg";
import Photo9 from "./photos/IMG9.jpg";
import Photo10 from "./photos/IMG10.jpg";
import Photo11 from "./photos/IMG11.jpg";

export default function Paintings() {
  return (
    <div className="photo-container">
      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo11}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Still Life, 2019</p>
        </div>
      </div>

      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo1}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Hauling a Boat Ashore, 2018</p>
        </div>
      </div>

      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo2}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Headphone Dog, 2019</p>
        </div>
      </div>
      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo3}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Abstract Dog, 2018</p>
        </div>
      </div>
      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo4}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Starry Night, 2019</p>
        </div>
      </div>
      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo5}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Charles Darwin (Incomplete), 2020</p>
        </div>
      </div>
      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo6}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Dream, 2019</p>
        </div>
      </div>

      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo7}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Sunrise, 2020</p>
        </div>
      </div>

      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo8}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Light House, 2019</p>
        </div>
      </div>

      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo9}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Still Life, 2019</p>
        </div>
      </div>

      <div class="card" style={{ width: "700px" }}>
        <img
          alt=""
          style={{ width: "700px" }}
          src={Photo10}
          alt="Card image cap"
        />
        <div class="card-body" style={{ "text-align": "center" }}>
          <p class="card-text">Still Life, 2019</p>
        </div>
      </div>
    </div>
  );
}
