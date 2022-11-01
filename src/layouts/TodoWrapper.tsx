import React, { useState, FC, useContext } from 'react'
import { getAuth } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'

interface ChildrenProps {
  TodoHead: React.ReactNode;
  TextInput: React.ReactNode;
  AddButton: React.ReactNode;
  LogOutButton: React.ReactNode;
  todos: [ todo: string, completed: boolean, id: string];



}

const TodoWrapper: FC<ChildrenProps> = (props) => {
  const auth = getAuth()
  const user = useContext(AuthContext)
  console.log('here =>', props.todos)


  return (
    <div className={user === null ? 'hidden' : 'bg-bg-color h-screen  '}>
      <div className='flex flex-col  justify-center p-5 items-center gap-y-8'>
        {props.TodoHead}
       <div className=' w-fit justify-center flex flex-col  '>
       {props.TextInput}
       <div className=" border-white w-full"></div>
       </div>
      </div>
      <div className='w-fit h-fit flex   absolute bottom-5 left-5 '>
        {props.LogOutButton}
        </div>
     


    </div>
  )
}

export default TodoWrapper
