import React from 'react'

import image from '../../assets/image/register.jpg'

 const RegisterImage = () => {
  return (
    <div className='rounded-lg lg:block ' hidden>
    <img
      src={image}
      className='rounded-l-xl object-cover h-onehundred'
      alt='register-image'
    />
  </div>
  )
}


export default RegisterImage