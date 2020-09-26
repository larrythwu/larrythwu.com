import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="Resume">
      <h3 className="title">Highlights</h3>
      <ul>
        <li>3.9 cGPA, 90+ average for all second year ECE courses</li>
        <li>
          Experienced in web development: individually developed a fully
          functional full stack MERN (MongoDB, Express.js, React.js, Node.js)
          app with user authentication{" "}
        </li>
        <li>
          Co-authored an academic paper with Prof. Li Qian during summer
          research intership
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
            src="https://img.icons8.com/color/480/000000/c-sharp-logo.png"
          />
          <a>ASP.NET C#</a>
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
            src="https://img.icons8.com/ios-filled/500/000000/mysql-logo.png"
          />
          <a>MySQL</a>
        </div>
      </div>
      <h3 className="title">Education</h3>
      <pre>
        <strong className="resume">University of Toronto</strong>{" "}
        <strong>Bachelor of Applied Science</strong> 2018 ~ present
        {"\n"}Electrical & Computer Engineering
      </pre>

      <pre>
        <strong className="resume">George Brown College</strong>{" "}
        <strong>Basic Machining Certificate</strong> 2018
      </pre>

      <pre>
        <strong className="resume">Coursera</strong>{" "}
        <strong>Neural Networks and Deep Learning Certificate</strong> 2020
      </pre>

      <h3 className="title">Work Experience</h3>
      <pre>
        <strong className="resume">Prof. Li Qian Research Group</strong>{" "}
        <strong>Research Intern</strong> 2020 ~ present
      </pre>
      <ul>
        <li>
          Developed machine learning algorithm using scikit-learn python library
          and trained the model with simulated experimental data.{" "}
        </li>
        <li>
          Wrote weekly report and monthly presentation updating the group
          members on the progress of the research project
        </li>
        <li>
          Praised by Prof. Qian for my initiativeness and effectiveness in an
          online workplace{" "}
        </li>
      </ul>

      <pre>
        <strong className="resume">Mainly Mac</strong>{" "}
        <strong>Computer Technician</strong> 2017 ~ 2018
      </pre>
      <ul>
        <li>
          Repaired over 300 malfunctioning Apple computers, commended for
          excellent technical abilities and high initiative
        </li>
        <li>
          Kept track of inventory information using internal software,
          demonstrated outstanding organization skills
        </li>
        <li>
          Communicated with customers to troubleshoot their computer, received
          customer feedback as a good listener and timely problem solver
        </li>
      </ul>

      <h3 className="title">Extracurricular</h3>
      <pre>
        <strong className="resume">Sumo robotic club</strong>
      </pre>
      <ul>
        <li>
          Built an automated robot using Arduino that can sense its compoent and
          push it out of the designated area
        </li>
        <li>Used Fusion360 to 3D print the body of the robot</li>
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
