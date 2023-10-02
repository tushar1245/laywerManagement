
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function FirmsList({ selectedCategory }) {
  const lawyers = useSelector((state) => state.lawyers);

  const firms = Array.from(
    new Set(
      lawyers
        .filter((lawyer) => lawyer.category.includes(selectedCategory))
        .map((lawyer) => lawyer.firm)
    )
  );

  return (
    <div>
      <h2 className='mx-5 mt-5 text-xl'>Firms Offering Lawyers in {selectedCategory}:</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {firms.map((firm) => (
    <div
      key={firm}
      className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg mt-5 transition duration-300"
    >
      <Link to={`/lawyers/${firm}/${selectedCategory}`}>
        <h3 className="text-blue-500 hover:text-blue-700 text-center text-lg font-semibold">
          {firm}
        </h3>
      </Link>
    </div>
  ))}
</div>


    </div>
  );
}

export default FirmsList;
