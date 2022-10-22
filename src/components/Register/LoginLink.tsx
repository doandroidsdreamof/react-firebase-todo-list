import React from 'react'
import { Link } from 'react-router-dom'

 const LoginLink = () => {
  return (
    <p className="border-t pt-6 text-sm">
    You already have an account ?
    <Link to="/login" className="text-sky-500  ml-2">
        Sign in
    </Link>
</p>
  )
}


export default LoginLink