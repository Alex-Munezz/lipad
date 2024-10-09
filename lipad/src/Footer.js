import React from 'react';
import './App.css'; 
import logo from './Logo_Kepo.png';
import { FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="cta-section">
        <h2 className="cta-text">I’m interested to simplify my business today!</h2>
        <div className="email-input-container">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="cta-button">Submit Now</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Lipad Logo" />
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Our Location</h3>
            <p>Kunde Rd</p>
            <p>Nairobi Kenya</p>
            <p>info@lipad.co</p>
            <p>+254112493542</p>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <p>About us</p>
            <p>Contact us</p>
            <p>Careers</p>
            <p>Press</p>
          </div>

          <div className="footer-column">
            <h3>Products</h3>
            <p>Collect</p>
            <p>Payout</p>
            <p>Engage</p>
            <p>ERP Solutions</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 All rights reserved</p>
        <div className="footer-links">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <div className="social-icons">
          <FaLinkedin />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
