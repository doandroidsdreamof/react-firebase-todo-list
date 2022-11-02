import React, { useContext, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'


//React.ReactNode
type child = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: child) => {
  console.log("🚀 ~ file: ProtectedRoute.tsx ~ line 14 ~ ProtectedRoute ~ children", children)
  const user = useContext(AuthContext)
  const auth = getAuth()
  const [logic,setLogic] = useState(false)

  if (!user) {
    return <Navigate to='/' />;
  }else{
    return <>{children}</>;
  }

};


export default ProtectedRoute
