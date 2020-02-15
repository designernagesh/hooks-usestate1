import React, { useState } from 'react';
import RenderDOM from 'react-dom';
import './style.css';

function App(){
  const [ count, setCount ] = useState(0)

  return (
    <div>      
      <h2>
        Start editing to see some magic happen :)
      </h2>
    </div>
  );
}

RenderDOM.render(<App />, document.getElementById('root'));
