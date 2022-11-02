import React from 'react'

import ResetForm from '../components/reset/ResetForm'

const PasswordReset = () => {
  return (
    <div className='m-auto container px-12 sm:px-0 mx-auto'>
      <div className='mx-auto h-full md:w-10/12 lg:w-6/12'>
        <div className='m-auto  py-12 sm:p-20 xl:w-10/12'>
          <div className='mt-12 rounded-3xl border bg-gray-50 -mx-6 sm:-mx-10 p-8 sm:p-10'>
            <ResetForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordReset
