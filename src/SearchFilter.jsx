import React from 'react';

const SearchFilter = ({ handleSearch }) => {
  const handleSearchQuery = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search tasks"
      onChange={handleSearchQuery}
    />
  );
};

export default SearchFilter;