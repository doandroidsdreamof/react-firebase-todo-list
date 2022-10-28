import React, { useState, useEffect, useContext, FC } from 'react'
import { AuthContext } from '../context/AuthContext'
import LogOutButton from '../components/Login/LogOutButton'
import { getAuth,onAuthStateChanged, setPersistence, signInWithEmailAndPassword, browserSessionPersistence  } from 'firebase/auth'


const Home: FC = () => {

  const user =  useContext(AuthContext)
  const auth = getAuth()

 console.log('home current user', user)



  return (
    <div className={user === null ? 'hidden' : 'bg-gray-200 h-screen'}>
      <div className='flex justify-center p-5'>
      <LogOutButton />
      </div>
    </div>
  )
}

export default Home
