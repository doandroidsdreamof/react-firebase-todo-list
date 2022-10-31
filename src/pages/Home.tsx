import React, { useState, useEffect, useContext, FC, FormEvent, MouseEvent } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase'
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
import LogOutButton from '../components/Login/LogOutButton'
import TodoHead from '../components/todo/TodoHead'
import TextInput from '../components/todo/TextInput'
import AddButton from '../components/todo/AddButton'
import TodoWrapper from '../layouts/TodoWrapper'
import { type } from 'os'

type Todo = {
  name: string
  title: string
  done: boolean
}

const Home: FC = () => {
  const [input, getInput] = useState('')
  const [todos, setTodos]: any[] = useState([])
  const user: any = useContext(AuthContext)
  const auth: any = getAuth()


  useEffect(() => {

    const q = query(collection(db, 'Todo'))
    const todosArr:  any[] = []
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArr)
    })

  }, [])

  const addTodo = async () => {
    if (input === '') {
      return
    }
    try {
      const docRef = await addDoc(collection(db, 'Todo'), {
        todo: input,
        completed: false,
      })

      // console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
  console.log(todos)

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <>
      <TodoWrapper
        TodoHead={<TodoHead />}
        AddButton={<AddButton />}
        LogOutButton={<LogOutButton />}
        TextInput={<TextInput addTodo={addTodo} getValues={(e: string) => getInput(e)} />}
      />
    </>
  )
}

export default Home
