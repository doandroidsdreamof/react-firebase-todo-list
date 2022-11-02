import React, { useContext } from 'react'
import { getAuth } from 'firebase/auth'

import TopNavBar from '../components/todo/TopNavBar'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

const Profile = () => {
  const user = useContext(AuthContext)
  const auth = getAuth()

  return (
    <div className={user === null  ? 'hidden ' : 'bg-bg-color'}>  
      <TopNavBar />
      Profile Page
    </div>
  )
}

export default Profile
