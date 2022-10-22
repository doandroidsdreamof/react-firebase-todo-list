import React from 'react'

const RegisterForm = () => {
  return (
    <>
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

      <label htmlFor='pwd' className='text-gray-700 mb-2 hidden'></label>
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
    </>
  )
}

export default RegisterForm
