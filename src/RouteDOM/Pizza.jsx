import React from "react";
import Navbar from "./Navbar";

const Pizza = ({ pizza, addCart ,cart,}) => {
  return (
    <>
    {/* <Navbar cart={cart}/> */}
      <div>
        {pizza.length > 0 ? (
          <>
            <div>
              {pizza.map((item, index) => {
                return (
                  <div key={index}>
                    <h3>{item.subItemsData.name}</h3>
                    {item.subItemsData.subItems.map((item, index) => {
                      return (
                        <div key={index}>
                          <h3>{item.name}</h3>
                          <img
                            src={item.image}
                            alt=""
                            height={150}
                            width={150}
                          />
                          <p>{item.description}</p>
                          <h4>Rs : {item.price}.00</h4>
                          <button onClick={() => addCart(item)}>
                            Add to Cart
                          </button>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <h3>No Products Found</h3>
          </>
        )}
      </div>
    </>
  );
};

export default Pizza;
