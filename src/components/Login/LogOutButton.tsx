import {MouseEvent} from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'

import {signOutUser} from '../../utils/SignOut'




const LogOutButton = () => {
  const navigate = useNavigate()



const handleClick = (e: MouseEvent<HTMLButtonElement>) =>{
  navigate('/')
  return signOutUser()
}

  return (
    <Button onClick={(e) => handleClick(e)}  variant='contained' disableElevation>
      Logout
    </Button>
  )
}

export default LogOutButton
