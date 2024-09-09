import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../App7'

const FetchProductDetails = () => {

  let {id} =  useParams()
  
  const context = useContext(ProductsContext)

  const selectedProduct = context.products.find((item)=>{
    return item.id ==  id
  })  

  return (
    <div>
        <h3>{selectedProduct.title}</h3>
        <img  src={selectedProduct.image} alt={selectedProduct.title} height={150} width={150} />
        <h3>Price : $ {selectedProduct.price}</h3>
        <h5>Specifications : {selectedProduct.description}</h5>
        <h5>Category : {selectedProduct.category}</h5>
        <h4>Rating : {selectedProduct.rating.rate}</h4>
        <h4>In Stock : {selectedProduct.rating.count}</h4>
        <button className='btn btn-primary'>Add to Bag</button>
    </div>
  )
}

export default FetchProductDetails