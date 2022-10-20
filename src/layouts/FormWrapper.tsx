import React from 'react'




 const FormWrapper = ({children}:any) => {
  return (
    <div className=' h-screen w-screen  overflow-hidden flex justify-center bg-gray-50'>
{children}
     
    
    </div>
  )
}


export default FormWrapper;