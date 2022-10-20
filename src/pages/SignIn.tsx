import React, { useState, useEffect, FC, useContext } from 'react'
import loginImage from '../assets/image/login2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import LoginAlert from '../components/LoginAlert'

const SignIn: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [alertBox, setAlertBox] = useState(false)
  const [alertBoxMail, setAlertBoxMail] = useState(false)
  const {dispatch}: any = useContext(AuthContext) 
   const navigate = useNavigate()


  useEffect(() => {  }, [error, alertBoxMail,alertBox])

   async function validate(e: any) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e) && e.length > 0) {
      setAlertBoxMail(true)
    } else {
      setAlertBoxMail(false)
      setEmail(e)
    }
  }
  const handleLogin =  (e: any) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user: any = userCredential.user;
      dispatch({type:'LOGIN', payload:user})
   
      console.log('here =>', user)
      navigate('/')

    })
    .catch((error) => {
      setAlertBox(true)
      setError(true)


    });
};





  //mutlukuytuoglu@gmail.com

  return (
    <div className='container m-auto    text-gray-500 px-6  md:px-12 xl:px-40'>
      <LoginAlert alertBox={alertBox} />
      <div className='m-auto space-y-8   md:w-8/12 lg:w-onehundred'>
        <div className='rounded-xl  bg-opacity-50 backdrop-blur-2xl bg-white shadow-md'>
          <div className='lg:grid lg:grid-cols-2'>
            <div className='rounded-lg lg:block' hidden>
              <img
                src={loginImage}
                className='rounded-l-xl shadow-md object-cover h-onehundred'
                alt='login-image'
              />
            </div>
            <div className='p-6 sm:p-16'>
              <h2 className='mb-8 text-2xl text-cyan-900 font-bold'>Sign in to your account</h2>
              <form onSubmit={handleLogin} className='space-y-8'>
                <div className='space-y-2'>
                  <label htmlFor='email' className='text-gray-700'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    required={true}
                    onChange={(e) => validate(e.target.value)}
                    className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 '
                  />
                  {alertBoxMail ? (
                    <span className='text-red-600 font-roboto text-normal absolute translate-y-1 m-0 flex'>
                      {'this email address is invalid'}
                    </span>
                  ) : null}
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
                    required={true}
                    minLength={8}
                    onChange={(e) => setPassword(e.target.value)}
                    className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 '
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
                  <Link to='/register' className='text-sky-500 ml-2'>
                    Sign up
                  </Link>
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
