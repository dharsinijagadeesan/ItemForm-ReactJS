import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <h1>Add New Items</h1>
      <ItemForm addItem={addItem} />
      <div className="item-list">
        <h2>Item List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - {item.description} (Quantity: {item.quantity})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
