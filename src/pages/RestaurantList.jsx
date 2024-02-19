import React from 'react';
import Restaurant from '../components/restaurantList/Restaurant';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import useUserDataReservation from '../hooks/useUserDataReservation';
import RecapBar from '../components/common/RecapBar';

function RestaurantList() {
  const { postalCode } = useParams(); 
  const {selectedDate} = useUserDataReservation();
  const restaurants = [
    { id: 1, name: 'Les patapons', description: 'Restaurant pour petits cons avec une description plus longue', postalCodes: ["75016", "92100"] },
    { id: 2, name: 'Les patapoufs', description: 'Restaurant pour grandes poufs', postalCodes: ["75015", "75007"]  },
    { id: 3, name: 'Les pataniais', description: 'Restaurant pour les niais', postalCodes: ["75116", "92200"] },
    { id: 4, name: 'Le Limmeuillois', description: 'Restaurant Portugais', postalCodes: ["24510"] },
    { id: 5, name: "Au délice d'Istanbul", description: 'Restaurant Turque', postalCodes: ["92100"]}
    // ... Ajoutez plus de restaurants ici
  ];

  // Vérifiez s'il y a des restaurants correspondant au code postal
  const filteredRestaurants = restaurants.filter(restaurant => restaurant.postalCodes.includes(postalCode));

  return (
    <StyledRestaurantsListPage>
      <StyledTitle>Choisissez votre restaurant</StyledTitle>
      <StyledTitleLower>Puis sélectionnez une heure</StyledTitleLower>
      {filteredRestaurants.length > 0 ? (
        <StyledRestaurantsListContainer>
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
        </StyledRestaurantsListContainer>
      ) : (
        <StyledNoResultsMessage>Aucun restaurant disponible pour le code postal {postalCode}.</StyledNoResultsMessage>
      )}
      <RecapBar />
    </StyledRestaurantsListPage>
    
  );
}

const StyledRestaurantsListPage = styled.div`
  background-color: #fff62b
`;

const StyledRestaurantsListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    
`;

const StyledNoResultsMessage = styled.p`
  color: red;
  font-weight: bold;
`;

const StyledTitle = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin: 10px 0 15px 0;
`;

const StyledTitleLower = styled.h1`
  font-size: 1.5em;
  margin: 10px 0 15px 15px;
  text-align: left;
`;

export default RestaurantList;
