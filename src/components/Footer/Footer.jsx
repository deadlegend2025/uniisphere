import React from 'react';
import footer_logo from "../../assets/footer_logo.png";
import namefooter from "../../assets/namefooter.png";
import Linkedin from "../../assets/Linkedin.png";
import Instagram from "../../assets/Instagram.png";
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">

        <div className="footer-brand">
          <img src={footer_logo} alt="Footer Logo" className="footer-logo" />
          <img src={namefooter} alt="Footer Name" className="footer-name" />
        </div>

        <p className="footer-tagline">Fostering Connections, Fueling Success</p>

  
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/uniisphere" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={Linkedin} alt="LinkedIn" className="social-icon" />
            <p>LinkedIn</p>
          </a>
          <a
            href="https://www.instagram.com/uniisphere" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={Instagram} alt="Instagram" className="social-icon" />
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;