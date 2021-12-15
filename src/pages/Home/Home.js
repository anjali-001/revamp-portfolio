import React from "react";
import FeatherIcon from "feather-icons-react";
import "./Home.css";
import {Link} from 'react-router-dom'

function About() {
  return (
    <div className="home">
      <h1>Anjali</h1>
      <div className="home-content">
        <p>🐙 Hey, I am Anjali.</p>
        <p>
          Full-stack developer and indie-builder who loves to play around and
          tinker with JavaScript. You can find most of my work{" "}
          <span className="home-word">
            <a className="github-link" href="https://github.com/anjali-001">
              here
            </a>
          </span>
        </p>
        <p>Currently, I am a frontend developer intern at  <span className="link-word">
            <a href="https://algobulls.com/" className="github-link">
              Algobulls.
            </a>
          </span>
        </p>

        <Link to='/about'><button className="button-home">Learn more about me</button></Link>
        <h3>Or play this game instead</h3>
      </div>
    </div>
  );
}

export default About;
