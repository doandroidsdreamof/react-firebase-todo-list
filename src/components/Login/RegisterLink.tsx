import React from 'react'
import { Link } from 'react-router-dom'

 const RegisterLink = () => {
  return (
    <p className=' text-xs lg:text-sm'>
    Don&apos;t have an account ?
    <Link to='/register' className='text-sky-500 ml-2'>
      Sign up
    </Link>
  </p>
  )
}


export default RegisterLink