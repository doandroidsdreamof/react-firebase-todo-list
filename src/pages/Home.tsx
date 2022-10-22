import React, { useState, useEffect, useContext,FC } from 'react'
import { AuthContext } from '../context/AuthContext'





 const Home: FC  = ()   => {

  const user = useContext(AuthContext)

  console.log('HOME PAGE', user)

 

  return (
             <div>
   
   home


             </div>                    


  )
}

export default Home