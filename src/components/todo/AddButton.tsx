import React from 'react'
import { MdOutlineAdd } from 'react-icons/md';

const AddButton = () => {
  return (
    <>
      <button
        type='submit'
        className='  border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-bg-second dark:text-white dark:border-[#3E5060] dark:hover:bg-gray-700 dark:hover:border-[#80BFFF] dark:hover:border-gray-600 dark:focus:ring-gray-700'
      >
        <MdOutlineAdd className='hover:rotate-90 ease-in duration-200' size={25} />
      </button>
    </>
  )
}

export default AddButton
