import React from 'react'
import FeatherIcon from "feather-icons-react";
import './Home.css'

function Home() {
    return (
        <div className="home">
            <h1>Anjali</h1>
            <div className="home-content">
            <p>🐙 Hey, I am Anjali.</p>
            <p>A full stack developer and indie-builder who loves to play around and tinker with JavaScript. You can find most of my work <span className="home-word">here</span></p>
            
            <h3>What have I been up to?</h3>
            <p><span className="link-word">MLH Fellow'21</span>: Got selected for the MLH Fellowship for the Spring'21 Batch and worked on awesome projects with an amazing bunch of folks</p>
            <p><span className="link-word">DSC-HIT, Core Team Member and Director of Outreach'19</span>: Will not be exaggerating if I say that a fair share of my initial tech journey is due to this community.</p>
            {/* <br/> */}
            <p>These days I am building <span className="link-word">Deck</span>, one functionality at a time.</p>
            <p>I like to believe that I do have a life beyond my computer screen(or do I?). Anyway, I like to paint and be it a bug I can't resolve or some problem, I like to vent it out via art. Always up for a talk about web development(except arguments on JavaScript Frameworks), art or mechanical keyboards.</p>
            <p>You can connect with me on any of the social platform or drop a <span className="link-word">mail</span></p>
            </div>
        </div>
    )
}

export default Home
