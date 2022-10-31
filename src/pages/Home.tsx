import React, { useState, useEffect, useContext, FC, FormEvent,MouseEvent  } from 'react'
import { AuthContext } from '../context/AuthContext'
import LogOutButton from '../components/Login/LogOutButton'
import { getAuth } from 'firebase/auth'
import TodoHead from '../components/todo/TodoHead'
import TextInput from '../components/todo/TextInput'
import AddButton from '../components/todo/AddButton'

interface Todo {
  input: string

}


const Home: FC = () => {
  const user = useContext(AuthContext)
  const auth = getAuth()
  const [input,getInput] = useState("")


console.log(input)

  // const handleLastName = async (e: string) => {
  //   getInput(data=>({
  //     ...data,
  //       lastName: e
  //   }))
  // }

  return (
    <div className={user === null ? 'hidden' : 'bg-bg-color h-screen  '}>
      <div className='flex flex-col justify-center p-5 items-center gap-y-8'>
        <TodoHead />
        <div className='flex flex-row gap-3'>
          <TextInput getValues={(e: string) => getInput(e)} />
          <AddButton />
        </div>



      </div>
      <div className='w-fit h-fit flex  absolute bottom-5 left-5 '>
        <LogOutButton />
      </div>
    </div>
  )
}

export default Home
