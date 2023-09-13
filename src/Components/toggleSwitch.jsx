import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import './style.scss';

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div className="toggler" style={{textAlign: "center"}}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleSwitch;