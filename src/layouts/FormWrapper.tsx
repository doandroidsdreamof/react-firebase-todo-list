import React, { FC } from 'react'

import { LoginRegisterProps } from '../types/Todos'

const FormWrapper: FC<LoginRegisterProps> = (props) => {

  return (
    <div className={'h-screen w-screen   overflow-hidden flex justify-center bg-bg-color'}>
      {props.state == 'login' ? (
        <div className='container m-auto    text-gray-300 px-6  md:px-12 xl:px-40'>
          {props.children}
        </div>
      ) : props.state == 'register' ? (
        <div className='relative container m-auto p-5 lg:p-2   text-gray-300 '>
          {props.children}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FormWrapper
