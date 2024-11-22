// src/components/Checkout.js

import React, { useState } from 'react';

function Checkout({ cartItems }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Thank you for your purchase! Your order has been received.</p>;
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <form onSubmit={handleSubmit}>
        <button type="submit">Confirm Purchase</button>
      </form>
    </div>
  );
}

export default Checkout;
