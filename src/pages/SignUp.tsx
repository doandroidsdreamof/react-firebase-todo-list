import React, { useState, useEffect, FC } from 'react'
import { Link } from 'react-router-dom'
import registerImage from '../assets/image/register.jpg'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import * as Yup from 'yup'
import LoginLink from '../components/Register/LoginLink'
import GithubButton from '../components/common/GithubButton'
import GoogleButton from '../components/common/GoogleButton'
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth'

const SignUp: FC = () => {
    const registerPage = 'register';



  return (
    <div className='relative container m-auto   text-gray-500 '>
      <div className='m-auto space-y-8 md:w-8/12  max-h-fit  lg:w-eighty '>
        <div className='rounded-xl  bg-opacity-75  backdrop-blur-2xl bg-white   shadow-xl h'>
          <div className='lg:grid lg:grid-cols-2 '>
            <div className='rounded-lg lg:block ' hidden>
              <img
                src={registerImage}
                className='rounded-l-xl object-cover h-onehundred'
                alt='register-image'
              />
            </div>
            <div className='p-6 sm:p-16 '>
              <h2 className='mb-8 text-2xl text-cyan-900 font-bold'>Create Account</h2>
              <form className='space-y-5 '>
                <div className='flex gap-x-3 space-y-5  flex-col lg:flex-row '>
                  <label htmlFor='firstName' className='hidden'></label>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='First Name'
                    required
                    className='block w-full lg:w-1/2 px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
 '
                  />
                  <label htmlFor='lastName' className='hidden'></label>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Last Name'
                    required
                    className='block w-full  lg:w-1/2  px-4 py-3 rounded-md border  border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
 '
                  />
                </div>

                <label htmlFor='email' className='text-gray-700 hidden'></label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='email'
                  required
                  className=' px-4 w-full py-3 rounded-md border  border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
 '
                />

                <div>
                  <div className='flex items-center justify-between'>
                    <label htmlFor='pwd' className='text-gray-700 mb-2 hidden'></label>
                  </div>
                  <input
                    type='password'
                    name='pwd'
                    id='pwd'
                    placeholder='password'
                    minLength={8}
                    className='block w-full px-4   py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                  focus:ring-2 focus:ring-sky-300 focus:outline-none
                                  invalid:ring-2 '
                  />
                  <div className=' flex w-full mt-4 flex-row h-11 text-center justify-center'>
                    <GithubButton page={registerPage} />
                    <GoogleButton page={registerPage} />
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full py-3 px-6 rounded-md bg-sky-600
                              focus:bg-sky-700 active:bg-sky-500'
                >
                  <span className='text-white'>Continue</span>
                </button>
                <LoginLink />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
