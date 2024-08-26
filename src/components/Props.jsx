import React from 'react'

const Props = ({name}) => {
    const  clickme = (x)=>{
        alert(x)
    }
  return (
    <>
    <h1>My name is {name}</h1>
    <button onClick={()=>clickme("u r clicked me")}>Click me</button>
    </>
  )
}

export default Props