import React from 'react'




 const FormWrapper = ({children}:any) => {
  return (
    <div className=' h-screen w-screen border-2 border-black  overflow-hidden flex justify-center bg-gray-200'>
{children}
     
    
    </div>
  )
}


export default FormWrapper;