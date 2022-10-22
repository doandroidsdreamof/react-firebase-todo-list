import React, { useState, useEffect, FC } from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import * as Yup from 'yup'
import RegisterImage from '../components/Register/RegisterImage'
import LoginLink from '../components/Register/LoginLink'
import GithubButton from '../components/common/GithubButton'
import GoogleButton from '../components/common/GoogleButton'
import RegisterForm from '../components/Register/RegisterForm'
import RegisterSubmit from '../components/Register/RegisterSubmit'
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth'

const SignUp: FC = () => {
  const registerPage = 'register'

  return (
      <div className='m-auto space-y-8 md:w-8/12 border-2  rounded-xl  max-h-fit  lg:w-eighty '>
        <div className='rounded-xl  bg-opacity-75  backdrop-blur-2xl bg-white   shadow-lg '>
          <div className='lg:grid lg:grid-cols-2 '>
            <RegisterImage />
            <div className='p-6 sm:p-16 '>
              <h2 className='mb-8 text-2xl text-cyan-900 font-bold'>Create Account</h2>
              <form className='space-y-5 '>
                <RegisterForm />
                <div className=' flex w-full mt-4 flex-row h-11 text-center justify-center'>
                    <GithubButton page={registerPage} />
                    <GoogleButton page={registerPage} />
                  </div>
                 <RegisterSubmit />
                <LoginLink />
              </form>
            </div>
          </div>
        </div>
      </div>

  )
}

export default SignUp
