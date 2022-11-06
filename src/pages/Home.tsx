import React, { FC, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'

import AddButton from '../components/todo/AddButton'
import TextInput from '../components/todo/TextInput'
import TodoHead from '../components/todo/TodoHead'
import { db } from '../firebase'
import TodoWrapper from '../layouts/TodoWrapper'
import { Todosdata } from '../types/Todos'

const Home: FC = () => {
  const auth = getAuth()
  const [todos, setTodos] = useState<Todosdata[]>([])
  const todosArr: Array<Todosdata> = []
  const [logic, setLogic] = useState<boolean>(false) // to obverse database changes
  const [render, setRender] = useState<boolean>(false)
  const user: any = auth.currentUser
  const todosRef: any = collection(db, 'Todo')

  useEffect(() => {
    getData()

  }, [logic])

  async function getData() {
    const q = query(collection(db, 'Todo'), where('owner', '==', user.uid))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      todosArr.push({ id: doc.id, ...doc.data() })
    })
    setRender(true)

    setTodos(
      todosArr.sort(function (a, b): any {
        return a.date.localeCompare(b.date)
      }),
    )
  }

  return (
    <>
      <TodoWrapper
        TodoHead={<TodoHead />}
        AddButton={<AddButton />}
        TextInput={<TextInput logic={(e: boolean) => setLogic(!logic)} />}
        TodosData={todos}
        logic={(e: boolean) => setLogic(!logic)}
      />
    </>
  )
}

export default Home
