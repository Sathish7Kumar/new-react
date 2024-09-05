import React from "react";

const Burger = ({ burger, addCart }) => {
  // console.log(burger);
  return (
    <>
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
