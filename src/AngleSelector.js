import React, { useState, useEffect } from 'react';
import './AngleSelector.css';

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const handleInputChange = (event) => {
    updateAngle(parseInt(event.target.value) || 0);
  };

  const handleSliderChange = (event) => {
    updateAngle(parseInt(event.target.value));
  };

  const handleRadioChange = (event) => {
    updateAngle(parseInt(event.target.value));
  };

  const updateAngle = (value) => {
    value = ((value % 360) + 360) % 360; // Ensure value is between 0 and 360
    setAngle(value);
  };

  useEffect(() => {
    // This effect runs when the component mounts and whenever the angle changes
    // You can add any side effects here if needed
  }, [angle]);

  return (
    <div className="angle-selector">
      <br />
      <h3>E18227 Angle Selector using React</h3>
      <br />
      <input
        type="number"
        value={angle}
        onChange={handleInputChange}
        min="0"
        max="360"
      />
      <input
        type="range"
        value={angle}
        onChange={handleSliderChange}
        min="0"
        max="360"
      />
      <div className="radio-group">
        {[0, 45, 60, 90, 180].map((value) => (
          <label key={value} className="radio-label">
            <input
              type="radio"
              name="anglePreset"
              value={value}
              checked={angle === value}
              onChange={handleRadioChange}
            />
            {value}°
          </label>
        ))}
      </div>
    </div>
  );
};

export default AngleSelector;