import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@fontsource/bebas-neue';
import '@fontsource-variable/open-sans';


function Restaurant({ id, name, description, selectedDate }) {
  return (
    <RestaurantContainer>
      <RestaurantInfo>
          <h2>
              <Link to={`/menu/${id}?date=${selectedDate.toISOString()}`}>
                  {name}
              </Link>
          </h2>
          <p>{description}</p>
          <Datepicker>
              <DateButton>
                    11:30
              </DateButton>
              <DateButton>
                  12:00
              </DateButton>
          </Datepicker>
      </RestaurantInfo>
    </RestaurantContainer>
  );
}

const RestaurantContainer = styled.div`
    background-image: url("https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg");
    background-size: cover;
    border-radius: 10px;
    margin-bottom: 15px;
    width: 100%;
    height: 160px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 15px 30px -15px, rgba(0, 0, 0, 0.6) 0px 10px 20px -10px;
    transition: transform 0.2s ease-in-out;
    
    &:hover, &:focus {
        transform: scale(1.05);
    }
    
    h2 {
      height: 40px;
      padding-left: 20px;
      text-align: left;
      margin: 0 0 10px 0;
      font-size: 1.5rem;
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 3px;

      a {
        text-decoration: none;
        color: #FFF;
      }
    }
    p {
      height: 34px;
      padding-left: 20px;
      text-align: left;
      margin: 0;
      color: #FFF;
      font-family: 'Open Sans Variable', sans-serif;
      font-size: 0.8rem;
      letter-spacing: 3px;
    }
`;

const RestaurantInfo = styled.div`
    width: 100%;
    padding-top: 20px;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
    border-radius: 10px;
`;

const Datepicker = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 10px 0 10px 0;
  
    margin-top: 10px;
    background-color: #FFF;
    height: 26px;
    border-radius: 0 0 10px 10px;
`;

const DateButton = styled.button`
    background-color: #DFDFDF;
    border-radius: 10px;
    border: none;
    margin-left: 10px;
    &:active {
      background-color: #F2D621;
    }
`;

export default Restaurant;
