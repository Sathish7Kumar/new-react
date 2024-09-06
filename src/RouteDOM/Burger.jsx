import React from "react";
import Navbar from "./Navbar";

const Burger = ({ burger, addCart,cart }) => {
  // console.log(burger);
  return (
    <>
    <Navbar cart={cart}/>
      <div>
        <h2>{burger.subItemsData.name}</h2>
        <div>
          {burger.subItemsData.subItems.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.name}</h3>
                <img src={item.image} alt="" height={150} width={150} />
                <p>{item.description}</p>
                <h4>Rs : {item.price}.00</h4>
                <button onClick={() => addCart(item)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Burger;
