import React, { FC } from 'react'

interface LoginRegisterProps {
  children: React.ReactNode
  state: string
}

const FormWrapper: FC<LoginRegisterProps> = (props) => {

  return (
    <div className=' h-screen w-screen border-2 border-black  overflow-hidden flex justify-center bg-gray-200'>
      {props.state == 'login' ? (
        <div className='container m-auto    text-gray-500 px-6  md:px-12 xl:px-40'>
          {props.children}
        </div>
      ) : props.state == 'register' ? (
        <div className='relative container m-auto p-5 lg:p-2   text-gray-500 '>
          {props.children}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FormWrapper
