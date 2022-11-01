import React from 'react'
import { MdOutlineAdd } from 'react-icons/md';

const AddButton = () => {
  return (
    <>
      <button
        type='submit'
        className='  border   flex  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  text-white border-[#3E5060] hover:bg-gray-700 hover:border-[#80BFFF]  focus:ring-gray-700'
      >
        <MdOutlineAdd className='hover:rotate-90   ease-in duration-200' size={25} />
      </button>
    </>
  )
}

export default AddButton
