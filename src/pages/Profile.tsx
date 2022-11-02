import React, { useContext } from 'react'
import { getAuth } from 'firebase/auth'

import LogOutButton from '../components/Login/LogOutButton'
import TopNavBar from '../components/todo/TopNavBar'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

const Profile = () => {
  const user = useContext(AuthContext)
  const auth = getAuth()

  return (
    <div className={user === null  ? 'hidden ' : 'bg-bg-color'}>  
      <TopNavBar />
      <div className='w-fit h-fit flex  mt-auto absolute bottom-5  left-5 '>
      <LogOutButton />
      </div>
    </div>
  )
}

export default Profile
