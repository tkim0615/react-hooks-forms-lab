import React, {useState} from "react";
//1 add onChange to input, add handle function, add state, add value as e.target.value
function Filter({ onCategoryChange, search, handleSearchChange }) {


  return (
    <div className="Filter">
      <input onChange= {handleSearchChange} value={search} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
