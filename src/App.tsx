import React, { useState, useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import FormWrapper from './layouts/FormWrapper'
import { AuthProvider, AuthContext } from './context/AuthContext'
import { auth, db, storage } from './firebase'
import { getAuth, onAuthStateChanged  } from 'firebase/auth'
import ProtectedRoute from './components/common/ProtectedRoute'

function App() {
  const user = useContext(AuthContext)
  const [loading, setLoading] = useState<boolean>(false)
  const register = 'register'
  const login = 'login'
  const auth = getAuth();


  useEffect(()=>{

  },[])


  console.log(user)




  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/'
          element={
            <FormWrapper state={login}>
              <SignIn />
            </FormWrapper>
          }
        />

        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
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
    </AuthProvider>
  )
}

export default App
