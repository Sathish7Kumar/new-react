import React from 'react'

const Guest = ({isLoggin,setisLoggin}) => {
  return (
    <div>
        <h1>You are guest user!!</h1>
        <h2>Pls login </h2>
        <button onClick={()=>setisLoggin(true)}>Login</button>
    </div>
  )
}

export default Guest