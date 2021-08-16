import React from 'react'
import FeatherIcon from 'feather-icons-react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">

            {/* Horizontal line */}
            <div className="footer-line" style={{height:"1px", width:"45vw", backgroundColor:"#ACB1B1", margin:"auto",opacity:"0.2"}}>

            </div>

            {/* Footer Content */}
            <div className="footer-content">
            <div className="footer-icons">
                <a href="https://github.com/anjali-001"><FeatherIcon icon="github"/></a> 
                <a href="https://twitter.com/_Anjali19_"><FeatherIcon icon="twitter"/></a>
                <a href="https://www.linkedin.com/in/anjali-singh19/"><FeatherIcon icon="linkedin"/></a>
            </div>
            <div style={{opacity:"0.5"}}> <span style={{width:"20px"}}>&#169;</span> Anjali</div>
            </div>

        </div>
    )
}

export default Footer
