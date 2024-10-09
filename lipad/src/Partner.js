import React from 'react';
import './App.css'; 
import img1 from './image-77.png'; 
import img2 from './image-78.png';
import img3 from './image-79.png';
import img4 from './image-80.png';
import img5 from './image-81.png';

const Partner = () => {
  return (
    <div className="partner-container">
      <h1 className="partner-heading">Our partner banks</h1>
      <div className="scrolling-wrapper">
        <div className="scrolling-content">
          <img src={img1} alt="Bank 1" className="partner-image" />
          <img src={img2} alt="Bank 2" className="partner-image" />
          <img src={img3} alt="Bank 3" className="partner-image" />
          <img src={img4} alt="Bank 4" className="partner-image" />
          <img src={img5} alt="Bank 5" className="partner-image" />
          <img src={img1} alt="Bank 1" className="partner-image" />
          <img src={img2} alt="Bank 2" className="partner-image" />
          <img src={img3} alt="Bank 3" className="partner-image" />
          <img src={img4} alt="Bank 4" className="partner-image" />
          <img src={img5} alt="Bank 5" className="partner-image" />
        </div>
      </div>
      <div className="partner-section">
      <div className="partner-left">
        <div className="badge">Why you should use LIPAD</div>
        <h1 className="partner-heading2">One platform for all your business needs</h1>
        <p className="partner-description">
          Simplify your business with our all-in-one platform.
        </p>
      </div>

      <div className="partner-right">
        <ul className="feature-list">
          <li>Instant Activation to start transacting</li>
          <li>Simple pricing</li>
          <li>Built for all merchants</li>
          <li>Dashboard Reporting</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Partner;
