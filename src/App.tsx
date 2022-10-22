import React, { useState, useEffect, useContext } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import FormWrapper from './layouts/FormWrapper'
 import { AuthProvider,AuthContext } from './context/AuthContext'
 import { auth,db,storage } from './firebase'

function App() {

  useEffect(()=>{

  },[])


const deneme = useContext(AuthContext)
console.log('App auth ==>',deneme)

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={
            <FormWrapper>
              <SignIn />
            </FormWrapper>
          }
        />
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
    </AuthProvider>
  )
}

export default App
