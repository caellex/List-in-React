import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState("");


  const addCities = () => {
    if(inputValue){
    setCities([...cities, inputValue]);
    setInputValue("");
  }
  };

  
  const removeCity = (indexToRemove) => {
    if(cities){
      const updatedCities = cities.filter((_, index) => index !== indexToRemove);
      setCities(updatedCities);
    }
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>What city would you like to add?</h1>
      <input 
      className="input"
      placeholder="Enter city.."
      value={inputValue}
      onChange={handleInputChange} 
      /><br></br>
      <button className="add-button" onClick={addCities}>Add</button>
      
      {cities.map((city, index) => (
        <li key={index}>{city}<button onClick={() => removeCity(index)}className="remove-button">X</button></li>
      ))}

      
      

    </div>


  );
}

export default App
