import React, { useState } from 'react';

import CategorySelector from './categorySelector';
import FirmsList from './firmsList';



function Home() {
  
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };

  return (
   
       <>
          <h1>Lawyer Appointment Management</h1>
          <CategorySelector onSelectCategory={handleCategorySelect} />
          {selectedCategory && <FirmsList selectedCategory={selectedCategory} />}

        </>
      
   
  );
}

export default Home;
