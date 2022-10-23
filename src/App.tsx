import React, { useState, useEffect, useLayoutEffect, useContext, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import FormWrapper from './layouts/FormWrapper'
import { AuthProvider, AuthContext } from './context/AuthContext'
import { auth, db, storage } from './firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import ProtectedRoute from './components/common/ProtectedRoute'

function App() {
  const user = useContext(AuthContext)
  const [loading, setLoading] = useState<boolean>(false)
  const register = 'register'
  const login = 'login'

  console.log(user)

  return (
    <Routes>
      <Route
        path='/'
        element={
          <FormWrapper state={login}>
            <SignIn />
          </FormWrapper>
        }
      />

      <Route path='/home' element={<Home />} />
      <Route
        path='/register'
        element={
          <FormWrapper state={register}>
            <SignUp />
          </FormWrapper>
        }
      />
    </Routes>
  )
}

export default App
