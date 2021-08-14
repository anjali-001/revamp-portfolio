import React from "react";
import "./Projects.css";
import FeatherIcon from "feather-icons-react";
import { projects } from "./data.json";

function Projects() {
  return (
    <div className="projects">
      <h1 className="project-header">Projects</h1>
      <div className="project-content">
        <p>Some of the projects I am proud of</p>
        <br />
        <br />
        {projects.map((item, index) => {
          return (
              <>
            <a href={item.link} key={index}>
              <div className="ind-projects">
                <div className="ip">
                  <FeatherIcon className="project-icon" icon={item.icon} />
                  <p>{item.project}</p>
                </div>
                <p className="project-desc">{item.descripting}</p>
              </div>
            </a>
            <br/>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
