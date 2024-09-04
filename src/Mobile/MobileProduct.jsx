import React from 'react'
import { useNavigate } from 'react-router-dom'

const MobileProduct = ({data}) => {
    const nav = useNavigate()
    const handleClick = (id) =>{
        nav(`/products/${id}`)
    }
  return (
    <div>
        {
            data.length>0 ? 
            <>
            <div>
                {data.map((item)=>{
                    return (
                        <div onClick={()=>handleClick(item._id)} style={{height:"250px",width:"250px",cursor:"pointer"}} key={item._id}>
                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} height={150} width={150} />
                        </div>
                    )
                })}
            </div>
            </>
            :
            <>
            <h1>No Products Found</h1>
            </>
        }
    </div>
  )
}

export default MobileProduct