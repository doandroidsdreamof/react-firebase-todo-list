import React, {MouseEvent, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth,updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

import EmailValidError from '../Login/EmailValidError'


interface User {
  name: string
  lastName: string
  email: string
  password: string
}

const RegisterForm = () => {
  const [alertBoxMail, setAlertBoxMail] = useState(false)
  const auth = getAuth();
  const navigate = useNavigate()
  const [data, setData] = React.useState<User>({
    name: '',
    lastName: '',
    email: '',
    password: '',
  })

  function validateEmail(value: string) {
    let error
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!value || value.length === 0) {
      error = 'Required'
      setAlertBoxMail(false)
    } else if (!emailValidation.test(value)) {
      error = 'Invalid email address'
      setAlertBoxMail(true)
      setData(data=>({
        ...data,
          email: ''
      }))
    } else if (emailValidation.test(value) || value.length == 0) {
      setData(data=>({
        ...data,
          email: value
      }))
      setAlertBoxMail(false)
    }

    return error
  }

  const handlePassword = async (e: any) => {
    setData(data=>({
      ...data,
        password: e
    }))

  }
  const handleName = async (e: string) => {
    setData(data=>({
      ...data,
        name: e
    }))
  }
  const handleLastName = async (e: string) => {
    setData(data=>({
      ...data,
        lastName: e
    }))
  }


const handleSubmit = (e: MouseEvent<HTMLButtonElement>) =>{
  e.preventDefault()
  createUserWithEmailAndPassword(auth, data.email, data.password)
  .then(async (res) => {
    const user = res.user;
    await updateProfile(user, {
      displayName: data.name,
    });
    navigate('/home')
  })
  .catch((error) => {
    console.log('register error =>', error)


  });

}




  return (
    <>
      <div className='flex gap-x-3 space-y-5  flex-col lg:flex-row '>
        <label htmlFor='firstName' className='hidden'></label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='First Name'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleName(e.target.value)}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleLastName(e.target.value)}
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
        onChange={(e) => validateEmail(e.target.value)}
        className=' px-4 w-full py-3 rounded-md border  border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
 '
      />
      <div className={alertBoxMail ? 'flex  h-4 ' : 'hidden'}>
        <EmailValidError validError={alertBoxMail} />
      </div>
      <label htmlFor='pwd' className='text-gray-700 mb-2 hidden'></label>
      <input
        type='password'
        name='pwd'
        id='pwd'
        required
        placeholder='password'
        minLength={8}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePassword(e.target.value)}
        className='block w-full px-4   py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                  focus:ring-2 focus:ring-sky-300 focus:outline-none
                                  invalid:ring-2 '
      />
      <button
        className='w-full py-3 px-6 rounded-md bg-sky-600
                focus:bg-sky-700 active:bg-sky-500'
                onClick={(e) => handleSubmit(e)}
      >
        <span className='text-white'>Continue</span>
      </button>
    </>
  )
}

export default RegisterForm
