import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({isLoggedIn,setisLoggedIn}) => {
    // console.log(isLoggedIn);
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const nav = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(email == "admin@gmail.com" && password =="admin"){
            setisLoggedIn(true)
            alert("Logged in Successfully")
            nav('/home')
        }else{
            alert("Invaid MailID or Password")
        }
    }
  return (
    <div style={{margin:"100px"}}>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter E-mail' onChange={(e)=>setemail(e.target.value)} value={email} required />
            <br /> <br />
            <input type="password" placeholder='Enter Password' onChange={(e)=>setpassword(e.target.value)} value={password} required />
            <br /> <br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login