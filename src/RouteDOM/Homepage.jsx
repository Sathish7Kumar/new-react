import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = ({food}) => {
  return (
    <>
    <div>
    {
      food.length > 0 ? 
      <>
      <div>
        {food.map((item,index)=>{
          return(
            <div key={index}>
              <h2>{item.name}</h2>
              <img src={item.image} alt="" height={150} width={150} />
            </div>
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