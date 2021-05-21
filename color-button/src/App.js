import React, { useState } from 'react';
import './App.css';

export const replaceCameWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

const App = () => {

  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button 
          style={{ backgroundColor: disabled ? 'grey' : buttonColor }}
          onClick={() => setButtonColor(newButtonColor)}
          disabled={disabled}
      >Change to {replaceCameWithSpaces(newButtonColor)}
      </button>
      <br/>
      <input 
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}  
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
