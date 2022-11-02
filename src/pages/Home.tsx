import React, { FC, FormEvent, MouseEvent,useContext, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore'
import { type } from 'os'

import LogOutButton from '../components/Login/LogOutButton'
import AddButton from '../components/todo/AddButton'
import TextInput from '../components/todo/TextInput'
import TodoHead from '../components/todo/TodoHead'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import TodoWrapper from '../layouts/TodoWrapper'
import { Todosdata } from '../types/Todos'

const Home: FC = () => {
  const user = useContext(AuthContext)
  const auth = getAuth()
  const [todos, setTodos] = useState<Todosdata[]>([{}])
  const todosArr: Array<Todosdata> = []
  const [logic, setLogic] = useState<boolean>(false) // to obverse databae changes

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
    todosArr.shift()
    setTodos(
      todosArr.sort(function (a, b): any {
        return a.date.localeCompare(b.date)
      }) 
    )
  }
  console.log(logic)




  return (
    <>
      <TodoWrapper
        TodoHead={<TodoHead />}
        AddButton={<AddButton />}
        LogOutButton={<LogOutButton />}
        TextInput={<TextInput logic={(e: boolean) => setLogic(!logic)} />}
        TodosData={todos}
        logic={(e) => setLogic(e)}
      />
    </>
  )
}

export default Home
