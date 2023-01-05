import React from "react";
import "./resume.css";

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
            src="https://img.icons8.com/color/480/000000/c-plus-plus-logo.png"
          />
          <a>C&C++</a>
        </div>
        <div className="skill">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
          />
          <a>Java</a>
        </div>
        <div className="skill">
          <img
            alt=""
            src="https://b.thumbs.redditmedia.com/RGBpWy1J00g1sxC71l84oSYnZpvh5DOGUhcbtKz9QcE.png"/>
          <a>Rust</a>
        </div>
        <div className="skill">
          <img
            alt=""
            src="https://img.icons8.com/color/480/000000/python.png"
          />
          <a>Python</a>
        </div>
        <h4 className="subsection">Tools & Frameworks</h4>
        <div className="skill">
          <img
            alt=""
            src="https://img.icons8.com/plasticine/400/000000/react.png"
          />
          <a>React</a>
        </div>
        <div className="skill">
          <img
            alt=""
            src="https://img.icons8.com/windows/512/000000/node-js.png"
          />
          <a>Node.js</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
          />
          <a>PostgreSQL</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src="https://llvm.org/img/DragonMedium.png"          />
          <a>LLVM</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src="https://external-preview.redd.it/-iLQcSOsZPDL2WkDdAtnEm9kRDwLrvBWrWbsijxiMkQ.jpg?width=640&crop=smart&auto=webp&s=e207e3725ad92cdb744c3239e6555598d6c16541"          />
          <a>CUDA</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"/>
            <a>Docker</a>
        </div>

      </div>
      <h3 className="title">Education</h3>
        <div className="skill">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"/>
            <strong>University of Toronto</strong>
            <ul>Bachelor of Applied Science in Computer Engineering (3.7/4 CGPA)</ul>
            <ul>Relavent Courses: Computer Systems Programming, Parallel Programming, Distributed Systems, Data Structures
and Algorithm, Operating System, Computer Architecture, Computer Networks</ul>

        </div>

      <h3 className="title">Work Experience</h3>
      
      {/*-------------experience------------*/}
      <pre>
        <strong>Design and Verification Engineer </strong> | 
        <img className="img"
        src="https://companieslogo.com/img/orig/AMD-ee5b4684.png?t=1632720791"/>
            AMD                     May 2020 ~ May 2021
      </pre>
      <ul>
        <li>
        Built testbench components in C++ and System Verilog (UVM) for the GPU L1 cache, improving the functional
verification coverage by 15%{" "}
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
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"/>
            University of Toronto, Prof. Mark Jeffrey                      May 2022 ~ Sep. 2022
      </pre>
      <ul>
        <li>
        Upgraded the loop unrolling optimization for the compiler (<a className="title" href="https://ieeexplore.ieee.org/document/9138940">T4</a>) to LLVM12, achieving a 20% speedup on
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
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"/>
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
      <ul>Publication: <a className="title" href="https://ieeexplore.ieee.org/document/9572926">Machine Learning Derived Entanglement Witness</a> <strong>L. Wu</strong>, E. Zhu, and L. Qian. OSA technical digest</ul>

    </div>
  );
}
