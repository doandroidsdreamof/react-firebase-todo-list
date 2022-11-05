import React, { FC } from 'react'

import GoogleButton from '../components/common/GoogleButton'
import LoginLink from '../components/Register/LoginLink'
import RegisterForm from '../components/Register/RegisterForm'
import RegisterImage from '../components/Register/RegisterImage'


const SignUp: FC = () => {
  const registerPage = 'register'
  return (
      <div className='m-auto space-y-8 md:w-8/12   rounded-xl  max-h-fit  lg:w-eighty '>
        <div className='rounded-xl  bg-opacity-75  backdrop-blur-2xl bg-gray-800   shadow-lg '>
          <div className='lg:grid lg:grid-cols-2 '>
            <RegisterImage />
            <div className='p-6 sm:p-16 '>
              <h2 className='mb-8 text-2xl text-white font-bold'>Create Account</h2>
              <form className='space-y-5 '>
                <RegisterForm />
                <div className=' flex w-full mt-4 flex-row h-11 text-center justify-center'>
                    <GoogleButton page={registerPage} />
                  </div>
                <LoginLink />
              </form>
            </div>
          </div>
        </div>
      </div>

  )
}

export default SignUp
