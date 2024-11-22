// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav>
      <h1>Food Shop</h1>
      <div>
        <Link to="/" >Home</Link>
        <Link to="/food-list">Menu</Link> {/* Ensure path matches */}

        <Link to="/cart">Cart <span className="cart-count">({cartCount})</span></Link> {/* Add cart count dynamically */}
        <Link to="/checkout">Checkout</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Feedback</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
