import React, { MouseEvent,useContext, useEffect, useState } from 'react'
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'
import GoogleButton from '../common/GoogleButton'

import EmailValidError from './EmailValidError'

interface Values {
  password: string
  email: string
}
const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alertBoxMail, setAlertBoxMail] = useState(false)
  const navigate = useNavigate()
  const auth = getAuth()
  const user = useContext(AuthContext)
  const loginPage = 'login'


  useEffect(()=>{

  },[])



  function validateEmail(value: string) {
    let error
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!value || value.length === 0) {
      error = 'Required'
      setAlertBoxMail(false)
    }
    else if (!emailValidation.test(value)) {
      error = 'Invalid email address'
      setAlertBoxMail(true)
    } else if (emailValidation.test(value) || value.length == 0) {
      setEmail(value)
      setAlertBoxMail(false)

    }

    return error
  }



  const handleFormEvent = (e: MouseEvent<HTMLButtonElement>) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          navigate('/home')
          //  console.log('başarılı =>', user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log('başarısız =>', errorMessage)
        })

  }



  return (
    <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        JSON.stringify(values, null, 2)
        setSubmitting(false)
      }}
    >
      <Form>
        <Field
          id='email'
          name='email'
          placeholder='email'
          type='email'
          required
          validate={validateEmail}
          className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
invalid:ring-2 '
        />
        <EmailValidError validError={alertBoxMail} />
        <label htmlFor='password'></label>
        <input
          id='password'
          name='password'
          placeholder='password'
          type='password'
          required
          minLength={8}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          className='block w-full px-4 py-3 mt-8  rounded-md border border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
invalid:ring-2 '
        />
        <label htmlFor='email'> </label>
        <div className=' flex w-full mt-4  flex-row h-11 text-center justify-center'>
        <GoogleButton page={loginPage} />
        </div>

        <button
          className='w-full  py-3 px-6 rounded-md bg-sky-600
                          focus:bg-sky-700 active:bg-sky-500'
          onClick={handleFormEvent}
          type='button'
        >
          <span className='text-white'>Continue</span>
        </button>
      </Form>
    </Formik>
  )
}

export default LoginForm
