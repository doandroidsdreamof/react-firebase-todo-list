import React, { useState, useEffect, useContext, FC, FormEvent, MouseEvent } from 'react'
import { getAuth } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { Todosdata, TodoWrapperChildren } from '../types/Todos'
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
  const [todos, setTodos]: any[] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'Todo'))
    const todosArr: Array<Todosdata> = [{ todo: '', completed: false, id: '' }]
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id })
      })
      setTodos([todosArr])
    })
    return () => unsubscribe();
  }, [])
console.log(todos)
  return (
    <div className={user === null ? 'hidden' : 'bg-bg-color h-screen min-h-fit  '}>
      <div className='flex flex-col  justify-center p-5 items-center gap-y-8'>
        {props.TodoHead}
        <div className=' w-fit justify-center flex flex-col  '>
          {props.TextInput}
          <div className=' border-white w-full'>


          </div>
        </div>
      </div>
      <div className='w-fit h-fit flex absolute bottom-5 left-5 flex-col-reverse'>
        {props.LogOutButton}
      </div>
    </div>
  )
}

export default TodoWrapper
