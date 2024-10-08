import React, { useContext } from 'react'
import { ProductsContext } from '../App7'
import { useNavigate } from 'react-router-dom'

const FetchProducts = () => {
    const context = useContext(ProductsContext)
    // context = {products,setproducts}
    const nav = useNavigate()
    const handleDetails = (id)=>{
        nav(`/products/${id}`)
    }
  return (
    <>
    <div  style={{margin:"10px",textAlign:"center",display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center"}}>
      {context.products.map((item, index) => (
        <div key={index} style={{width:300,height:350,backgroundColor:"gray",marginBottom:10}}>
          <div onClick={()=>handleDetails(item.id)}>
          <h4 >{item.title}</h4>
          <img   src={item.image} alt={item.title} height={150} width={150} />
          </div>
          {/* <button style={{marginTop:"25px"}} onClick={ ()=>{
            context.cart.unshift(item)
            context.setcartValue(context.cart.length)
          }}
          >Add to Cart</button> */}
        </div>
      ))}
    </div>
    </>
  )
}

export default FetchProducts