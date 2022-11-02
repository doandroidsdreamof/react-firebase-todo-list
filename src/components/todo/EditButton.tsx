import React from 'react'
import {MdModeEditOutline} from 'react-icons/md'

const EditButton = () => {
  return (
    <button className='  border   flex  focus:outline-none bg-todo font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  text-white border-[#3E5060] hover:bg-gray-700 hover:border-[#80BFFF]  focus:ring-gray-700'>
        <MdModeEditOutline className='   ease-in duration-200' size={25} />


    </button>
  )
}

export default EditButton
