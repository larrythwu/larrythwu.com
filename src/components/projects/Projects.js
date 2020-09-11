import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <div className="card">
        <div className="img-container">
          <img
            className="card-img-top"
            src="https://cdn.worldvectorlogo.com/logos/google-issue-tracker.svg"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Issue Tracker</h5>
          <p className="tools">
            React.js, Express.js, MongoDB, User Authentication, JavaScript
          </p>
          <p className="card-text">
            Online issue tracking application with user authentication, account
            synchronous.
          </p>
          <a href="#" class="btn btn-primary">
            Go to Webpage
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 2 days ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            className="card-img-top"
            src="https://miro.medium.com/max/432/1*b4otA55Us-hoI57lqUfplA.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Handwritten Digit Recognition</h5>
          <p className="tools">Tensorflow.js React.js, JavaScript</p>
          <p className="card-text">
            Training a TensorFlow.js model in real-time that can recognize the
            digit that is drawn on the canvas.
          </p>
          <a href="#" class="btn btn-primary">
            Go to Webpage
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 2 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            className="card-img-top"
            src="https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Interactive Path Finding</h5>
          <p className="tools">React.js, JavaScript, Dijkstra's algorithm</p>
          <p className="card-text">
            Find the shortest path between the starting point (green square) to
            the destination (red square) using Dijkstra's algorithm, which
            progression is visualized.
          </p>
          <a href="#" class="btn btn-primary">
            Go to Webpage
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 3 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            className="card-img-top"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAClpaUSEhKAgICBgYGYmJh9fX3j4+P8/Pzd3d3V1dXY2NgEBAQQEBDn5+csLCxMTEy8vLzt7e24uLjNzc2ioqKxsbGIiIgjIyN0dHQyMjLDw8M5OTljY2NISEiQkJBtbW1lZWVVVVWyBAN6AAAD9ElEQVR4nO3c21rqOhiF4URENlJQUcC9Tu//HieykaRNs/lpaEef8R2tA8qTdzZpWQaqFGOMMcYYY4wxxhhjjDHGGGOMMcbytVymvX6yupsPaiuKl3GecUp7e9a6eEw54l6Heso1WElX+zGt4o9YBYFa5xtvcsvjmOJn6muE8C3jkBNbH8e0jj4kApjwbtm7Oo7pKvqQd6xzKBCufbRDGUecmkCoPoLALl1LJUK1/vTdD+fduh+KhFBRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiJ9I+Pjq2beopvV9i7ttEuFGp3eTjxBIILwVALWeZkR4Ewi/RMJNRoQ3gfBbJPzIiPAmEN70/hyORUKkdRj1laFyUNdSpZ7+DVJuiNv7YYtfXeBnGvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwodDX70Wd3M8lnshMIn873bbu/FFEgfG5EeLH9NoGwGeDFfg1NoaOGgEVGlRnXoaP+X0vV9Pz7YdHp+yFYFOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhR2uuXDW/iPkgnC2dfLKvHJ31mbjH7HHfzTebxwuHvZQzOja6Lv/cBHgZdFC0eH13Xm+bJ/P0ce+l8XKxxGvt/lOv0K0j+kSOEfUL8r9XCnM5S6k2H8WNc7UeOEo9O7fQp/BxwucTfqzTj0+lzhtfFmq8b2gCsl7iiaT073EGOEJnAwySdM3PdeDIxD69dihHBovNF83Nw+/rlCtZgbx9aexbDQPIPzhcooTN7Zt4h1l5ugsALszDqMJIaExlX0ABT9HD8myc7+OLwWA0JzDQ6OH2ey3A+FO/vWAx6cRL/QBHbn85pVcKJ6heYULRa5xypsof1En9C8yOiuArcT1X8WPULrKtrNKbpv7L0v1gvNNVh0GbglFp6zWCu0pmi3gdu16CHWCaGA3rNYIxxhAZWamkRrLbqF1hps7flHSU11DdEptG70GMDSpxtjorqEcFN0Xw3RIQS7yJyaOi83VaEFRJmi+5xrsSKEXIPHXBO1LAQ+g785iCUhOLA0UXdEWzhCByo1K69FS2itwVnbYxVWJprCXgArE9UQ9mCK7rOIm5Nw0xdgaaLeVf4De4rus4iu0IGlidpHYIDYB6B3ot62PbaGqn3seF+AtcQYYJ59/EA/6f/0zokaswZz7eOHSv8qj4MYdZG5vO1Q+uZUZaLGTYQ2cLsek4VlYuRMb4enZV8utIixS7ktoOQcWsToa1VrQtnPv/+I8RfjXPv4oaRfizw8PyDlwfco98Nju5tGPz6L1jXG+su2pDH2/9EzxhhjjDHGGGOMMcYYY4wxxhgT9x9iOig4CH+VmAAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Sorting Algorithm Visualization </h5>
          <p className="tools">React.js, JavaScript</p>
          <p className="card-text">
            Visualize the sorting strategies of different algorithms.
          </p>
          <a href="#" class="btn btn-primary">
            Go to Webpage
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 1 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            className="card-img-top"
            src="https://img.icons8.com/ios/452/apple-arcade.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">FPGA Arcade game </h5>
          <p className="tools">C, ARMv7 assembly, FPGA</p>
          <p className="card-text">
            A two-player arcade game written in C and compiled to ARM assembly.
            The game is run on an ARMv7 DE1-SoC board, controlled by the PS/2
            keyboard, and displayed on a VGA.
          </p>
          <a href="#" class="btn btn-primary">
            More Detail
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 6 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            className="card-img-top"
            src="https://www.emoji.co.uk/files/mozilla-emojis/travel-places-mozilla/11775-vertical-traffic-light.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Traffic Light Simulator</h5>
          <p className="tools">Verilog, FPGA</p>
          <p className="card-text">
            Simulate the traffic lights at an intersection using DE1-SoC FPGA
            and a PS/2 keyboard. The logic is written in Verilog and the LEDs
            are directly plugged into the FPGA general purpose pins, the
            keyboard acts as the pedestrian call button.
          </p>
          <a href="#" class="btn btn-primary">
            More Detail
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 6 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJSzY9J6DOOcfD1VnnRmT6ED5D1PFgqqw9HA&usqp=CAU"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">3D printed Sumo Robot</h5>
          <p className="tools">Arduino, Fusion360</p>
          <p className="card-text">
            Built for Sumo Robotics Club at U of T. The sensors and motors are
            controlled by Arduino and the body is designed in Fusion360 and 3D
            printed.
          </p>
          <a href="#" class="btn btn-primary">
            More Detail
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 1 year ago</div>
      </div>
    </div>
  );
}
