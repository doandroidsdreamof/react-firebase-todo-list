import React, { useState, FC, useContext } from 'react'
import { getAuth } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'

interface ChildrenProps {
  TodoHead: React.ReactNode;
  TextInput: React.ReactNode;
  AddButton: React.ReactNode;
  LogOutButton: React.ReactNode;



}

const TodoWrapper: FC<ChildrenProps> = (props) => {
  const auth = getAuth()
  const user = useContext(AuthContext)

  console.log(props)

  return (
    <div className={user === null ? 'hidden' : 'bg-bg-color h-screen  '}>
      <div className='flex flex-col justify-center p-5 items-center gap-y-8'>
        {props.TodoHead}
        <div className='flex flex-row gap-3'>
          {props.TextInput}
          {props.AddButton}
        </div>
      </div>
      <div className='w-fit h-fit flex  absolute bottom-5 left-5 '>
        {props.LogOutButton}
        </div>
    </div>
  )
}

export default TodoWrapper
