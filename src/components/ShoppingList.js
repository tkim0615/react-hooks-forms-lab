import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')

  // function onItemFormSubmit(newItem){
  //   submitForm(newItem)
  // }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(e){
    setSearch(e.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if(selectedCategory === "All") {
      return true;
    } else 
    if(selectedCategory === item.category) {return true;}
  }).filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
    })
  

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} handleSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
