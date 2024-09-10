import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../App7";

const FetchProductDetails = () => {
  let { id } = useParams();

  const context = useContext(ProductsContext);
  // context = {p:,sp:,c:,sc:,cv:,scv:}
  const selectedProduct = context.products.filter((item) => {
    return item.id == id;
  });
  

  return (
    <div>
      {selectedProduct.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} height={150} width={150} />
          <h3>Price : $ {item.price}</h3>
          <h5>Specifications : {item.description}</h5>
          <h5>Category : {item.category}</h5>
          <h4>Rating : {item.rating.rate}</h4>
          <h4>In Stock : {item.rating.count}</h4>
          <button onClick={ ()=>{
            context.cart.push(item)
            context.setcartValue(context.cart.length)
          }}
          >Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default FetchProductDetails;
