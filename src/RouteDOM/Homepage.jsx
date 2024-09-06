import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Homepage = ({food,cart}) => {
  
  return (
    <>
    <Navbar cart={cart}/>
    <div>
    {
      food.length > 0 ? 
      <>
      <div>
        {food.map((item,index)=>{
          return(
            <Link key={index} to={`/${item.name}`}>
            <div key={index}>
              <h2>{item.name}</h2>
              <img src={item.image} alt="" height={150} width={150} />
            </div>
            </Link>
          )
        })}
        <h5><Link to='/products'>Goto Food Page</Link></h5>
      </div>
      </>
       : 
      <><h2>no food items</h2></>
    }
    </div>
    </>
  )
}

export default Homepage