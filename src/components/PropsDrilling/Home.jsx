import React from 'react'
import Home2 from './Home2'

const Home = ({name,count,handleAdd}) => {
    
  return (
    <div>
        <h1>Home</h1>
        <Home2 name={name} count={count} handleAdd={handleAdd}/>
    </div>
  )
}

export default Home