import React from "react";
import FeatherIcon from "feather-icons-react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Anjali</h1>
      <div className="home-content">
        <p>🐙 Hey, I am Anjali.</p>
        <p>
          Full stack developer and indie-builder who loves to play around and
          tinker with JavaScript. You can find most of my work{" "}
          <span className="home-word"><a className="github-link" href="https://github.com/anjali-001">here</a></span>
        </p>

        <h3>What have I been up to?</h3>
        <p>
          <span className="link-word"><a href="https://fellowship.mlh.io/" className="github-link">MLH Fellow'21</a></span>: Got selected for the
          MLH Fellowship for the Spring'21 Batch and worked on awesome projects
          with an amazing bunch of folks
        </p>
        <p>
          <span className="link-word">
            <a href="https://dschit.com/" className="github-link">DSC-HIT, Core Team Member and Director of Outreach'19</a>
          </span>
          : Will not be exaggerating if I say that a fair share of my initial
          tech journey is due to this community.
        </p>
        {/* <br/> */}
        <p>
          These days I am building <span className="link-word"><a href="https://withdeck.com" className="github-link">Deck</a></span>, one
          functionality at a time.
        </p>
        <p>
          I like to believe that I do have a life beyond my computer screen(or
          do I?). So, at times you'll find me painting.
        </p>
        <p>
          <i>Always up for a talk about web development(except arguments on
          JavaScript Frameworks), art or mechanical keyboards.{" "}</i>
        </p>
      </div>
    </div>
  );
}

export default Home;
