import React, { useState, useEffect, useContext, FC, FormEvent, MouseEvent } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase'
import { Todosdata } from '../types/Todos'
import {
  doc,
  setDoc,
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
  orderBy,
  
} from 'firebase/firestore'
import LogOutButton from '../components/Login/LogOutButton'
import TodoHead from '../components/todo/TodoHead'
import TextInput from '../components/todo/TextInput'
import AddButton from '../components/todo/AddButton'
import TodoWrapper from '../layouts/TodoWrapper'
import { type } from 'os'

const Home: FC = () => {
  const user = useContext(AuthContext)
  const auth = getAuth()
  const [todos, setTodos] = useState<Todosdata[]>([{ todo: '', completed: false, id: '' }])
  const todosArr: Array<Todosdata> = [{ todo: '', completed: false, id: '' }]
  const [logic,setLogic] = useState<boolean>(false) // to obverse databae changes

  useEffect(() => {
    getData()
  }, [logic])

  async function getData() {
    const querySnapshot = await getDocs(collection(db, 'Todo'))
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      todosArr.push({ id: doc.id, ...doc.data() })
      setLogic(true)
    })
    setTodos(todosArr)
  }

  // console.log('here *******', todos)

  

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <>
      <TodoWrapper
        TodoHead={<TodoHead />}
        AddButton={<AddButton />}
        LogOutButton={<LogOutButton />}
        TextInput={<TextInput logic={(e: boolean)=> setLogic(!logic)} />}
        TodosData={todos}
      />
    </>
  )
}

export default Home
