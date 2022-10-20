import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import React from 'react'

function reducer(state, action) {
  switch (action) {
    case 'artış':
      return state = true ;
      break;
    case 'azalış':
      return state = false;
      break;
    default:
      throw new Error()
  }



}



function App() {
  const [count, dispatch] = React.useReducer(reducer, 0)
  return (
    <div className="App">
      <button onClick={() => dispatch('artış')}>arttır</button>
      <button onClick={() => dispatch('azalış')}>azalt</button>
      <h1>{count ? 'true' : 'false'}</h1>


    </div>
  );
}

export default App;
