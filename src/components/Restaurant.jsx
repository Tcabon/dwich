import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@fontsource/bebas-neue';
import '@fontsource-variable/open-sans';
import useUserDataReservation from '../hooks/useUserDataReservation';

const hours = [
    { id: 1, hour: '11:30' },
    { id: 2, hour: '12:00' },
    { id: 3, hour: '12:30' },
    { id: 4, hour: '13:00' },
    { id: 5, hour: '13:30' },
    { id: 6, hour: '14:00' },
    { id: 7, hour: '14:30' },
];

function Restaurant({ id, name, description }) {
  const {setDinnerHour, setRestaurantName} = useUserDataReservation();
  const [selectedHour, setSelectedHour] = useState(null);

  const handleDinnerHour = (hour) => {
    setDinnerHour(hour.hour);
    setSelectedHour(hour.id);
    setRestaurantName(name);
  }

  return (
    <StyledRestaurantContainer>
      <StyledRestaurantInfo>
        <h2>
          {name}
        </h2>
        <p>{description}</p>
        <StyledDatepicker>
          {hours.map(hour => (
            <Link key={hour.id} to={`/menu/${id}`} style={{ textDecoration: 'none' }}>
              <StyledDateButton
                onClick={() => handleDinnerHour(hour)}
                className={selectedHour === hour.id ? 'selected' : ''}
              >
                {hour.hour}
              </StyledDateButton>
            </Link>
          ))}
        </StyledDatepicker>
      </StyledRestaurantInfo>
    </StyledRestaurantContainer>
  );
}


const StyledRestaurantContainer = styled.div`
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

const StyledRestaurantInfo = styled.div`
    width: 100%;
    padding-top: 20px;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
    border-radius: 10px;
`;

const StyledDatepicker = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 10px 0 10px 0;
    overflow-x: scroll;
  
    margin-top: 10px;
    background-color: #FFF;
    height: 26px;
    border-radius: 0 0 10px 10px;
`;

const StyledDateButton = styled.button`
    background-color: #DFDFDF;
    border-radius: 10px;
    border: none;
    margin-left: 10px;
    &.selected {
      background-color: #F2D621;
    }
`;

export default Restaurant;
