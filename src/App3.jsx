import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './RouteDOM/Homepage'
import Mobile from './RouteDOM/Mobile'
import Cart from './RouteDOM/Cart'
import Navbar from './RouteDOM/Navbar'
import './App.css'
import Bmi from './RouteDOM/Bmi'
import Accd from './RouteDOM/Accd'

const App3 = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/mobile' element={<Mobile/>} />
            <Route path='/bmi' element={<Bmi/>} />
            {/* <Route path='/accord' element={<Accd/>} /> */}
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