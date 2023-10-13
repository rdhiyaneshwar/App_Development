import React, { useState } from 'react';
import '../assets/css/Data.css';

function Data() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ]);

  const handleEdit = (itemId, newText) => {
    setItems(items.map(item => (item.id === itemId ? { ...item, text: newText } : item)));
  };

  const handleDelete = itemId => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div className="container">
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button className="btn-edit" onClick={() => handleEdit(item.id, prompt('Enter new text for the item:'))}>
              Edit
            </button>
            <button className="btn-delete" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
