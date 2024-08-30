import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/mobile'>Mobile</Link></li>
                <li><Link to='/bmi'>BMI</Link></li>
                {/* <li><Link to='/accord'>Accordion</Link></li> */}
            </ul>
        </nav>
    </>
  )
}

export default Navbar