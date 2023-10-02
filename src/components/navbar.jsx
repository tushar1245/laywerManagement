import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">LawersConsulting.com</h1>
        <a href="/" className="text-white text-lg hover:underline">Home</a>
      </div>
    </nav>
  );
}

export default Navbar;
