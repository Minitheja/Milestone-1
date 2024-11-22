import React, { useState } from 'react';

function FoodItem({ food, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(food.sizeOptions[0]);
  const [selectedCustomization, setSelectedCustomization] = useState(food.customizations[0]);

  const handleAddToCart = () => {
    alert(`${food.name} has been added to your cart!`);
    onAddToCart(food, selectedSize, selectedCustomization);
  };

  return (
    <div className="food-item">
      <img src={food.image} alt={food.name} className="food-image" />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>Price: ${food.price}</p>
      <div>
        <label>Select Size: </label>
        <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
          {food.sizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Customizations: </label>
        <select onChange={(e) => setSelectedCustomization(e.target.value)} value={selectedCustomization}>
          {food.customizations.map((custom) => (
            <option key={custom} value={custom}>
              {custom}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
