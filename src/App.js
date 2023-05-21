import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };

  
  return (
    <div className="App">
      <header className="App-header">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button onClick={() => fetchExcuse("office")}> Office </button>
      <p> {generatedExcuse} </p>
      </header>
    </div>
  );
}

export default App;
