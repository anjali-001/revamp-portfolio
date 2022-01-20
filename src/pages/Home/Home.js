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
          Full-stack developer and indie-builder who loves to play around and
          tinker with JavaScript. You can find most of my work{" "}
          <span className="home-word">
            <a className="github-link" href="https://github.com/anjali-001">
              here
            </a>
          </span>
        </p>

        <h3>What have I been up to?</h3>
        <p>
          <span className="link-word">
            <a href="https://mydukaan.io" className="github-link">
              Dukaan
            </a>
          </span>
          : SWE Intern. Building(and breaking) cool stuff here.
        </p>
        <p>
          <span className="link-word">
            <a href="https://algobulls.com/" className="github-link">
              Algobulls - Frontend Developer
            </a>
          </span>
          : Frontend developer intern Fall'21.
        </p>
        <p>
          <span className="link-word">
            <a href="https://www.zfellows.com/" className="github-link">
              Z Fellow'21
            </a>
          </span>
          : Was a part of Z Fellows October'21 cohort for{" "}
          <span className="link-word">
            <a
              href="https://www.producthunt.com/posts/deck-alpha"
              className="github-link"
            >
              Deck
            </a>
          </span>
          , an admin dashboard for resource sharing and access management.
        </p>
        <p>
          <span className="link-word">
            <a href="https://fellowship.mlh.io/" className="github-link">
              MLH Fellow'21
            </a>
          </span>
          : Got selected for the MLH Fellowship for the Spring'21 Batch and
          worked on awesome projects with an amazing bunch of folks
        </p>
        <p>
          <span className="link-word">
            <a href="https://dschit.com/" className="github-link">
              DSC-HIT, Core Team Member and Director of Outreach'19
            </a>
          </span>
          : I will not be exaggerating if I say that a fair share of my initial
          tech journey is due to this community.
        </p>
        <h3>Open source</h3>
        <p>
          As someone who has constantly learnt from open source, it feels good
          to be able to contribute to projects that are used by someone. My
          recent contribution,
        </p>
        <p>
          <span className="link-word">
            <a
              href="https://github.com/SimplQ/simplQ-frontend"
              className="github-link"
            >
              SimpleQ
            </a>
          </span>
          : It is a completely web-based queue management solution that anyone
          can use to create instant virtual queues.
        </p>
        {/* <br/> */}
        <p>
          I like to believe that I do have a life beyond my computer screen(or
          do I?). So, at times you'll find me painting.
        </p>
        <p>
          Always up for a talk about web development(except arguments on
          JavaScript Frameworks), art or mechanical keyboards. You can connect
          with me on{" "}
          <a href="https://twitter.com/_Anjali19_" className="github-link">
            Twitter
          </a>{" "}
          or drop a mail at{" "}
          <a href="mailto:hi@anjali.wtf" className="github-link">
            hi@anjali.wtf
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
