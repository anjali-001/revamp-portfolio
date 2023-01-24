import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import FeatherIcon from "feather-icons-react";
import logodark from '../../assets/logodark.png'


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
                <a target="_blank" rel='noreferrer' href='https://drive.google.com/file/d/13woGZrDUvLfETwhrOSIt6qJpjozLLd5z/view?usp=share_link'>
                    <p>Resume</p>
                </a>
                
                </div>
                <Link className="nav-icon" to='/bookmarks'>
                    <p><FeatherIcon icon="bookmark"/></p>
                </Link>
                
            
        </div>
    )
}

export default Navbar
