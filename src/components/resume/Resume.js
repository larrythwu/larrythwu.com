import React from "react";
import "./resume.css";

import CPP from "./images/c-plus-plus-logo.png"
import Java from "./images/java_icon.png"
import Rust from "./images/rust_icon.png"
import Python from "./images/python.png"
import Perl from "./images/perl_icon.webp"
import REACT from "./images/react_icon.png"
import Cuda from "./images/cuda_icon.webp"
import Docker from "./images/docker_icon.webp"
import LLVM from "./images/llvm_icon.png"
import Node from "./images/node_js_icon.png"
import PSQL from "./images/psql_icon.png"
import UOFT from "./images/uoft_icon.png"
import AMD from "./images/amd_icon.png"

export default function Resume() {
  return (
    <div className="Resume">
      {/* <h3 className="title">Highlights</h3>
      <ul>
        <li>3.9/4.0 GPA and 90+ average for all second-year ECE courses</li>
        <li>
          Proficient in C/C++, Python, JavaScript, React, familiar with AWS EC2
          (Ubuntu)
        </li>
        <li>
          Co-authoring an academic paper at the University of Toronto with Prof.
          Li Qian and Dr. Eric Zhu about a machine learning approach to
          interpret and processing quantum experiment results
        </li>
      </ul> */}

      <div className="skills">
        <h3 className="title">Techincal Skills</h3>
        <h4 className="subsection">Languages</h4>
        <div className="skill">
          <img
            alt=""
            src={CPP}
          />
          <a>C&C++</a>
        </div>
        <div className="skill">
          <img
            alt=""
            src={Java}
          />
          <a>Java</a>
        </div>
        <div className="skill">
          <img
            alt=""
            src={Rust}/>
          <a>Rust</a>
        </div>
        <div className="skill">
          <img
            alt=""
            src={Python}
          />
          <a>Python</a>
        </div>
        <div className="skill">
          <img
            alt=""
            src={Perl}
          />
          <a>Perl</a>
        </div>
        <h4 className="subsection">Tools & Frameworks</h4>
        <div className="skill">
          <img
            alt=""
            src={REACT}
          />
          <a>React</a>
        </div>
        <div className="skill">
          <img
            alt=""
            src={Node}
          />
          <a>Node.js</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src={PSQL}
          />
          <a>PostgreSQL</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src={LLVM}          />
          <a>LLVM</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src={Cuda}          />
          <a>CUDA</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src={Docker}/>
            <a>Docker</a>
        </div>

      </div>
      <h3 className="title">Education</h3>
        <div className="skill">
          <img
            alt=""
            src={UOFT}/>
            <strong>University of Toronto</strong>
            <ul><strong>Bachelor of Applied Science in Computer Engineering (3.7/4 CGPA)</strong></ul>
            <ul>Relavent Courses: Computer Systems Programming, Parallel Programming, Distributed Systems, Data Structures
and Algorithm, Operating System, Computer Architecture, Computer Networks</ul>

        </div>

      <h3 className="title">Work Experience</h3>
      
      {/*-------------experience------------*/}
      <pre>
        <strong>Design and Verification Engineer </strong> | 
        <img className="img"
        src={AMD}/>
            AMD                     May 2020 ~ May 2021
      </pre>
      <ul>
        <li>
        Built testbench components in C++ and System Verilog (UVM) for the Navi31 GPU cache, improving the functional
verification coverage of the L1 cache by 15%{" "}
        </li>
        <li>
        Debugged RTL code by investigating the simulation waveform, consistently recognized for analytic skills
        </li>
        <li>
        Developed Perl and Bash scripts to automate regression results reporting; the implementation led to a 50% increase
in workflow efficiency
        </li>
      </ul>

      {/*-------------experience------------*/}
      <pre>
        <strong>Compiler Research Assistant</strong> | 
          <img
            src={UOFT}/>
            University of Toronto, Prof. Mark Jeffrey                      May 2022 ~ Sep. 2022
      </pre>
      <ul>
        <li>
        Upgraded the loop unrolling optimization for the compiler (<a className="link" href="https://ieeexplore.ieee.org/document/9138940">T4</a>) to LLVM12, achieving a 20% speedup on
SPEC-CPU2006 benchmarks than previously reported{" "}
        </li>
        <li>
        Upgraded the Lexer and Parser in Clang to support custom C++ instructions, credited for the ability to
understand the open-sourced codebase
        </li>
        <li>
        Embedded the OpenCilk/Tapir intermediate representation into LLVM IR to enable loop-invariant optimizations
on parallel constructs such as fork/join
        </li>
      </ul>

      {/*-------------experience------------*/}
      <pre>
        <strong>ML Research Assistant</strong> | <img
            src={UOFT}/>
            University of Toronto, Prof. Li Qian                     May 2020 ~ May 2021
      </pre>
      <ul>
        <li>
        Developed a support vector machine in TensorFlow and used it to analyze quantum entanglement experiments,
improving the noise tolerance of the experiment setup by 30%{" "}
        </li>
        <li>
        Analyzed the trade-offs of different machine learning algorithms, credited for the ability to consider the physical
constraints in the lab environment
        </li>
        <li>
        Operated lab equipment using MATLAB to conduct photonic experiments
        </li>
      </ul>
      <ul>Publication: <a className="link" href="https://ieeexplore.ieee.org/document/9572926">Machine Learning Derived Entanglement Witness</a> <strong>L. Wu</strong>, E. Zhu, and L. Qian. OSA technical digest</ul>

    </div>
  );
}
