import React, { useState, useEffect } from 'react'
import './App.css';
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'


function App() {

  function deneme(){
    const x  = 1;
  }
console.log('deneme')

  return (
    <div className="">
<SignIn />
<SignUp />
<Home />
    </div>
  );
}

export default App;
