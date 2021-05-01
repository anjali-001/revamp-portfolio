import React from 'react'
import FeatherIcon from 'feather-icons-react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">

            {/* Horizontal line */}
            <div className="footer-line" style={{height:"1px", width:"60vw", backgroundColor:"#ACB1B1", margin:"auto"}}>

            </div>

            {/* Footer Content */}
            <div className="footer-content">
            <div className="footer-icons">
                <FeatherIcon icon="github"/>
                <FeatherIcon icon="twitter"/>
                <FeatherIcon icon="linkedin"/>
                <FeatherIcon icon="instagram"/>
            </div>
            <div> <span style={{width:"20px"}}>&#169;</span> Anjali</div>
            </div>

        </div>
    )
}

export default Footer
