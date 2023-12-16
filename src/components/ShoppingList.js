import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onHandleNewSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[searchInput, setSearchInput] = useState('')

  function onHandleInputChange(e){
    setSearchInput(e.target.value)
  }
  //if item.name === searchinput, add to filter. lowercase both
  const searchItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchInput.toLowerCase())
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = searchItems.filter((item) => { //replaced items with searchItems( since we are filtering by category and by name, searchitems include items filtered by name search and this time being filtered by category)
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  //itemstoDisplay not contains twice filtered items. which can be mapped to be displayed below

  return (
    <div className="ShoppingList">
      <ItemForm onHandleNewSubmit={onHandleNewSubmit} />
      <Filter onHandleInputChange={onHandleInputChange} searchInput={searchInput} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
