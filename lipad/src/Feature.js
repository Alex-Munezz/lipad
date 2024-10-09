import React from 'react';
import './App.css';
import img1 from './Illustration_Frame_1.png';
import img2 from './Illustration_Frame_2.png';
import img3 from './Illustration_Frame_3.png';
import img4 from './Illustration_Frame_4.png';
import img5 from './Illustration_Frame_5.png';
import lipad from './lipad.mov';
const Feature = () => {
  return (
    <div className="feature-container">
      <h1 className="feature-heading">Discover the Power of LIPAD</h1>
      <p className="feature-description">
        Automate your business, and give your customers a more seamless experience.
      </p>

      <div className="main-card">
        <div className="main-card-content">
          <h2 className="main-card-title">Petty Cash Efficiency, Simplified</h2>
          <div className="circle2"></div>
          <p className="main-card-description">
            Save time, stay on schedule, handle all your payments from whenever you are. 
          </p>
        </div>
        <img src={img1} alt="Feature One" className='main-card-image' />
      </div>

      <div className="sub-cards">
        <div className="sub-card">
          <div className="circle"></div>
          <br /><br /><br />
          <h3 className="sub-card-title">Streamline your invoicing</h3>
          <p className="sub-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulptate nisi. Nulla viverra odio nec risus vehicular luctus.</p>
          <img src={img2} alt="Feature Two" className="sub-card-image" />
        </div>
        <div className="sub-card">
          <div className="circle"></div>
          <br /><br /><br />
          <h3 className="sub-card-title2">Collect Instore with different payment methods?</h3>
          <img src={img3} alt="Feature Three" className="sub-card-image" />
        </div>
        <div className="sub-card">
          <div className="circle"></div>
          <br /><br /><br />
          <h3 className="sub-card-title3">Get paid instantly using our payment request links.</h3>
          <p className="sub-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulptate nisi. Nulla viverra odio nec risus vehicular luctus.</p>
          <img src={img4} alt="Feature Four" className="sub-card-image" />
        </div>
        <div className="sub-card">
          <div className="circle"></div>
          <br /><br /><br />
          <h3 className="sub-card-title4">Connect with your Customers easily</h3>
          <p className="sub-card-description">Grow your business easily by connecting with your potential or current customers via SMS and E-Mail from our portal or API.</p>
          <img src={img5} alt="Feature Five" className="sub-card-image" />
        </div>
      </div>

      <div className="video-section">
        <div className="video-text">
          <h2 className="video-title">Learn how to use Lipad</h2>
          <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulptate nisi. Nulla viverra odio nec risus vehicular luctus.</p>
        </div>
        <div className="video-content">
          <video width="100%" controls>
            <source src={lipad} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Feature;
