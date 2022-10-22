import React, { useState, useEffect, useContext, FC } from 'react'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { getAuth, signOut } from 'firebase/auth'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'




const LogOutButton = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const navigate = useNavigate();


  console.log('*********', user)


  function logOut() {
    signOut(auth)
      .then(() => {
        console.log('logut=>', auth)
        if(user !== null){
            navigate('/login')
        }
   
      })
      .catch((error) => {
        console.log('logut error=>', error)
      })
  }

  return (
    <Button onClick={logOut} variant='contained' disableElevation>
      Logout
    </Button>
  )
}

export default LogOutButton
