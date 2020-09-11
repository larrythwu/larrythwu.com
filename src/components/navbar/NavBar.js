import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a routerLink="/" class="navbar-brand" href="/">
        Larry Wu
      </a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">
            Home
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/resume">
            Resume
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/projects">
            Projects
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/photography">
            Photography
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/paintings">
            Paintings
          </a>
        </li>
      </ul>
    </nav>
  );
}
