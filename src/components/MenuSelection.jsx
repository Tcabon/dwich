import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import Total from './Total';

function MenuSelection() {
  const { restaurantId } = useParams();
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity };
        }
        return cartItem;
      });

      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, item]);
    }
  };

  const removeFromCart = itemId => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  // Simulons des éléments de menu pour la démonstration
  const menuItems = [
    { id: 1, name: 'Salade parisienne', price: 10 },
    { id: 2, name: 'Fat burger sa mère', price: 15 },
    { id: 3, name: 'Spécialité de la cheffe', price: 25}
  ];

  return (
    <div>
      <h1>Sélection de Menu pour le restaurant {restaurantId}</h1>
      <div>
        <h2>Menu :</h2>
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div>
      <h2>Panier :</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - {item.price} € - Quantité : {item.quantity} 
              <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
      <Total cart={cart}/>
    </div>
  );
}

export default MenuSelection;