import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <div className="card">
        <div className="img-container">
          <img
            alt=""
            alt=""
            className="card-img-top"
            src="https://cdn.worldvectorlogo.com/logos/google-issue-tracker.svg"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Issue Tracker</h5>
          <p className="tools">React.js, Express.js, MongoDB, JavaScript</p>
          <p className="card-text">
            Online issue tracking application with user authentication, account
            synchronization. Still in progress, aim to replace the old issue
            tracker used in ECE297, a second-year software class I took.
          </p>
          <a
            href="https://www.bugtrackr.com"
            target="_blank"
            class="btn btn-primary"
          >
            Go to Webpage
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 2 days ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            alt=""
            alt=""
            className="card-img-top"
            src="https://images-na.ssl-images-amazon.com/images/I/514JSuo0YrL.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">My Map</h5>
          <p className="tools">C++, Linux Ubuntu </p>
          <p className="card-text">
            Navigation software written in C++ runs on Linux Ubuntu. The data is
            loaded from the OpenStreetMap API and displayed using the EzGL
            library. Features include live weather report (DarkSky API), dark
            mode, location searching, and step-by-step navigation guidance.
          </p>
          <a href="/projects/mymap" class="btn btn-primary">
            More Detail
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 1 year ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            alt=""
            alt=""
            className="card-img-top"
            src="https://miro.medium.com/max/432/1*b4otA55Us-hoI57lqUfplA.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Handwritten Digit Recognition</h5>
          <p className="tools">Tensorflow.js, React.js, JavaScript</p>
          <p className="card-text">
            A web application that trains a machine learning model in real time
            with the MNIST database and TensorFlow that can recognize the digit
            drawn on the canvas.
          </p>
          <a
            href="https://larrythwu.github.io/digit_recognizer/"
            target="_blank"
            class="btn btn-primary"
          >
            Go to Webpage
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 2 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            alt=""
            alt=""
            className="card-img-top"
            src="https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Interactive Path Finding</h5>
          <p className="tools">React.js, JavaScript, Dijkstra's algorithm</p>
          <p className="card-text">
            A web application that uses the Dijkstra's algorithm to find the
            shortest path from the start (green) to the destination (red)
            through user-defined obstacles. You can move the green, red squares
            around; drag your mouse over the gray squares to add obstacles :)
          </p>
          <a
            href="https://larrythwu.github.io/interactive_path_finding/"
            target="_blank"
            class="btn btn-primary"
          >
            Go to Webpage
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 3 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            alt=""
            alt=""
            className="card-img-top"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAClpaUSEhKAgICBgYGYmJh9fX3j4+P8/Pzd3d3V1dXY2NgEBAQQEBDn5+csLCxMTEy8vLzt7e24uLjNzc2ioqKxsbGIiIgjIyN0dHQyMjLDw8M5OTljY2NISEiQkJBtbW1lZWVVVVWyBAN6AAAD9ElEQVR4nO3c21rqOhiF4URENlJQUcC9Tu//HieykaRNs/lpaEef8R2tA8qTdzZpWQaqFGOMMcYYY4wxxhhjjDHGGGOMMcbytVymvX6yupsPaiuKl3GecUp7e9a6eEw54l6Heso1WElX+zGt4o9YBYFa5xtvcsvjmOJn6muE8C3jkBNbH8e0jj4kApjwbtm7Oo7pKvqQd6xzKBCufbRDGUecmkCoPoLALl1LJUK1/vTdD+fduh+KhFBRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiJ9I+Pjq2beopvV9i7ttEuFGp3eTjxBIILwVALWeZkR4Ewi/RMJNRoQ3gfBbJPzIiPAmEN70/hyORUKkdRj1laFyUNdSpZ7+DVJuiNv7YYtfXeBnGvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwodDX70Wd3M8lnshMIn873bbu/FFEgfG5EeLH9NoGwGeDFfg1NoaOGgEVGlRnXoaP+X0vV9Pz7YdHp+yFYFOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhR2uuXDW/iPkgnC2dfLKvHJ31mbjH7HHfzTebxwuHvZQzOja6Lv/cBHgZdFC0eH13Xm+bJ/P0ce+l8XKxxGvt/lOv0K0j+kSOEfUL8r9XCnM5S6k2H8WNc7UeOEo9O7fQp/BxwucTfqzTj0+lzhtfFmq8b2gCsl7iiaT073EGOEJnAwySdM3PdeDIxD69dihHBovNF83Nw+/rlCtZgbx9aexbDQPIPzhcooTN7Zt4h1l5ugsALszDqMJIaExlX0ABT9HD8myc7+OLwWA0JzDQ6OH2ey3A+FO/vWAx6cRL/QBHbn85pVcKJ6heYULRa5xypsof1En9C8yOiuArcT1X8WPULrKtrNKbpv7L0v1gvNNVh0GbglFp6zWCu0pmi3gdu16CHWCaGA3rNYIxxhAZWamkRrLbqF1hps7flHSU11DdEptG70GMDSpxtjorqEcFN0Xw3RIQS7yJyaOi83VaEFRJmi+5xrsSKEXIPHXBO1LAQ+g785iCUhOLA0UXdEWzhCByo1K69FS2itwVnbYxVWJprCXgArE9UQ9mCK7rOIm5Nw0xdgaaLeVf4De4rus4iu0IGlidpHYIDYB6B3ot62PbaGqn3seF+AtcQYYJ59/EA/6f/0zokaswZz7eOHSv8qj4MYdZG5vO1Q+uZUZaLGTYQ2cLsek4VlYuRMb4enZV8utIixS7ktoOQcWsToa1VrQtnPv/+I8RfjXPv4oaRfizw8PyDlwfco98Nju5tGPz6L1jXG+su2pDH2/9EzxhhjjDHGGGOMMcYYY4wxxhgT9x9iOig4CH+VmAAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Sorting Algorithm Visualization </h5>
          <p className="tools">React.js, JavaScript</p>
          <p className="card-text">
            A web application that visualizes common sorting algorithms such as,
            merge sort, quick sort, heap sort, and bubble sort.
          </p>
          <a
            href="https://larrythwu.github.io/Sorting-Visualization/"
            target="_blank"
            class="btn btn-primary"
          >
            Go to Webpage
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 1 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            alt=""
            className="card-img-top"
            src="https://img.icons8.com/ios/452/apple-arcade.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">ARM Assembly Arcade Game </h5>
          <p className="tools">C, ARMv7 assembly, FPGA</p>
          <p className="card-text">
            A two-player arcade game written in C and ARM Assembly. The game
            runs on a DE1-SoC FPGA, controlled using a PS/2 keyboard, and
            displayed on a VGA.
          </p>
          <a href="projects/doomslayer" class="btn btn-primary">
            More Detail
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 6 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            alt=""
            className="card-img-top"
            src="https://www.emoji.co.uk/files/mozilla-emojis/travel-places-mozilla/11775-vertical-traffic-light.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Verilog Traffic Light Simulator</h5>
          <p className="tools">Verilog, FPGA</p>
          <p className="card-text">
            A physical model that simulates the traffic lights at an
            intersection using DE1-SoC FPGA and a PS/2 keyboard. The logic is
            written in Verilog and the LEDs are controlled by the FPGA, the
            keyboard acts as the pedestrian call button.
          </p>
          <a href="/projects/trafficlight" class="btn btn-primary">
            More Detail
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 6 months ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            alt=""
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJSzY9J6DOOcfD1VnnRmT6ED5D1PFgqqw9HA&usqp=CAU"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Sumo Robot</h5>
          <p className="tools">Arduino, Fusion360</p>
          <p className="card-text">
            Built for the Sumo Robotics Club at U of T. The sensors and motors
            are controlled by Arduino and the body is designed in Fusion360 and
            3D printed.
          </p>
          <a href="/projects/sumorobot" class="btn btn-primary">
            More Detail
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 1 year ago</div>
      </div>

      <div className="card">
        <div className="img-container">
          <img
            alt=""
            className="card-img-top"
            src="https://image.flaticon.com/icons/png/512/2061/2061956.png"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Mechanical Piston</h5>
          <p className="tools">Machining</p>
          <p className="card-text">
            Final product from the Basic Machining Certificate course at George
            Brown College
          </p>
          <a href="/projects/piston" class="btn btn-primary">
            More Detail
          </a>
        </div>
        <div class="card-footer text-muted">Last updated 1 year ago</div>
      </div>
    </div>
  );
}
