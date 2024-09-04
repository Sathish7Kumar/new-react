import React from 'react'
import { useNavigate } from 'react-router-dom'

const MobileHome = () => {

    const nav = useNavigate()

    const handleGoto = ()=>{
       nav('/products') 
    }

  return (
    <div>
        <h1>HomePage</h1>
        <button onClick={handleGoto}>Go to Product Page</button>
    </div>
  )
}

export default MobileHome