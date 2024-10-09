import React from 'react';
import { Link } from 'react-router-dom';
import logo from './lipad-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Our Products</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="auth-links">
        <Link to="/login">Login</Link>
        <Link to="/signup" className="get-started">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
