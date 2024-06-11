import React from 'react';
import Restaurant from '@/components/restaurantList/Restaurant';
import RecapBar from '@/components/common/RecapBar';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import backArrow from '@/assets/icons/backArrow.png';
import useGoBack from '@/hooks/useGoBack';

function RestaurantList() {
  const { postalCode } = useParams();
  const goBack = useGoBack();

  const restaurants = [
    { id: 1, name: 'Les patapons', description: 'Restaurant pour petits cons avec une description plus longue', postalCodes: ["75016", "92100"] },
    { id: 2, name: 'Les patapoufs', description: 'Restaurant pour grandes poufs', postalCodes: ["75015", "75007"]  },
    { id: 3, name: 'Les pataniais', description: 'Restaurant pour les niais', postalCodes: ["75116", "92200"] },
    { id: 4, name: 'Le Limmeuillois', description: 'Restaurant Portugais', postalCodes: ["24510"] },
    { id: 5, name: 'Au délice d\'Istanbul', description: 'Restaurant Turque', postalCodes: ["92100"] },
    { id: 6, name: 'Les autres patapons', description: 'Restaurant pour petits cons avec une description plus longue mais vraiment relou du coup', postalCodes: ["75016", "92100"] },
    { id: 7, name: 'Les autres patapons', description: 'Restaurant pour petits cons avec une description plus longue mais vraiment relou du coup', postalCodes: ["75016", "92100"] },
  ];

  const filteredRestaurants = restaurants.filter(restaurant => restaurant.postalCodes.includes(postalCode));

  const handlePreviousButtonClick = () => {
    goBack();
  };

  return (
    <StyledRestaurantsListPage>
      <StyledPageHeader>
        <StyledButtonContainer>
          <StyledPreviousButton onClick={() => handlePreviousButtonClick()}><StyledImage src={backArrow} /></StyledPreviousButton>
        </StyledButtonContainer>
        <StyledTitle>Choisissez votre restaurant</StyledTitle>
      </StyledPageHeader>
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
  padding: 14px 16px 14px 16px;
  padding-bottom: 50px;
  width: calc(100% - 32px);
  max-width: 880px;
  margin: 0 auto;
`;

const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
`;

const StyledButtonContainer = styled.div`

`;

const StyledPreviousButton = styled.button`
  line-height: 0;
`;

const StyledImage = styled.img`
  height: 30px;
`;

const StyledRestaurantsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledNoResultsMessage = styled.p`
  color: red;
  font-weight: bold;
`;

const StyledTitle = styled.h1`
  font-size: 2.2em;
  font-weight: 700;
`;

const StyledTitleLower = styled.h1`
  font-size: 1.6em;
  margin: 5px 0 15px 0;
  text-align: left;
`;

export default RestaurantList;
