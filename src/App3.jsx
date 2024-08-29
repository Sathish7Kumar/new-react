import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './RouteDOM/Homepage'
import Mobile from './RouteDOM/Mobile'
import Cart from './RouteDOM/Cart'
import Navbar from './RouteDOM/Navbar'
import './App.css'

const App3 = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/mobile' element={<Mobile/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App3