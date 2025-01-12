import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Add CSS styling for the footer
import Image from "next/image";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Image src={logo} alt="ShubEv Logo" className="footer-logo" />
        <h2 className="footer-company-name">ShubEv</h2>
        <p className="footer-description">Your go-to platform for everything related to cars and more!</p>
        <address className="footer-address">
          123 ShubEv Street, Dehradun, Uttarakhand, India
        </address>
      </div>
     
      <div className="footer-right">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
