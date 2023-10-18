import React, { useState } from 'react';

function DropdownSelect() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div >
      
      <select className= 'selection' value={selectedOption} onChange={handleOptionChange}>
        <option style={{color: '#999', padding: '4px'}} value="" disabled hidden>Add your buisness label</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    
    </div>
  );
}

export default DropdownSelect;
