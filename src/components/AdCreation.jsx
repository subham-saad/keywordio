import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AdCreation() {
  const navigate = useNavigate();
  const [isTextAdSelected, setIsTextAdSelected] = useState(false);
  const [isMediaAdSelected, setIsMediaAdSelected] = useState(false);

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;

    if (checkboxName === 'textAd') {
      setIsTextAdSelected(e.target.checked);
    } else if (checkboxName === 'mediaAd') {
      setIsMediaAdSelected(e.target.checked);
    }
  };

  const handleNextClick = () => {
    if (isTextAdSelected) {
      navigate('/create-ads'); 
    } else if (isMediaAdSelected) {
      navigate('/create-ad-form'); 
    } else {
      alert('Please select at least one checkbox before proceeding.');
    }
  };

  return (
    <>
      <div className="ad-creation-container">
        <div className="ad-card">
          <div className="card-header">
            <input
              type="checkbox"
              name="textAd"
              checked={isTextAdSelected}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="card-content">
            <span><img src="/contact-us.png" alt="Example" className='mediaimge'/></span>
            <p>Create</p>
            <h3>Text Ad</h3>
          </div>
        </div>

        <div className="ad-card">
          <div className="card-header">
            <input
              type="checkbox"
              name="mediaAd"
              checked={isMediaAdSelected}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="card-content">
            <span><img src="/img_9505.webp" alt="Example" className='mediaimge'/></span>
            <p>Create</p>
            <h3>Media Ad</h3>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className='submitbtn' type="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
}

export default AdCreation;
