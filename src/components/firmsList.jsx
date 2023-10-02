// FirmsList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function FirmsList({ selectedCategory }) {
  const lawyers = useSelector((state) => state.lawyers);

  // Filter lawyers based on the selected category
  const firms = Array.from(
    new Set(
      lawyers
        .filter((lawyer) => lawyer.category.includes(selectedCategory))
        .map((lawyer) => lawyer.firm)
    )
  );

  return (
    <div>
      <h2>Firms Offering Lawyers in {selectedCategory}:</h2>
      <ul>
        {firms.map((firm) => (
            <li key={firm}>
              <Link to={`/lawyers/${firm}/${selectedCategory}`}>
                {firm}
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default FirmsList;
