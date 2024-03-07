import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useUserDataReservation from '../../hooks/useUserDataReservation';
import Button from '../common/Button';

const hours = [
    { id: 1, hour: '11h30' },
    { id: 2, hour: '12h00' },
    { id: 3, hour: '12h30' },
    { id: 4, hour: '13h00' },
    { id: 5, hour: '13h30' },
    { id: 6, hour: '14h00' },
    { id: 7, hour: '14h30' },
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
  padding: 20px ;
  margin-bottom: 15px;
`;

const StyledImageContainer = styled.div`
  height: 145px;
  background: url("https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg") center/cover no-repeat;
`;

const StyledRestaurantInfo = styled.div`
  padding: 20px 0 10px 0;
  text-align: left;
`;

const StyledName = styled.h2`
  padding-bottom: 5px;
  margin-bottom: 5px;
  font-size: 2.2em;
  font-weight: 700;
`;

const StyledDescription = styled.p`
  font-size: 1.6em;
`;

const StyledDatepicker = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  padding: 5px 0;
  margin-bottom: 12px;
`;

const StyledDateButton = styled.button`
  border-radius: 4px;
  border: solid 1px black;
  font-size: 1.6em;
  padding: 5px 8px;
  cursor: pointer;
  &.selected {
    border: solid 1px #e39207;
    background-color: #e39207;
    color: #FFF;
  }
`;

export default Restaurant;