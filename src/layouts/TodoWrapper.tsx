import React, { FC, useContext, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import {
  deleteDoc,
  doc,
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
  const [editModal, setEditModal] = useState<boolean>(false)
  const [update, watchUpdate] = useState<boolean>(false)
  const [singleTodo, passSingleTodo] = useState<singleTodo>({ todo: '', id: '' })

  useEffect(() => {
    props.logic()
  }, [update])

  const handleSingleTodo = async (e) => {
    await passSingleTodo({ todo: e.todo, id: e.id })
    props.logic()
  }

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'Todo', id))
    props.logic()
  }

  const handleSelect = (dataName: any) => {
    console.log(
      '🚀 ~ file: TodoWrapper.tsx ~ line 49 ~ handleSelect ~ dataName',
      dataName.completed,
    )
    const taskDocRef = doc(db, 'Todo', dataName?.id)
    try {
      updateDoc(taskDocRef, {
        completed: dataName.completed == false ? true : false,
      })
      props.logic()

    } catch (err) {
      console.log(err)
    }
  }
  const todoTextStyle =
    'text-white inline  font-medium z-50 cursor-pointer text-ellipsis truncate  font-roboto p-4  w-ninty'
  const memeTodos = React.useMemo(
    () =>
      props.TodosData?.map((todos, index) => {
        return (
          <>
            <TodoListBlocks>
              <span
                onClick={(e) => handleSelect(todos)}
                className={todos.completed ? `line-through ${todoTextStyle}` : ` ${todoTextStyle}`}
              >
                {todos.todo}
              </span>
              <div className=' h-full  flex m-auto flex-row gap-x-1'>
                <EditButton
                  onClick={(e) => handleSingleTodo(todos)}
                  editModal={(e) => setEditModal(e)}
                />
                <DeleteButton
                  onClick={(e) => handleSingleTodo(todos)}
                  openModal={(e) => setModal(e)}
                />
              </div>
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
          <EditModal
            singleTodo={singleTodo}
            openEdit={editModal}
            closeEditModal={(e) => setEditModal(e)}
            observer={(e) => watchUpdate(!update)}
          />
          <div className=' flex flex-col-reverse items-center mb-4  w-onehundred justify-center'>
            {memeTodos}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoWrapper
