import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const onSearchChange =(e) =>{
    setSearchText( e.target.value);
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })
  .filter(item =>{
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  })




  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} searchText={searchText} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
