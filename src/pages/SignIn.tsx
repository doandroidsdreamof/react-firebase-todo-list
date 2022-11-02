import React, { FC, useContext,useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Link } from 'react-router-dom'

import loginImage from '../assets/image/login3.jpg'
import LoginAlert from '../components/Login/LoginAlert'
import LoginForm from '../components/Login/LoginForm'
import RegisterLink from '../components/Login/RegisterLink'
import ResetPassword from '../components/Login/ResetPassword'
import { AuthContext } from '../context/AuthContext'

const SignIn = () => {
  const [alertBox, setAlertBox] = useState<boolean>(false)
  const user = useContext(AuthContext)


  

  return (
    <>
      <LoginAlert alertBox={alertBox} />
      <div className={ 'm-auto space-y-8   md:w-8/12 lg:w-onehundred'}>
        <div className='rounded-xl  bg-opacity-50 backdrop-blur-2xl bg-white shadow-md'>
          <div className='lg:grid lg:grid-cols-2'>
            <div className='rounded-lg lg:block' hidden>
              <img
                src={loginImage}
                className='rounded-l-xl shadow-md object-cover h-onehundred'
                alt='login-image'
              />
            </div>
            <div className='p-6 sm:p-10 space-y-4'>
              <h2 className='mb-8 text-2xl text-cyan-900 font-bold'>Sign in to your account</h2>
              <LoginForm />
              <div className='flex   border-t flex-row justify-center  items-center'>
                <RegisterLink />
                <ResetPassword />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default SignIn
