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
          Hi, my name is Larry. I am a fourth-year <strong>Computer Engineering</strong> student at the <strong>University
          of Toronto</strong>. In my leisure time, I am a fervent reader
          , a painter, a photographer, and a{" "}
          passionate programmer. You can check out my past
          projects in the "Projects" section; and my other works in "Paintings",
          and "Photography".
        </h4>

        <h4 className="bio">
          I have a strong background in <strong>C++/C</strong> and{" "}
          <strong>full-stack development</strong> as demonstrated in my projects.
          Moreover, I have achieved a <strong>3.7/4.0 GPA</strong> in courses that
          range from software development (<strong>C, C++, Java</strong>) to computer
          architecture (<strong>ARM assembly, System Verilog</strong>).
        </h4>

        <h4 className="bio">
          I previously interned at <strong>AMD</strong> as a <strong>Design and Verification Engineer</strong> for the Navi31 GPU Cache. I was involved in building the testbench components and implementing testcases for the <strong>L1 cache</strong>. 
          Furthermore, I have research experience in compiler design and building machine learning models. I worked with Prof. Mark Jeffrey to rebase an old compiler (<a className="link" href="https://ieeexplore.ieee.org/document/9138940">T4</a>) from MIT to the newest version of LLVM (v12). Moreover, I published <a className="link" href="https://ieeexplore.ieee.org/document/9572926">a paper</a> with Prof. Li Qian on using Support Vector Machine to improve the noise tolerance of physics experiments. 
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
