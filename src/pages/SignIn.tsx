import React, { useState, useEffect, FC } from 'react'
import loginImage from '../assets/image/login2.jpg'

const SignIn: FC = () => {
  return (
    <div className='container m-auto    text-gray-500 px-6  md:px-12 xl:px-40'>
      <div className='m-auto space-y-8  md:w-8/12 lg:w-full'>
        <div className='rounded-xl  bg-opacity-50 backdrop-blur-2xl bg-white shadow-md'>
          <div className='lg:grid lg:grid-cols-2'>
            <div className='rounded-lg lg:block' hidden>
              <img src={loginImage} className='rounded-l-xl shadow-md object-cover h-onehundred' alt='take a note' />
            </div>
            <div className='p-6 sm:p-16'>
              <h2 className='mb-8 text-2xl text-cyan-900 font-bold'>Sign in to your account</h2>
              <form action='' className='space-y-8'>
                <div className='space-y-2'>
                  <label htmlFor='email' className='text-gray-700'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400'
                  />
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label htmlFor='pwd' className='text-gray-700'>
                      Password
                    </label>
                    <button className='p-2 -mr-2' type='reset'>
                      <span className='text-sm text-sky-500'>Forgot your password ?</span>
                    </button>
                  </div>
                  <input
                    type='password'
                    name='pwd'
                    id='pwd'
                    className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full py-3 px-6 rounded-md bg-sky-600
                                        focus:bg-sky-700 active:bg-sky-500'
                >
                  <span className='text-white'>Continue</span>
                </button>

                <p className='border-t pt-6 text-sm'>
                  Don&apos;t have an account ?
                  <a href='' className='text-sky-500'>
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
