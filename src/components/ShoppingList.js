import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemsUpdated }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[searchText, setSearchText] = useState("");
console.log(items)
  ///////////////////////////////////////////////////////////
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event) {
    setSearchText(event.target.value);
  }

  function onItemFormSubmit(newItem){    //items state is in App.js and shoppingList took it as prop.
    onItemsUpdated(newItem)
  }



  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter(item=>{
    return item.name.toLowerCase().includes(searchText.toLowerCase())
  })



//items(array or original food data passed from App.js as prop) it doesn't change, 
// itemsToDisplay is the copy of it, getting filtered(being filtered to be displayed)
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
