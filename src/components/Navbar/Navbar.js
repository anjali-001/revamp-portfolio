import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import FeatherIcon from "feather-icons-react";
import logodark from '../../assets/logodark.png'
import menuIcon from '../../assets/menu-icon.svg'


function Navbar() {
    const [drop, setDrop] = useState(false)
    const showDropdown = () =>{
        if(!drop){
        document.querySelector(".dropdown-content").style.top = "56px"

        setDrop(true)
        }
        else{
        document.querySelector(".dropdown-content").style.top = "-156px"
        setDrop(false)
        }
    }
    return (
        <div className="navbar">
                <Link to="/">
                    <img src={logodark}/>
                </Link>
                <div className="navbar-right">
                <Link to='/projects'>
                    <p>Projects</p>
                </Link>
                <Link to='/blog'>
                    <p>Blog</p>
                </Link>
                <Link to='/'>
                    <p>Resume</p>
                </Link>
                <div class="dropdown">
                <img className="navbar-menu" src={menuIcon} onClick={showDropdown} alt="menu"/>
                <div class="dropdown-content">
                <Link className="">
                    <p><FeatherIcon icon="bookmark"/></p>
                </Link>
                <Link className="">
                    <p><FeatherIcon icon="send"/></p>
                </Link>
                {/* <Link className="">
                    <p className="btn-theme"><FeatherIcon icon="sun"/></p>
                </Link> */}
                </div>
                </div>
                {/* <img className="navbar-menu" src={menuIcon}/> */}
                <Link className="nav-icon">
                    <p><FeatherIcon icon="bookmark"/></p>
                </Link>
                <Link className="nav-icon">
                    <p><FeatherIcon icon="send"/></p>
                </Link>
                {/* <Link className="nav-icon">
                    <p className="btn-theme"><FeatherIcon icon="sun"/></p>
                </Link> */}
                </div>
                
            
        </div>
    )
}

export default Navbar
