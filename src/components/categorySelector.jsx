// CategorySelection.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CategorySelector({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const lawyers = useSelector((state) => state.lawyers);
  //console.log(lawyers);
  const categories = Array.from(
    new Set(lawyers.flatMap((lawyer) => lawyer.category))
  ); // Extract unique categories from lawyers

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    onSelectCategory(selectedCategory);
  };

  return (
    
    <div>
      <h2>Select a Category:</h2>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Select a category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
