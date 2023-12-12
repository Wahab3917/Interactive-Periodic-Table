import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search an Element" value={searchQuery} onChange={handleSearchChange} className="search-bar-input"/>
        <i className="search-bar-icon fa-solid fa-magnifying-glass"></i>
      </form>
    </>
  );
};

export default SearchBar;