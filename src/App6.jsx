import React, { useState } from 'react'

const App6 = () => {

    const [username, setusername] = useState("")
    const [mail, setmail] = useState("")
    const [password, setpassword] = useState("")
    const [confpassword, setconfpassword] = useState("")

    const [usernameErr, setusernameErr] = useState("")
    const [mailErr, setmailErr] = useState("")
    const [passwordErr, setpasswordErr] = useState("")
    const [confpasswordErr, setconfpasswordErr] = useState("")

    const isValid = 

    username  !== "" && mail  !== "" &&
    password !== "" &&  confpassword == password

    const handleName = (e) =>{
       let value = (e.target.value)
       setusername(value)
        setusernameErr((value==""?"UserName is required":""))
        }
    const handleMail = (e) =>{
        let value = (e.target.value)
        setmail(value)
        setmailErr((value==""?"Email ID is required":""))
    }
    const handlePassword = (e) =>{
        let value = (e.target.value)
        setpassword(value)
        setpasswordErr((value==""?"Password is required":""))
    }
    const handleconfPassword = (e) =>{
        let value = (e.target.value)
        setconfpassword(value)
        setconfpasswordErr((value!==password?"Password doesnot match":""))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("hi")
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input id='name' value={username} type="text" onChange={handleName} />
        <p>{usernameErr}</p>
        <br />
        <label htmlFor="mail">Mail : </label>
        <input id='mail'  value={mail}  type="email" onChange={handleMail} />
        <p>{mailErr}</p>
        <br />
        <label htmlFor="password">Password : </label>
        <input id='password' value={password}  type="password" onChange={handlePassword} />
        <p>{passwordErr}</p> 
        <br />
        <label htmlFor="c-pass">ConfirmPassword : </label>
        <input id='c-pass' value={confpassword} type="password" onChange={handleconfPassword} />
        <p>{confpasswordErr}</p>
        <br />
        <button disabled={!isValid}>Sign up</button>
    </form>
    </>
  )
}

export default App6