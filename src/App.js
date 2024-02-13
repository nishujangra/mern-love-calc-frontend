import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [score, setScore] = useState(null);

  const handleCalculateLove = async () => {
    try {
      const response = await axios.post('https://love-calc-0i1u.onrender.com/calculate-love', { name1, name2 });
      setScore(response.data.score);
    } catch (err) {
      setScore(null);
    }
  };

  return (
    <div className="calculator">
      <h1>Welcome <i className="fas fa-heartbeat" /> </h1>
      <h2>Calculate your love score</h2>
      <div>
        <div className="name-inputs">
          <input
            className="yourname name-box"
            type="text"
            placeholder="Your Name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
          <input
            className="lovername name-box"
            type="text"
            placeholder="Lover's Name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <button className="buttons" onClick={handleCalculateLove}>
          <i className="fas fa-heart" /> Submit
        </button>
      </div>
      {score !== null && (
        <>
          <p>
            {name1} and {name2}, your lovescore is {score} %
          </p>
        </>
      )}
      <footer>
        {/* Add your social media links here */}
        <p>&copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;