import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, onRemoveFromCart }) {
  const navigate = useNavigate(); // Hook for navigation

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout'); // Navigate to the Checkout page
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate('/food-list')}>Go to Food List</button>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handleCheckout} disabled={cartItems.length === 0}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
