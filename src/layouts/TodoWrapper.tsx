import React, { useState, useEffect, useContext, FC, FormEvent, MouseEvent } from 'react'
import { getAuth } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { TodoWrapperChildren } from '../types/Todos'
import TodoListBlocks from '../components/todo/TodoListBlocks'
import EditButton from '../components/todo/EditButton'
import DeleteButton from '../components/todo/DeleteButton'
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
import ModalDelete from '../components/todo/ModalDelete'

const TodoWrapper: FC<TodoWrapperChildren> = (props) => {
  const auth = getAuth()
  const user = useContext(AuthContext)
  const [modal, setModal] = useState<boolean>(false)

  return (
    <div
      className={
        user === null
          ? 'hidden '
          : ' px-5 md:px-20 lg:px-48 absolute w-onehundred overflow-hidden bg-bg-color min-h-screen  '
      }
    >
      <div className='flex flex-col  justify-center   items-center gap-y-8'>
        {props.TodoHead}
        <div className=' w-onehundred justify-center flex  flex-col overflow-x-hidden  '>
          {props.TextInput}
          <ModalDelete open={modal} closeModal={(e) => setModal(e)} />

          <div className='flex flex-col-reverse items-center mb-4  w-onehundred justify-center'>
            {props.TodosData?.map((todos, index) => (
              <>
                <TodoListBlocks>
                  <span
                    className='text-white inline font-medium text-ellipsis truncate  font-roboto p-4  w-ninty '
                    key={index}
                  >
                    {todos.todo}
                  </span>
                  <EditButton />
                  <DeleteButton openModal={(e) => setModal(e)} />
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
