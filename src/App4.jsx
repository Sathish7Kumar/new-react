import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import MobileHome from './Mobile/MobileHome'
import MobileProduct from './Mobile/MobileProduct'
import MobileProducts from './Mobile/dummyData'
import ProductDetails from './Mobile/ProductDetails'

const App4 = () => {
    const [data, setdata] = useState([])
    useEffect(()=>{
        setdata(MobileProducts)
    },[])
  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/products'}>Products</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<MobileHome/>}/>
        <Route path='/products' element={<MobileProduct data={data}/>}/>
        <Route path='/products/:id' element={<ProductDetails data={data} />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App4