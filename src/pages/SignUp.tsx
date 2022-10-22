import React, { useState, useEffect,FC } from 'react'
import { Link } from 'react-router-dom'
import registerImage from '../assets/image/register.jpg'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import * as Yup from 'yup';
import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
  } from 'firebase/auth';


 const SignUp: FC = () => {
    const [userData, setUserData] = useState(undefined); 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


  return (
    <div className="relative container m-auto   text-gray-500 ">
    <div className="m-auto space-y-8 md:w-8/12  max-h-fit  lg:w-eighty ">
        <div className="rounded-xl  bg-opacity-75  backdrop-blur-2xl bg-white   shadow-xl h">
            <div className="lg:grid lg:grid-cols-2 ">
                <div className="rounded-lg lg:block " hidden>
                    <img
                        src={registerImage}
                        className="rounded-l-xl object-cover h-onehundred"
                        alt="register-image"
                    />
                </div>
                <div className="p-6 sm:p-16 ">
                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                        Create Account
                    </h2>
                    <form  className="space-y-5 ">
                            <div className="flex gap-x-3 space-y-5  flex-col lg:flex-row ">
                                <label htmlFor="firstName" className="hidden"></label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    required
                                    className="block w-full lg:w-1/2 px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
 "
                                />
                                <label htmlFor="lastName" className="hidden"></label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                    required
                                    className="block w-full  lg:w-1/2  px-4 py-3 rounded-md border  border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
 "
                                />
                            </div>
                     
                            <label htmlFor="email" className="text-gray-700 hidden"></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email"
                                required
                                className=" px-4 w-full py-3 rounded-md border  border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
 "
                            />
                   
                    
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="pwd" className="text-gray-700 mb-2 hidden"></label>
                            </div>
                            <input
                                type="password"
                                name="pwd"
                                id="pwd"
                                placeholder="password"
                                minLength={8}
                                className="block w-full px-4   py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                  focus:ring-2 focus:ring-sky-300 focus:outline-none
                                  invalid:ring-2 "
                            />
                            <div className=" flex w-full mt-4 flex-row h-11 text-center justify-center">
                                <button
                                    type="button"
                                    className="text-white  justify-center   text-xs w-full bg-[#3f4d5f] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md   text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/65 mr-2 mb-2"
                                >
                                    <svg
                                        className="mr-2 -ml-1 w-4 h-4"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="github"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                        ></path>
                                    </svg>
                                    Sign up with Github
                                </button>
                                <button
                                    type="button"
                                    className="text-white justify-center  text-xs w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-md   text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mb-2"
                                >
                                    <svg
                                        className="mr-2 -ml-1 w-4 h-4"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="google"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 488 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                        ></path>
                                    </svg>
                                    Sign up with Google
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-md bg-sky-600
                              focus:bg-sky-700 active:bg-sky-500"
                        >
                            <span className="text-white">Continue</span>
                        </button>

                        <p className="border-t pt-6 text-sm">
                            You already have an account ?
                            <Link to="/login" className="text-sky-500  ml-2">
                                Sign in
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


export default SignUp