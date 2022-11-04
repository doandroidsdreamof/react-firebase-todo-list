import React, { useContext, useEffect,useState } from 'react'
import { getAuth } from 'firebase/auth'
import {
  collection,
  getDocs,
} from 'firebase/firestore'

import LogOutButton from '../components/Login/LogOutButton'
import PieChart from '../components/profile/PieChart'
import TopNavBar from '../components/todo/TopNavBar'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import {completedTodos} from '../types/Todos'

const Profile = () => {
  const user = useContext(AuthContext)
  const auth = getAuth()
  const completedData: Array<completedTodos>= [];
  const [completedValue, getCompletedValue] = useState<completedTodos[]>([{}])
  const [uncompletedValue,getUncompletedValue] = useState()

  useEffect(() => {
    getData()
  }, [])

  function getUser() {
    if (user !== null) {
      // console.log(user?.displayName)
    }
  }
  async function getData() {
    const querySnapshot = await getDocs(collection(db, 'Todo'))
    querySnapshot.forEach((doc) => {
      completedData.push({ id: doc.id, ...doc.data() })

    })
    getCompletedValue(
      completedData
    )
    console.log(completedData)
  }

  return (
    <div className={user === null ? 'hidden ' : 'bg-bg-color'}>
      <TopNavBar />
      <div className=' left-5  relative'>
        <h1 className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
            Hello, Welcome Todos
          </span>
          {' ' + user?.displayName}.
        </h1>
        <p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
          You can see your todos stats.
        </p>
      </div>
      <div className=' lg:w-1/2 mx-auto'>
      <PieChart />
      </div>
      <div className='w-fit h-fit flex  mt-auto absolute bottom-5  left-5 '>
        <LogOutButton />
      </div>
    </div>
  )
}

export default Profile
