import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import MyPic from "./MyPic.JPG";
export default function Home() {
  return (
    <div style={{ "text-align": "left" }}>
      <div style={{ "text-align": "left", display: "inline-block" }}>
        <h3>Overview</h3>
        <h4 className="bio">
          Hi, my name is Larry. I am a third-year ECE student at the University
          of Toronto. In my leisure time, I am a fervent <strong>reader</strong>
          , a <strong>painter</strong>, a <strong>photographer</strong>, a{" "}
          <strong>robotic enthusiast</strong>, and a{" "}
          <strong>passionate programmer</strong>. You can check out my past
          projects in the "Projects" section; and my other works in "Paintings",
          and "Photography".
        </h4>

        <h4 className="bio">
          I have a strong background in <strong>C++/C</strong> and{" "}
          <strong>web development</strong> as demonstrated in my projects.
          Specifically, I am experienced in <strong>React.js</strong> as the
          frontend and <strong>Node.js</strong>, <strong>MongoDB</strong> as the
          backend. Moreover, I have achieved a <strong>3.9/4.0 GPA</strong> and{" "}
          <strong>90+ average</strong> for all second-year ECE courses which
          range from software development (<strong>C, C++</strong>) to computer
          architecture (<strong>ARM assembly, Verilog</strong>).
        </h4>

        <h4 className="bio">
          I am a member of{" "}
          <strong>
            <a
              className="link"
              href="https://www.ece.utoronto.ca/people/qian-l/"
              target="_blank"
            >
              Prof. Li Qian's
            </a>
          </strong>{" "}
          research group and specialize in using{" "}
          <strong>machine learning (python)</strong> and satistical methods to
          process and interpret experimental data in the field of quantum
          physics. Currently, I am working on a paper with one of her students
          that summarizes the work we have done in the past summer. Furthermore,
          I am working on an{" "}
          <a className="link" href="bugtrackr.com">
            online issue/bug tracker software
          </a>{" "}
          that can hopefully replace the old one that is used in ECE297, one of
          the software courses that I took last year.
        </h4>
      </div>
      <img
        style={{
          width: "300px",
          display: "inline-block",
          "vertical-align": "top",
          "margin-top": "130px",

          "margin-left": "80px",
        }}
        src={MyPic}
      />
    </div>
  );
}
