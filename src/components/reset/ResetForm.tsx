import React, { useState,MouseEvent } from 'react'
import EmailValidError from '../Login/EmailValidError'
import { getAuth,sendPasswordResetEmail  } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const ResetForm = () => {
  const [email, setEmail] = useState('')
  const [alertBoxMail, setAlertBoxMail] = useState(false)
  const auth = getAuth()
  const navigate = useNavigate()

  function validateEmail(value: string) {
    let error
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!value || value.length === 0) {
      error = 'Required'
      setAlertBoxMail(false)
    } else if (!emailValidation.test(value)) {
      error = 'Invalid email address'
      setAlertBoxMail(true)
    } else if (emailValidation.test(value) || value.length == 0) {
      setEmail(value)
      setAlertBoxMail(false)
    }

    return error
  }


  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    if(alertBoxMail === false){
      await sendPasswordResetEmail(auth, email);
      navigate('/login')

    }
    
  }



  return (
    <form className='mt-10 space-y-8 '>
      <div>
        <div className='relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
          <input
            onChange={(e) => validateEmail(e.target.value)}
            required
            type='email'
            placeholder='Email address'
            className='w-full bg-transparent pb-3  border-b border-gray-300 outline-none  transition'
          />
          <EmailValidError validError={alertBoxMail} />
        </div>
      </div>
      <div>
        <button onClick={(e) => handleSubmit(e)} className='w-full rounded-full bg-sky-500  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800'>
          <span className='text-base font-semibold text-white '>Send Email</span>
        </button>
      </div>
    </form>
  )
}

export default ResetForm
