import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item object
    const newItem = {
      name,
      description,
      quantity,
    };

    // Add the new item to the list
    addItem(newItem);

    // Reset the form fields
    setName('');
    setDescription('');
    setQuantity('');
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <div>
        <label>Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
