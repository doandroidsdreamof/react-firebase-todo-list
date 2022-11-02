import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'

const DeleteButton = () => {
  return (
    <>
      <button className='  border   flex  focus:outline-none bg-todo font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  text-white border-[#3E5060] hover:bg-gray-700 hover:border-[#80BFFF]  focus:ring-gray-700'>
        <AiTwotoneDelete className='   ease-in duration-200' size={25} />
      </button>
    </>
  )
}

export default DeleteButton
