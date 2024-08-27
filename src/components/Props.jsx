import React from 'react'

const Props = ({name,age}) => {
    const  clickme = (x)=>{
        alert(x)
    }

  return (
    <>
    <h1>My name is {name} <sup>{age}</sup></h1>
    <button onClick={()=>clickme("u r clicked me")}>Click me</button>
    <HomeOne/>
    <HomeTwo/>
    </>
  )
}

export const HomeOne = () =>{
  return(
    <>
    <h1>Home One</h1>
    </>
  )
}

const HomeTwo = () =>{
  return(
    <>
    <h1>Home Two</h1>
    </>
  )
}

export default Props