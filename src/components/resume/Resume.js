import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="Resume">
      <h3 className="title">Highlights</h3>
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
      </ul>

      <div className="skills">
        <h3 className="title">Skills</h3>
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
            src="https://img.icons8.com/color/480/000000/python.png"
          />
          <a>Python</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src="https://img.icons8.com/plasticine/400/000000/react.png"
          />
          <a>React.js</a>
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
            src="https://img.icons8.com/color/480/000000/mongodb.png"
          />
          <a>MongoDB Atlas</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png"
          />
          <a>JavaScript</a>
        </div>

        <div className="skill">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/400px-Arm_logo_2017.svg.png"
          />
          <a>ARM Assembly</a>
        </div>
      </div>
      <h3 className="title">Education</h3>
      <pre>
        <strong className="resume">University of Toronto</strong>{" "}
        <strong>Bachelor of Applied Science</strong> 2018 ~ present
        {"\n"}Electrical & Computer Engineering
      </pre>

      <pre>
        <strong className="resume">Coursera</strong>{" "}
        <strong>Neural Networks and Deep Learning Certificate</strong> 2020
      </pre>

      <pre>
        <strong className="resume">George Brown College</strong>{" "}
        <strong>Basic Machining Certificate</strong> 2018
      </pre>
      <h3 className="title">Work Experience</h3>
      <pre>
        <strong className="resume">Prof. Li Qian Research Group</strong>{" "}
        <strong>Student Researcher</strong> 2020 ~ present
      </pre>
      <ul>
        <li>
          Wrote machine learning programs using the scikit-learn python library
          to process experimental data{" "}
        </li>
        <li>
          Operated photonics equipment in the laboratory and wrote MATLAB code
          to automate the experiment
        </li>
        <li>
          Presented weekly reports and monthly presentations to the research
          group about the progress of the research project
        </li>
      </ul>

      <pre>
        <strong className="resume">Mainly Mac</strong>{" "}
        <strong>Computer Technician</strong> 2018 ~ 2019
      </pre>
      <ul>
        <li>Repaired over 300 malfunctioning computers</li>
        <li>Kept track of inventory information using company software</li>
        <li>Communicated with customers to troubleshoot their computers</li>
      </ul>

      <h3 className="title">Extracurricular</h3>
      <pre>
        <strong className="resume">Sumo robotic club</strong>
      </pre>
      <ul>
        <li>
          Built an automated robot using Arduino that can sense its opponent and
          push it out of the designated area
        </li>
        <li>Used Fusion360 to design and 3D print the body of the robot</li>
      </ul>

      <pre>
        <strong className="resume">
          Mon Sheong Entrepreneurship Competition (First Place)
        </strong>
      </pre>
      <ul>
        <li>
          Led a team of 4 to design an e-commerce website that sells apparels,
          demonstrated key leadership qualities and excellent management skills
          by winning first place and $3000 startup funding
        </li>
      </ul>
    </div>
  );
}
