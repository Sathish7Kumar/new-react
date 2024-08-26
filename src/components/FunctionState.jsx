import React, { useState } from 'react'
const FunctionState = () => {
    const [count,setcount] = useState(0)
    const [name, setname] = useState("MSD")
    // const handleIncrement = () =>setcount(count+1)  
    console.log(count);    
  return (
    <>
    <h1>Count :{count} </h1>
    {/* <button onClick={handleIncrement}>Add</button> */}
    <button onClick={() =>setcount(count+1)}>Add</button>
    <button onClick={() =>setcount((count>0) ? (count-1): 0)}>Minus</button>
    <button onClick={() =>setcount(0)}>Reset</button>
    <hr />
    <h1>My name is {name}</h1>
    <button onClick={()=>setname("Virat")}>Change my Name</button>
    </>
  )
}
export default FunctionState