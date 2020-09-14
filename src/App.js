import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Paintings from "./components/paintings/Paintings";
import Photography from "./components/photography/Photography";
import Contact from "./components/contact/Contact";

import DoomSlayer from "./components/projects/carousel/DoomSlayer";
import Piston from "./components/projects/carousel/Piston";
import SumoRobot from "./components/projects/carousel/SumoRobot";
import TrafficLight from "./components/projects/carousel/TrafficLight";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/paintings" component={Paintings} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/" component={Contact} />
        <Route exact path="/projects/doomslayer" component={DoomSlayer} />
        <Route exact path="/projects/piston" component={Piston} />
        <Route exact path="/projects/sumorobot" component={SumoRobot} />
        <Route exact path="/projects/trafficlight" component={TrafficLight} />
      </BrowserRouter>
    </div>
  );
}

export default App;
