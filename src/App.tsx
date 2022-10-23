import React, { useState, useEffect, useContext, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import FormWrapper from './layouts/FormWrapper'
import { AuthProvider, AuthContext } from './context/AuthContext'
import { auth, db, storage } from './firebase'
import { getAuth } from 'firebase/auth'

function App() {
  const user = useContext(AuthContext)
  const [loading,setLoading] = useState<boolean>(false)
  const register = 'register'
  const login = 'login'


  useEffect(()=>{


  },[])




  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            user  !== null ?(
              <Home />
            ) : (
              <FormWrapper state={login}>
                  <SignIn  />
              </FormWrapper>
            )
          }
        />

        <Route
          path='/login'
          element={
            <FormWrapper state={login}>
              <SignIn  />
            </FormWrapper>
          }
        />
        <Route
          path='/register'
          element={
            <FormWrapper state={register}>
              <SignUp />
            </FormWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
