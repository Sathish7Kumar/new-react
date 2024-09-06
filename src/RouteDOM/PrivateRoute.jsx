import React from 'react'
import Login from './Login'

const PrivateRoute = ({element,isLoggedIn}) => {
  return (
    <>
    {isLoggedIn? element : <><Login/></>}
    </>
  )
}

export default PrivateRoute