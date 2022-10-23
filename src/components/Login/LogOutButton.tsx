import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { getAuth } from 'firebase/auth'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {signOutUser} from '../../utils/SignOut'
import {MouseEvent} from 'react'




const LogOutButton = () => {



const handleClick = (e: MouseEvent<HTMLButtonElement>) =>{
  return signOutUser()
}




  return (
    <Button onClick={(e) => handleClick(e)}  variant='contained' disableElevation>
      Logout
    </Button>
  )
}

export default LogOutButton
