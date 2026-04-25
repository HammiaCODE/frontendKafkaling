import React from "react";

import "./Cart.css";

function Cart({ cartItems }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> — ${item.price} × {item.quantity}
              </li>
            ))}
          </ul>

          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;