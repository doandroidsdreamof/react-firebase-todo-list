import React from 'react'

type error = {
    validError: boolean,
}


 const EmailValidError = ({validError}: error) => {
  return (
    <> {validError ? (
        <span className='text-red-600 font-roboto text-xs absolute translate-y-1 m-0 flex'>
          {'email address is invalid'}
        </span>
      ) : null}</>
  )
}



export default EmailValidError