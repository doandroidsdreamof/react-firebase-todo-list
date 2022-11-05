import React, {useEffect, useState } from 'react'

import { auth } from '../firebase'

interface AuthContextInterFace {
  user: React.ReactNode;
  loading: boolean;
  displayName: string;
}



type child = {
  children: React.ReactNode;



}

export const AuthContext = React.createContext<AuthContextInterFace | null>(null)



export const AuthProvider = ({ children }: child) => {
  const [user, setUser] = useState<AuthContextInterFace | null>(null)


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(user)

    })

    return unsubscribe
  }, [])

  return <AuthContext.Provider  value={user}>{children}</AuthContext.Provider>
}
