import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../App7'

const FetchCart = () => {
  const context = useContext(ProductsContext)
  const [total, settotal] = useState(0)
  useEffect(()=>{
    let newTotal = context.cart.reduce((initialVal,item)=>
       initialVal+item.price,0)
    settotal(newTotal.toFixed(2))
    },[context.cart])

    const handleRemove = (index) =>{
      const upDateCart  = [...context.cart]
      upDateCart.splice(index,1)
      context.setcart(upDateCart)
      context.setcartValue(upDateCart.length)
    }
  return (
    <div>
      {context.cart.length > 0 
      ?
      <>
      <button
      onClick={()=>{
        context.setcart([])
        context.setcartValue(0)
      }}
      >Clear Cart</button>
      <h3>You have Ordered</h3>
      <h2>Total Amount :  {total}</h2>
      {context.cart.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} height={150} width={150} />
          <h3>Price : $ {item.price}</h3>
          <button onClick={ ()=>handleRemove(index)}
          >Remove from Cart</button>
        </div>
      ))}

      </>
      :
      <>
      <h1>Your Cart is Empty</h1>
      </>
      }
    </div>
  )
}

export default FetchCart