import React, { useState, useEffect, useContext, FC, FormEvent, MouseEvent } from 'react'
import { getAuth } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { TodoWrapperChildren } from '../types/Todos'
import TodoListBlocks from '../components/todo/TodoListBlocks'
import {
  doc,
  setDoc,
  Timestamp,
  addDoc,
  collection,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

const TodoWrapper: FC<TodoWrapperChildren> = (props) => {
  const auth = getAuth()
  const user = useContext(AuthContext)

  return (
    <div className={user === null ? 'hidden ' : 'px-4 md:px-20 absolute w-onehundred overflow-hidden bg-bg-color min-h-screen  '}>
      <div className='flex flex-col  justify-center p-5 items-center gap-y-8'>
        {props.TodoHead}
        <div className=' w-full justify-center flex flex-col overflow-x-hidden  '>
          {props.TextInput}
          <div className='flex flex-col-reverse  w-full'>
            {props.TodosData?.map((todos, index) => (
              <>
                <TodoListBlocks>
                  <p className='text-white font-medium font-roboto p-4 ' key={index}>
                    {todos.todo}
                  </p>
                </TodoListBlocks>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className='w-fit h-fit flex  mt-auto absolute bottom-5  left-5 '>
        {props.LogOutButton}
      </div>
    </div>
  )
}

export default TodoWrapper
