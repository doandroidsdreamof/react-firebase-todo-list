import React, { FC, FormEvent, MouseEvent, useContext, useEffect, useMemo, useState } from 'react'
import { getAuth } from 'firebase/auth'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore'

import DeleteButton from '../components/todo/DeleteButton'
import EditButton from '../components/todo/EditButton'
import EditModal from '../components/todo/EditModal'
import ModalDelete from '../components/todo/ModalDelete'
import TodoListBlocks from '../components/todo/TodoListBlocks'
import TopNavBar from '../components/todo/TopNavBar'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { singleTodo, TodoWrapperChildren } from '../types/Todos'

const TodoWrapper: FC<TodoWrapperChildren> = (props) => {
  const auth = getAuth()
  const user = useContext(AuthContext)
  const [modal, setModal] = useState<boolean>(false)
  const [singleTodo, passSingleTodo] = useState<singleTodo>({ todo: '', id: '' })

  const handleSingleTodo = async (e) => {
    passSingleTodo({ todo: e.todo, id: e.id })
  }

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'Todo', id))
    props.logic(false)
  }

  const memeTodos = React.useMemo(
    () =>
      props.TodosData?.map((todos) => {
        return (
          <>
            <TodoListBlocks>
              <span
                className='text-white inline font-medium text-ellipsis truncate  font-roboto p-4  w-ninty '
                key={todos.id}
              >
                {todos.todo}
              </span>
              <button>
                <EditButton />
              </button>
              <button onClick={(e) => handleSingleTodo(todos)}>
                <DeleteButton openModal={(e) => setModal(e)} />
              </button>
            </TodoListBlocks>
          </>
        )
      }),
    [props.TodosData],
  )

  return (
    <div
      className={
        user === null
          ? 'hidden '
          : ' px-5 md:px-20 lg:px-48 absolute w-onehundred overflow-hidden bg-bg-color min-h-screen  '
      }
    >
      <TopNavBar />
      <div className='flex flex-col  justify-center   items-center gap-y-8'>
        {props.TodoHead}
        <div className=' w-onehundred justify-center flex  flex-col overflow-x-hidden  '>
          {props.TextInput}
          <ModalDelete
            deleteTodo={(e) => deleteTodo(e)}
            singleTodo={singleTodo}
            open={modal}
            closeModal={(e) => setModal(e)}
          />
          <EditModal />
          <div className='flex flex-col-reverse items-center mb-4  w-onehundred justify-center'>
            {memeTodos}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoWrapper
