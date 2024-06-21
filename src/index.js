import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo from './Components/Demo'
  
let name = 'Pranjal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <h1>React JS: {Math.floor(Math.random()*1000)}</h1> */}

    {/* <h1> Welcome to React JS, {name + "!"}</h1>
    <p>This is a component!</p> */}

    <h1 className='title'>React JS: </h1>

    <Demo />
    <Demo />
    <Demo /> 
  </div>
);


