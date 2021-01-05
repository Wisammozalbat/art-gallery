import React from 'react';
import './Footer.css'

import {SiInstagram} from 'react-icons/si'
import {ImFacebook2} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo">TrendArt</div>
            <div className="footer-links">
                <div className="footer-link">About us</div>
                <div className="footer-link">Contact</div>
                <div className="footer-link">Legal Information</div>
                <div className="footer-link">Email</div>
                <div className="footer-link">
                    <SiInstagram className="footer-link__icon" />
                </div>
                <div className="footer-link">
                    <ImFacebook2 className="footer-link__icon"/>
                    </div>
                <div className="footer-link">
                    <FaTwitterSquare className="footer-link__icon"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;