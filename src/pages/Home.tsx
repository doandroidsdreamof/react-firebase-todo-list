import React, { useState, useEffect, useContext, FC, FormEvent, MouseEvent } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase'
import { doc, setDoc,Timestamp } from "firebase/firestore"; 
import LogOutButton from '../components/Login/LogOutButton'
import TodoHead from '../components/todo/TodoHead'
import TextInput from '../components/todo/TextInput'
import AddButton from '../components/todo/AddButton'
import TodoWrapper from '../layouts/TodoWrapper'

type Todo = {
  id: string;
  title: string;
  done: boolean;
}


const Home: FC = () => {
  const [input, getInput] = useState('')
  const [todos, setTodos] = useState([])
console.log(input)

  console.log(db)

  return (
    <>
      <TodoWrapper
        TodoHead={<TodoHead />}
        AddButton={<AddButton />}
        LogOutButton={<LogOutButton />}
        TextInput={<TextInput getValues={(e: string) => getInput(e)} />}
      />
    </>
  )
}

export default Home
