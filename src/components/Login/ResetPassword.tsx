import React from 'react'
import { Link } from 'react-router-dom'

 const ResetPassword = () => {
  return (
    <button className=' ml-auto -block underline text-sky-500 ' type='reset'>
      <Link to='/reset' className='text-xs  text-sky-500'>Forgot your password ?</Link>
    </button>

  )
}


export default ResetPassword