import React, { useState } from 'react';
import './style.scss';

const Child = (props) => {
  const [inputValue, setInputValue] = useState('50'); // Initialize state for input value

  const handleClick = (e) => {
    e.preventDefault();
    props.myArray[props.id] = inputValue; // Use props.id to update the correct position in the array
    console.log(props.myArray);
  };

  return (
    <div className='child'>
      <hr id="hr1" />
      <h3>{props.name}</h3>
      <h5>{props.description}</h5>

      <form onSubmit={handleClick}>
        <div className='child_int'>
          <h4 id='option'>Enter Value : {inputValue} </h4>
          <input
            type="range"
            id="inputField"
            min={0}
            max={100}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update state on input change
          />
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Child;
