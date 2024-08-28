import React from 'react'

const WelcomeUser = ({isLoggin,setisLoggin}) => {
  return (
    <div>
        <h1>WelcomeUser</h1>
        <button onClick={()=>setisLoggin(false)}>Logout</button>
    </div>
  )
}

export default WelcomeUser