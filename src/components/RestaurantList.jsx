import React from 'react';
import Restaurant from './Restaurant';

function RestaurantList({ selectedDate }) {
  const restaurants = [
    { id: 1, name: 'Les patapons', description: 'Restaurant pour petits cons' },
    { id: 2, name: 'Les patapoufs', description: 'Restaurant pour grandes poufs' },
    { id: 3, name: 'Les pataniais', description: 'Restaurant pour les niais'},
    { id: 4, name: 'les PataRDC', description: 'Restaurant Portugais'}
    // ... Ajoutez plus de restaurants ici
	];

  return (
    <div>
      <h2>Restaurants disponibles pour le {selectedDate.toDateString()} :</h2>
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          description={restaurant.description}
          selectedDate={selectedDate}
        />
      ))}
    </div>
  );
}

export default RestaurantList;
