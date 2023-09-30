import React, { useState } from 'react';

//affiche les détails d'un item du menu

function MenuItem({ item, addToCart }) {
  const { name, price } = item;
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Prix : {price} €</p>
      <button onClick={handleAddToCart}>Ajouter au panier</button>
    </div>
  );
}

export default MenuItem;