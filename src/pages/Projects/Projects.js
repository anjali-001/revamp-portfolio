import React from 'react'
import './Projects.css'
import FeatherIcon from "feather-icons-react";

function Projects() {
    return (
        <div className="projects">
            <h1 className="project-header">Projects</h1>
            <div className="ind-projects">
            <div className="ip">
                <FeatherIcon className="project-icon" icon="code"/>
                <p>Attack on Web</p>
            </div>
            <p className="project-desc">A few lines describing the project in brief. Blh Blah Blahhh</p>
            </div>

            <div className="ind-projects">
            <div className="ip">
                <FeatherIcon className="project-icon" icon="terminal"/>
                <p>Indie-Threads</p>
            </div>
            <p className="project-desc">A few lines describing the project in brief. Blh Blah Blahhh</p>
            </div>
            
            <div className="ind-projects">
            <div className="ip">
                <FeatherIcon className="project-icon" icon="codepen"/>
                <p>Bitter Links</p>
            </div>
            <p className="project-desc">A few lines describing the project in brief. Blh Blah Blahhh</p>
            </div>
        </div>
    )
}

export default Projects
