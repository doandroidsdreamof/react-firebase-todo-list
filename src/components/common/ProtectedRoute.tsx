import React, { useContext, FC,useState } from 'react'
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
  const [logic,setLogic] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      // console.log('değişmedi', user)
      setLogic(false)
    } else {
      // console.log('değişti', user)
      setLogic(true)
  
    }
  });

  if (!user && logic === true) {
    return <Navigate to='/' />;
  }else{
    return <>{children}</>;
  }

};


export default ProtectedRoute
