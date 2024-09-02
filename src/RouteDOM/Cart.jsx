import React from "react";

const Cart = ({ cart,removeCart,calcTotal,clearCart }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <>
          <div>
            <h3>You have Ordered</h3>
            <button onClick={clearCart}>Clear Cart</button>
            {cart.map((item, index) => {
              return (
                <div key={index}>
                  <h3>{item.name}</h3>
                  <img src={item.image} alt="" height={150} width={150} />
                  <h3>{item.description}</h3>
                  <h4>Rs : {item.price}.00</h4>
                  <button onClick={()=>removeCart(index)}>Remove Cart</button>
                </div>
              );
            })}
            <h5>Total Amount : {calcTotal()}</h5>
          </div>
        </>
      ) : (
        <>
          <h3>your cart is empty</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
