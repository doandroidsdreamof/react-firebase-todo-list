import React, { useState, useEffect, useContext, FC } from 'react'
import { AuthContext } from '../context/AuthContext'
import LogOutButton from '../components/Login/LogOutButton'
import { getAuth } from 'firebase/auth'
import TodoHead from '../components/todo/TodoHead'
import TextInput from '../components/todo/TextInput'
import AddButton from '../components/todo/AddButton'

const Home: FC = () => {
  const user = useContext(AuthContext)
  const auth = getAuth()

  //  console.log('home current user', user)

  return (
    <div className={user === null ? 'hidden' : 'bg-bg-color h-screen  '}>
      <div className='flex flex-col justify-center p-5 items-center gap-y-8'>
        <TodoHead />
        <div className='flex flex-row gap-3'>
          <TextInput />
          <AddButton />
        </div>
      </div>
      <div className='w-fit h-fit flex  absolute bottom-5 left-5 '>
        <LogOutButton />
      </div>
    </div>
  )
}

export default Home
