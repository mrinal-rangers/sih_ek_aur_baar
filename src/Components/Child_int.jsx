import React from 'react';
import './style.scss';

const Child = (props) => {
  const currId=props.id
  const handleClick = (e) => {
    e.preventDefault(); 
    const inputValue = document.getElementById('inputField').value;
    console.log(inputValue)
    props.myArray[currId] = inputValue;
    console.log(props.myArray);
  };

  return (
    <div className='child'>
      <hr id="hr1" />
      <h3>{props.name}</h3>
      <h5>{props.description}</h5>

      <form onSubmit={handleClick}>
      <div className='child_int'>
        <h4 id='option'>Enter Value: </h4>
        <input type="number" id="inputField"/>
        <button type="submit" >SUBMIT</button>
      </div>
      </form>
    </div>
  );
};

export default Child;
