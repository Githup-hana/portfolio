import { useState } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const [showSkills, setShowSkills] = useState(true);

  const toggleView = () => {
    setShowSkills((prev) => !prev);
  };

  return (
    <div className="skills-container">
      <h1>What My Programming Skills Include?</h1>
      <p>
        I develop simple, intuitive, and responsive user interfaces that help
        users get things done efficiently.
      </p>

      <div className="toggle-container" onClick={toggleView}>
        <div className={`toggle-btn ${showSkills ? "active" : ""}`}>
          <span className="toggle-text">{showSkills ? "Skills" : "Tools"}</span>
          <span className="toggle-circle"></span>
        </div>
      </div>

      <div className="skills-box">
        <ul className={`skills-list ${showSkills ? "visible" : "hidden"}`}>
          <li>
            <FontAwesomeIcon icon={faHtml5} /> HTML
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3Alt} /> CSS
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} /> JavaScript
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} /> React
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} /> TypeScript
          </li>
        </ul>

        <ul className={`tools-list ${showSkills ? "hidden" : "visible"}`}>
          <li>
            <FontAwesomeIcon icon={faGitAlt} /> Git
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} /> VS Code
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
