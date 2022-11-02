import React, { useContext,useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged  } from 'firebase/auth'
import { Route,Routes } from 'react-router-dom'

import ProtectedRoute from './components/common/ProtectedRoute'
import { AuthContext,AuthProvider } from './context/AuthContext'
import FormWrapper from './layouts/FormWrapper'
import Home from './pages/Home'
import PasswordReset from './pages/PasswordReset'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { auth, db, storage } from './firebase'

function App() {
  const user = useContext(AuthContext)
  const [loading, setLoading] = useState<boolean>(false)
  const register = 'register'
  const login = 'login'
  const auth = getAuth();



/*
  onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      // console.log('değişmedi', user)
    } else {
      // console.log('değişti', user)
      // ...
    }
  });
*/



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
        />Home

        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
              <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
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
               <Route
          path='/reset'
          element={
            <FormWrapper state={register}>
              <PasswordReset />
            </FormWrapper>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
