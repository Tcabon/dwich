import React from "react";

const CartEntry = ({ entry, removeFromCart }) => {
  
  const handleRemoveFromCart = itemId => {
    removeFromCart(itemId);
  };

  return (
    <li key={entry.id}>
      {entry.name} - {entry.price} €  quandtity : {entry.quantity}
      <button onClick={() => handleRemoveFromCart(entry.id)}>Supprimer</button>
    </li> 
  );
}

export default CartEntry;