import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({cart,isLoggedIn,setisLoggedIn}) => {
  
  const nav = useNavigate()
  const handleLogout = () =>{
    setisLoggedIn(false)
    nav('/')
  }
  const handleLoginNav = () =>{
    nav('/')
  }
  return (
    <>
    <nav>
            <ul>
                {isLoggedIn ?
                <>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/products'>Food</Link></li>
                <li><Link to='/pizza'>Pizza</Link></li>
                <li><Link to='/burger'>Burger</Link></li>
                <li><Link to='/cart'>Cart : {cart.length}</Link></li>
                <button onClick={handleLogout}>Logout</button>
                </>
                :
                <>
                <button onClick={handleLoginNav}>🍕🍔</button>
                </>
              }
            </ul>
        </nav>
    </>
  )
}

export default Navbar