import React from 'react'

const Button = ({handleAdd}) => {
  return (
    <button style={{backgroundColor:"red"}} onClick={handleAdd}>➕</button>
  )
}

export default Button