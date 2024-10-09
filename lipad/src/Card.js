import React, { useState } from 'react';
import './App.css';
import img1 from './Illustration_Frame.png';
import greater from './greater-than.png';
import pdq2 from './PDQ2.png';

const Card = () => {
  const [selectedOption, setSelectedOption] = useState('bank');

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const cardContent = {
    bank: {
      name: 'Banking on banks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulptate nisi.',
      image: pdq2,
    },
    merchants: {
      name: 'Merchants',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulptate nisi.',
      image: img1,
    },
  };

  return (
    <div className='card-container'>
      <div className="card">
        <div className="button-group">
          <button
            className={`option-button1 ${selectedOption === 'bank' ? 'active' : ''}`}
            onClick={() => handleButtonClick('bank')}
          >
            Banks
          </button>

          <button
            className={`option-button2 ${selectedOption === 'merchants' ? 'active' : ''}`}
            onClick={() => handleButtonClick('merchants')}
          >
            Merchants
          </button>
        </div>

        {/* Render the content based on the selected option */}
        <h2 className="card-title">{cardContent[selectedOption].name}</h2>
        <p className="card-description">{cardContent[selectedOption].description}</p>
        <div className="illustration">
          <img src={cardContent[selectedOption].image} alt='illustration' />
        </div>

        <br />
        <br />
        <button className='started'>
          Get Started <img src={greater} alt='greater' className='greater'/>
        </button>
      </div>
    </div>
  );
};

export default Card;
