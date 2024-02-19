import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useUserDataReservation from '../../hooks/useUserDataReservation';
import Button from '../common/Button';

const hours = [
    { id: 1, hour: '11:30' },
    { id: 2, hour: '12:00' },
    { id: 3, hour: '12:30' },
    { id: 4, hour: '13:00' },
    { id: 5, hour: '13:30' },
    { id: 6, hour: '14:00' },
    { id: 7, hour: '14:30' },
];

const ContinueDisplay = () => {
  return (
    <div>
      Continuer
    </div>
  )
};

const Restaurant = ({ id, name, description }) => {
  const { setDinnerHour, setRestaurantName } = useUserDataReservation();
  const [selectedHour, setSelectedHour] = useState(null);
  const navigate = useNavigate();

  const handleDinnerHour = (hour) => {
    setDinnerHour(hour.hour);
    setSelectedHour(hour.id);
    setRestaurantName(name);
  }

  const handleReservation = () => {
    if (selectedHour !== null) {
      navigate(`/menu/${id}/${name}`);
    } else {
      alert("Veuillez sélectionner une heure avant de réserver.");
    }
  }

  return (
    <StyledRestaurantContainer>
      <StyledImageContainer />
      <StyledRestaurantInfo>
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
      </StyledRestaurantInfo>
      <StyledDatepicker>
        {hours.map(hour => (
          <StyledDateButton
            key={hour.id}
            onClick={() => handleDinnerHour(hour)}
            className={selectedHour === hour.id ? 'selected' : ''}
          >
            {hour.hour}
          </StyledDateButton>
        ))}
      </StyledDatepicker>
      <Button action={handleReservation} Display={ContinueDisplay} />
    </StyledRestaurantContainer>
  );
}

const StyledRestaurantContainer = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
`;

const StyledImageContainer = styled.div`
  height: 120px;
  border-radius: 10px;
  background: url("https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg") center/cover no-repeat;
`;

const StyledRestaurantInfo = styled.div`
  padding: 5px;
  text-align: center;
`;

const StyledName = styled.h2`
  margin-bottom: 5px;
  font-size: 1.5rem;
  color: #333;
`;

const StyledDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const StyledDatepicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px 0;
`;

const StyledDateButton = styled.button`
  background-color: #DFDFDF;
  border-radius: 8px;
  border: none;
  margin: 3px;
  padding: 6px 6px;
  font-size: 0.9rem;
  cursor: pointer;

  &.selected {
    background-color: #F2D621;
  }
`;

const StyledButton = styled.button`
  background-color: #F2D621;
  color: #FFF;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 1rem;
  margin: 10px;
  cursor: pointer;
`;

export default Restaurant;