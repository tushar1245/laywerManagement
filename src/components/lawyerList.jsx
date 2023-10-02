import React from 'react';
import { useSelector } from 'react-redux';

function LawyerList({ firm, selectedCategory }) {
  const lawyers = useSelector((state) => state.lawyers);
  //console.log('LawyerList component rendered with firm:', firm, 'category:', selectedCategory);
  const filteredLawyers = lawyers.filter(
    (lawyer) =>
      lawyer.firm === firm && lawyer.category.includes(selectedCategory)
  );
  console.log(filteredLawyers);

  return (
    <div>
      <h2>Lawyers from {firm} in {selectedCategory} category:</h2>
      <ul>
        {filteredLawyers.map((lawyer) => (
          <li key={lawyer.id}>{lawyer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LawyerList;
