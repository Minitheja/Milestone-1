import React, { useState } from 'react';
import FoodItem from './FoodItem';
import foodItem from '../data/foodData';

function FoodList({ onAddToCart }) {
  const [filteredFoods, setFilteredFoods] = useState(foodItem);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterFoods = (category) => {
    setSelectedCategory(category);
    setFilteredFoods(
      category === 'All'
        ? foodItem
        : foodItem.filter((food) => food.category === category)
    );
  };

  return (
    <div>
      <h2>Our Foods</h2>
      <div className="checklist-container">
        {['All', 'Burgers', 'Pizzas', 'Drinks', 'Pastas', 'Salads', 'Desserts'].map((category) => (
          <button
            key={category}
            onClick={() => filterFoods(category)}
            className={`checklist-button ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="food-list">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodItem key={food.id} food={food} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p>No food items available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default FoodList;
