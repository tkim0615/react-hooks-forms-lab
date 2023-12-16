import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onHandleNewSubmit}) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce'
  })
  const handleChange = (event) =>{
    setFormData({
    ...formData,
      [event.target.name]: event.target.value
    })
  }


  const handleSubmit =(e) =>{
    e.preventDefault()
    const newItem = {
          id: uuid(), 
          name: formData.name,
          category: formData.category
        };
      onHandleNewSubmit(newItem)
      }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input value={formData.name}onChange={handleChange}type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={formData.category} onChange={handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

// ItemForm
//1 create name and category input values stateful for each.
//2. set state for both and assign value to be state variable
//3 create submit event and handler. inside handler function, create new object and call call back function passed down from App.js
// since app.js  holds the state of items array that we need to add new item to have this function set state using spread operator.!


// There is a new component called `ItemForm` that will allow us to add new items
// to our shopping list. _When the form is submitted_, a new item should be created
// and added to our list of items.

// - Make all the input fields for this form controlled inputs, so that you can
//   access all the form data via state. When setting the initial state for the
//   `<select>` tag, use an initial value of "Produce" (since that's the first
//   option in the list).

// - Handle the form's _submit_ event, and use the data that you have saved in
//   state to create a new item object with the following properties:

//   ```jsx
//   const newItem = {
//     id: uuid(), // the `uuid` library can be used to generate a unique id
//     name: itemName,
//     category: itemCategory,
//   };
//   ```

// - Add the new item to the list by updating state. To get the test passing,
//   you'll need to use a prop called `onItemFormSubmit` as a callback and pass the
//   new item to it.