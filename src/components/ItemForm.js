import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onSubmit}) {  
  
  // const[nameInput, setNameInput] = useState('')
  // const[categoryInput, setCategoryInput] = useState('Produce')
  const[formData, setFormData] = useState({
    name: '',
    category: 'Produce'
  })
  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category
    }
    onSubmit(newItem)
  }

  
                                      //1 add onChange to input box and select categoty. set state for each. send states to shoppingList and. create submit form
  return (                            //send form submit data to app, add using spread operator within a function that will be called with call back function in form ocmpoment
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category">
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
// There is a new component called ItemForm that will allow us to add new items to our shopping list. 
// When the form is submitted, a new item should be created and added to our list of items.

// Make all the input fields for this form controlled inputs, so that you can access all the form data via state. 
// When setting the initial state for the <select> tag, use an initial value of "Produce" (since that's the first
//  option in the list).

// Handle the form's submit event, and use the data that you have saved in state to create a new item object with the following properties: