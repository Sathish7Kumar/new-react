import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({cart}) => {
  return (
    <>
    <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Food</Link></li>
                <li><Link to='/pizza'>Pizza</Link></li>
                <li><Link to='/burger'>Burger</Link></li>
                <li><Link to='/cart'>Cart : {cart.length}</Link></li>
                {/* <li><Link to='/accord'>Accordion</Link></li> */}
            </ul>
        </nav>
    </>
  )
}

export default Navbar