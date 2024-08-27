import React from 'react'
import Home3 from './Home3'
import Button from './Button'

const Home2 = ({name,count,handleAdd}) => {
  return (
    <div>
        <h1>
            Home2 <Button handleAdd= {handleAdd}/>
        </h1>
    <Home3 name={name}count={count} handleAdd= {handleAdd}  />
    </div>
  )
}

export default Home2