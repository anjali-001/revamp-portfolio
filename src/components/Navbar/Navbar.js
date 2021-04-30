import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import FeatherIcon from "feather-icons-react";
import logodark from '../../assets/logodark.png'



function Navbar() {
    return (
        <div className="navbar">
                <img src={logodark}/>
                <div className="navbar-right">
                <Link to='/'><p>Projects</p></Link>
                <Link to='/'><p>Blog</p></Link>
                <Link to='/'><p>Resume</p></Link>
                <Link><p><FeatherIcon icon="bookmark"/></p></Link>
                <Link><p><FeatherIcon icon="send"/></p></Link>
                <Link><p className="btn-theme"><FeatherIcon icon="sun"/></p></Link>
                </div>
            
        </div>
    )
}

export default Navbar
