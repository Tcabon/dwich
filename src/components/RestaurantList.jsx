import React from 'react';
import Restaurant from './Restaurant';
import styled from 'styled-components';

function RestaurantList({ selectedDate, selectedPlace }) {
  const restaurants = [
    { id: 1, name: 'Les patapons', description: 'Restaurant pour petits cons avec un description plus long', postalCodes: ["75016", "92100"] },
    { id: 2, name: 'Les patapoufs', description: 'Restaurant pour grandes poufs', postalCodes: ["75015", "75007"]  },
    { id: 3, name: 'Les pataniais', description: 'Restaurant pour les niais', postalCodes: ["75116", "92200"] },
    { id: 4, name: 'Le Limmeuillois', description: 'Restaurant Portugais', postalCodes: ["24510"] }
    // ... Ajoutez plus de restaurants ici
  ];

  return (
    <div>
      <h2>Restaurants disponibles pour le {selectedDate.toDateString()} :</h2>
        <RestaurantsListContainer>
          {restaurants.map(restaurant => {
            return (restaurant.postalCodes.includes(selectedPlace) &&
                <Restaurant
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    description={restaurant.description}
                    selectedDate={selectedDate}
                />
            )
          })}
        </RestaurantsListContainer>
    </div>
  );
}

const RestaurantsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    
`;

export default RestaurantList;
