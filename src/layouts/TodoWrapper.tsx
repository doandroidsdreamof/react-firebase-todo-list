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
    <div className={user === null ? 'hidden ' : ' px-5 md:px-20 lg:px-48 absolute w-onehundred overflow-hidden bg-bg-color min-h-screen  '}>
      <div className='flex flex-col  justify-center   items-center gap-y-8'>
        {props.TodoHead}
        <div className=' w-onehundred justify-center flex  flex-col overflow-x-hidden  '>
          {props.TextInput}
          <div className='flex flex-col-reverse items-center   w-onehundred justify-center'>
            {props.TodosData?.map((todos, index) => (
              <>
                <TodoListBlocks>
                  <p className='text-white font-medium font-roboto p-4 line-clamp-1  ' key={index}>
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
