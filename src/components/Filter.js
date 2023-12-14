import React from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  return (
    <div className="Filter">
      <input onChange={onSearchChange} type="text" name="search" placeholder="Search..." />
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
// // When the user types in this field, the list of items should be f
// // iltered so that only items with names that match the text are included.

// // Determine where you need to add state for this feature. What components
// //  need to know about the search text?
// // Once you've determined which component should hold the state for this feature, 
// // set up your initial state, and connect that state to the input field. 
// // Remember, we're trying to make this input a controlled input — so the input's 
// value should always be in sync with state.

// // After you've connected the input to state, you'll also need to find a way to set 
// // state when the input changes. To get the test passing, you'll need to use a
//  prop called onSearchChange as a callback.

// // Finally, after making those changes, you'll need to use that state value to 
// // determine which items are being displayed on the page, similar to how the category dropdown works.
