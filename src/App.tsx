import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import FormWrapper from './layouts/FormWrapper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <FormWrapper>
              <SignIn />
            </FormWrapper>
          }
        />
        <Route path='/login' element={<SignIn />} />
        <Route
          path='/register'
          element={
            <FormWrapper>
              <SignUp />
            </FormWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
