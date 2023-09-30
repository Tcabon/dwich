import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import Total from './Total';
import useUserDataReservation from '../hooks/useUserDataReservation';
import useCart from '../hooks/useCart';

function MenuSelection() {
  const { removeFromCart, cartEntries, addToCart, total, CartEntries } = useCart();
  const { restaurantId } = useParams();


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
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div>
      <h2>Panier :</h2>
        <CartEntries />
      </div>
      <Total cart={cartEntries} total={total}/>
    </div>
  );
}

export default MenuSelection;