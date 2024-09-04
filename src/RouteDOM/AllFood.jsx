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
            <div >
            <h3>{item.subItemsData.name}</h3>
            <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
              {item.subItemsData.subItems.map((item,index)=>{
                return(
                    <div key={index} style={{height:"500px",width:"300px"}} >
                        <h3>{item.name}</h3>
                        <img src={item.image} alt="" height={150} width={150} />
                        <p>{item.description}</p>
                        <h4>Rs : {item.price}.00</h4>
                        <button onClick={()=>addCart(item)}>Add to Cart</button>
                    </div>
                )
              })}
            </div>
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