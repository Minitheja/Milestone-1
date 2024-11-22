

import React, { useState } from 'react';

function SearchBar({ cakes, setFilteredCakes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredCakes(cakes.filter((cake) => cake.name.toLowerCase().includes(term)));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for cakes..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
