import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './RouteDOM/Homepage'
import Mobile from './RouteDOM/Mobile'
import Cart from './RouteDOM/Cart'
import Navbar from './RouteDOM/Navbar'
import './App.css'
import FoodData from './RouteDOM/Fooddata'
import AllFood from './RouteDOM/AllFood'


const App3 = () => {
  const [food, setfood] = useState([])
  const [cart, setcart] = useState([])

  useEffect(()=>{
    setfood(FoodData)
  },[])

  const addCart = (item) =>{
    setcart((prevCart)=>[...prevCart,item])
  }

  const removeCart = (i) =>{ // 2
    setcart((prevCart)=> prevCart.filter((item,index)=> index != i   ))
  }
  
  const calcTotal = () => {
    let totalPrice = 0
    cart.forEach(item => totalPrice = totalPrice + parseInt(item.price))
    return totalPrice.toFixed(2);
  }

  const clearCart = () =>{
    setcart([])
  }

  return (
    <>
    <BrowserRouter>
        <Navbar cart={cart}/>
        <Routes>
            <Route path='/' element={<Homepage food={food}/>} />
            <Route path='/products' element={<AllFood food={food} addCart={addCart}/>} />
            <Route path='/cart' element={<Cart cart={cart} clearCart={clearCart} removeCart={removeCart} calcTotal={calcTotal}/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App3

// bootstrap react-bootstrap

// https://react-bootstrap.netlify.app/
// npm install react-bootstrap bootstrap

/* The following line can be included in your
 src/index.js or App.js file */

 // import 'bootstrap/dist/css/bootstrap.min.css';

 // react-icons

 // https://react-icons.github.io/react-icons/
 // npm install react-icons