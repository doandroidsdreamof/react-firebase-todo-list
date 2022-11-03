import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'

const DeleteButton = (props: any) => {

  const handleClickOpen = (e) => {
    props.openModal(true)
    props.onClick()
  }
  return (

      <button onClick={handleClickOpen}  className=' rounded-full m-auto mr-2 border h-fit flex items-center focus:outline-none bg-input-card font-medium text-sm  p-3 text-white border-[#3E5060] hover:bg-gray-700 hover:border-[#80BFFF]  focus:ring-gray-700'>
        <AiTwotoneDelete className='   ease-in duration-200' size={18} />
      </button>

  )
}

export default DeleteButton
