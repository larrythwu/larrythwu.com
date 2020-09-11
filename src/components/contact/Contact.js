import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-info">
      <div className="block">
        <img src="https://img.icons8.com/fluent/96/000000/email-open.png" />
        <a>Larrythwu@gmail.com</a>
      </div>

      <div className="block">
        <img src="https://img.icons8.com/fluent/144/000000/github.png" />{" "}
        <a className="link" href="https://github.com/larrythwu" target="_blank">
          Larrythwu
        </a>
      </div>

      <div className="block">
        <img src="https://img.icons8.com/fluent/240/000000/linkedin.png" />{" "}
        <a className="link" href="https://www.linkedin.com/in/larry-wu-9091b71b7/" target="_blank">
          Larry Wu
        </a>
      </div>
    </div>
  );
}
