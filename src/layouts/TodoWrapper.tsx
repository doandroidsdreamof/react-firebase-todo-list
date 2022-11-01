import React, { useState, useEffect, useContext, FC, FormEvent, MouseEvent } from 'react'
import { getAuth } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { TodoWrapperChildren } from '../types/Todos'
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
    <div className={user === null ? 'hidden ' : 'absolute w-screen bg-bg-color min-h-screen  '}>
      <div className='flex flex-col  justify-center p-5 items-center gap-y-8'>
        {props.TodoHead}
        <div className=' w-fit justify-center flex flex-col   '>
          {props.TextInput}
      
            {props.TodosData?.map((todos, index) => (
              <>
                <p className='text-white' key={index}>{todos.todo}</p>
              </>
            ))}
   
        </div>
      </div>
      <div className='w-fit h-fit flex  bottom-5  left-5 '>
        {props.LogOutButton}
      </div>
    </div>
  )
}

export default TodoWrapper
