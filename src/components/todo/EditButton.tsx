import React from 'react'
import { MdModeEditOutline } from 'react-icons/md'

const EditButton = () => {
  return (
    <button className=' rounded-full m-auto border ml-3 h-fit flex items-center focus:outline-none bg-input-card font-medium text-sm  p-3 text-white border-[#3E5060] hover:bg-gray-700 hover:border-[#80BFFF]  focus:ring-gray-700'>
      <MdModeEditOutline className='   ease-in duration-200' size={18} />
    </button>
  )
}

export default EditButton
