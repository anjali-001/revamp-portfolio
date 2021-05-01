import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import FeatherIcon from "feather-icons-react";
import logodark from '../../assets/logodark.png'
import menuIcon from '../../assets/menu-icon.svg'


function Navbar() {
    return (
        <div className="navbar">
                <Link to="/"><img src={logodark}/></Link>
                <div className="navbar-right">
                <Link to='/'><p>Projects</p></Link>
                <Link to='/'><p>Blog</p></Link>
                <Link to='/'><p>Resume</p></Link>
                <img className="navbar-menu" src={menuIcon}/>
                <Link className="nav-icon"><p><FeatherIcon icon="bookmark"/></p></Link>
                <Link className="nav-icon"><p><FeatherIcon icon="send"/></p></Link>
                <Link className="nav-icon"><p className="btn-theme"><FeatherIcon icon="sun"/></p></Link>
                </div>
                
            
        </div>
    )
}

export default Navbar
