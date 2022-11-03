import React, { useContext, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

//React.ReactNode
type child = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: child) => {
  const user = useContext(AuthContext)
  const auth = getAuth()
  const [logic, setLogic] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid
      setLogic(false)
    } else {
      setLogic(true)
    }
  })

  if (!user && logic === true) {
    return <Navigate to='/' />
  } else {
    return <>{children}</>
  }
}

export default ProtectedRoute
