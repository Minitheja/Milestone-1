import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Login from './components/Login'

import './styles/App.css'; // Removed the unused 'foodItem' import

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (food, size, customization) => {
    setCartItems([...cartItems, { ...food, size, customization }]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/food-list" element={<FoodList onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path='/login' element={<Login/>}/>
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
