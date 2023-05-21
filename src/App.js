import { useEffect , useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const [quote, setQuote] = useState({});

  function fetchQuote() {
    axios.get(`https://api.quotable.io/random`).then(
      (res) => {
        setQuote(res.data)
        console.log(res.data)
      }
    );
  };


  useEffect(() => {
    axios.get(`https://api.quotable.io/random`).then(
      (res) => {
        setQuote(res.data)
        console.log(res.data)
      })


  }, [])

  
  return (
    <div className="App">
      <header className="App-header">
      <h1> Generate A Quote </h1>
      <button className='button' onClick={fetchQuote}>Random Quote</button>
      <p>Quote: "{quote.content}"- {quote.author}</p>
      </header>
    </div>
  );
}

export default App;
