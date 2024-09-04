import React, { useContext } from 'react'
import { DetailsContext } from '../App5'

const CHome3 = () => {
    
    const details = useContext(DetailsContext)
    // details = {myname:"Ms Dhoni",age:43}
    console.log(details);
    
  return (
    <div>
         <h1>Home 3</h1>
         <h2>My name is {details[0]}, I am {details[1]} years old</h2>
    </div>
  )
}

export default CHome3