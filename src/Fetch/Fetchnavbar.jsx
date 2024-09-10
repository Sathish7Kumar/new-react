import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../App7'

const Fetchnavbar = () => {
    const navContext = useContext(ProductsContext)
  return (
    <nav>
        <ul>
            <li ><Link to={'/'}>Home</Link></li>
            <li ><Link to={'/products'}>Products</Link></li>
            <li ><Link to={'/cart'}>Cart : {navContext.cartValue}</Link></li>
        </ul>
    </nav>
  )
}

export default Fetchnavbar