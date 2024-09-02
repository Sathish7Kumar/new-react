import React from 'react'

const AllFood = ({food,addCart}) => {
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
              <h3>{item.subItemsData.name}</h3>
              {item.subItemsData.subItems.map((item,index)=>{
                return(
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt="" height={150} width={150} />
                        <h3>{item.description}</h3>
                        <h4>Rs : {item.price}.00</h4>
                        <button onClick={()=>addCart(item)}>Add to Cart</button>
                    </div>
                )
              })}
            </div>
          )
        })}
      </div>
      </>
       : 
      <><h2>no food items</h2></>
    }
    </div>
    </>
  )
}

export default AllFood