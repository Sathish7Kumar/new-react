import React from 'react'
import Button from './Button'

const Home3 = ({name,count,handleAdd}) => {
  return (
    <div>
        <h1>My name is {name}</h1>
        <h2>Count : {count}</h2>
       <Button  handleAdd={handleAdd}/>
    </div>
  )
}

export default Home3