import React from 'react';
import Restaurant from '../components/Restaurant';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import useUserDataReservation from '../hooks/useUserDataReservation';

function RestaurantList() {
  const { postalCode } = useParams(); 
  const {selectedDate} = useUserDataReservation();
  const restaurants = [
    { id: 1, name: 'Les patapons', description: 'Restaurant pour petits cons avec une description plus longue', postalCodes: ["75016", "92100"] },
    { id: 2, name: 'Les patapoufs', description: 'Restaurant pour grandes poufs', postalCodes: ["75015", "75007"]  },
    { id: 3, name: 'Les pataniais', description: 'Restaurant pour les niais', postalCodes: ["75116", "92200"] },
    { id: 4, name: 'Le Limmeuillois', description: 'Restaurant Portugais', postalCodes: ["24510"] }
    // ... Ajoutez plus de restaurants ici
  ];

  return (
    <div>
      <h2>Restaurants disponibles pour le {selectedDate.toDateString()} :</h2>
      <RestaurantsListContainer>
        {restaurants.map(restaurant => (
          restaurant.postalCodes.includes(postalCode) &&
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              description={restaurant.description}
            />
          )
        )}
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
