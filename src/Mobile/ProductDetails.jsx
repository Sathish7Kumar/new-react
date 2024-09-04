import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({data}) => {
    const {id} = useParams()

    const filterById = data.filter((item)=>{
        return item._id == id // [{}]
    })

    const handleAdd = () =>{
        alert("added")
    }
     
  return (
    <div>
        {filterById.map((item)=>{
                    return (
                        <div key={item._id}>
                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} height={150} width={150} />
                            <h3>Brand : {item.brand}</h3>
                            <h3>Specifications : {item.desc}</h3>
                            <h3>Price $ : {item.price}</h3>
                            <button onClick={handleAdd}>Add to Bag</button>
                        </div>
                    )
                })}
    </div>
  )
}

export default ProductDetails