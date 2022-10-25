import React, { useContext, FC } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

//React.ReactNode
type child = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: child) => {
  const user = useContext(AuthContext)
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      return <Navigate to='/' />
    }
  })

  return <>{children}</>
}

export default ProtectedRoute
