import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const Todolist = () => {
  const navigate= useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
};
  const handleAddItem = () => {
    if (inputValue.trim() !== '') { 
      setItems([...items, inputValue]);
      setInputValue(''); 
  }
};

  return (
    <>
    <h1>To Do List</h1>
     <input type="text" value={inputValue} onChange={handleInputChange}  />
     <button onClick={handleAddItem}>Add</button>
     <ul>
                {items.map((item, index) => (
                    <li key={index}>
                      <label>
                        <input type="checkbox"/>
                        </label>{item}</li>
                ))}
            </ul>
      
      
      
    </>
  );
};