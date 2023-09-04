import React, { useState } from 'react';

//affiche les détails d'un item du menu

function MenuItem({ id, name, price, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity });
		setQuantity(1);
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