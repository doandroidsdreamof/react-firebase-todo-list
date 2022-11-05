import React, { useContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from './components/common/ProtectedRoute'
import { AuthContext, AuthProvider } from './context/AuthContext'
import FormWrapper from './layouts/FormWrapper'
import Home from './pages/Home'
import PasswordReset from './pages/PasswordReset'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const user = useContext(AuthContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [routerLogic, setRouterLogic] = useState<boolean>(false)
  const register = 'register'
  const login = 'login'
  const auth = getAuth()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setRouterLogic(true)
      } else {
        setRouterLogic(false)
      }
    })
  },[])



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
        Home
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {routerLogic !== false ? <Route path='/profile' element={<Profile />} /> : <Route path='/profile' element={<></>} />}
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
