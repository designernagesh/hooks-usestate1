import React, { useState } from 'react';
import RenderDOM from 'react-dom';
import './style.css';

function App(){
  const [ count, setCount ] = useState(0)

  const updateCount = (e) => {
    setCount(e.target.value)
    console.log(count)
  }
  const incrementCount = () => {
    setCount(count + 1)
  }
  return (
    <div>      
      <h2>
        Hooks ( useState ) Example 1
      </h2>
      <input value={count} onChange={updateCount} />
      <br /><br />
      <button onClick={incrementCount}>Increase Count Value</button>
    </div>
  );
}

RenderDOM.render(<App />, document.getElementById('root'));
