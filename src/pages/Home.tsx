import React, { useState, useEffect, useContext, FC, FormEvent, MouseEvent } from 'react'
import { AuthContext } from '../context/AuthContext'
import LogOutButton from '../components/Login/LogOutButton'
import { getAuth } from 'firebase/auth'
import TodoHead from '../components/todo/TodoHead'
import TextInput from '../components/todo/TextInput'
import AddButton from '../components/todo/AddButton'
import TodoWrapper from '../layouts/TodoWrapper'

interface Todo {
  input: string
}

const Home: FC = () => {
  const user = useContext(AuthContext)
  const auth = getAuth()
  const [input, getInput] = useState('')

  console.log(input)

  // const handleLastName = async (e: string) => {
  //   getInput(data=>({
  //     ...data,
  //       lastName: e
  //   }))
  // }

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
