import React, { useState } from "react";
import styled from "styled-components";
import useUserDataReservation from '../hooks/useUserDataReservation';
import { useNavigate } from 'react-router-dom';

const RecapBar = () => {
  const { selectedDate, guestCount, town, dinnerHour, handleResetDataReservation } = useUserDataReservation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleResetClick = () => {
    handleResetDataReservation();
    navigate('/');
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }
  
  return (
    <StyledRecapBar expanded={expanded}>
      <ToggleArrow onClick={toggleExpanded} expanded={expanded}>&#x25B2;</ToggleArrow>
      <div>
        {expanded && (
          <>
            <p>Date sélectionnée : {selectedDate ? selectedDate.toDateString() : "pas de date"}</p>
            <p>Nombres de dwicheurs : {guestCount ? guestCount.label : "-"} </p>
            <p>Ville : {town}</p>
            <p>Horaire : {dinnerHour}</p>
            <button onClick={handleResetClick}>Reset</button>
          </>
        )}
      </div>
    </StyledRecapBar>
  );
};

const StyledRecapBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: ${props => props.expanded ? 'auto' : '50px'};
    overflow: hidden;
    background-color: #FFF;
    border-radius: 10px 10px 0 0;
    padding: ${props => props.expanded ? '20px' : '0 20px'};
    box-shadow: 0px 5px 25px 10px rgba( 0, 0, 0, 0.1);
    position: fixed;
    bottom: 0; /* Décalage vers le haut */
    left: 0;
    width: calc(100% - 40px);
    z-index: 100;
    font-size: 1rem;
    color: #1A4133;
    background-color: #FFF;
    transition: height 0.3s, padding 0.3s;
`;

const ToggleArrow = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.3s;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0)'};
  position: absolute;
  top: 5px; /* Ajustement de la position */
  left: 50%; /* Centrage horizontal */
  transform: translateX(-50%);
`;

export default RecapBar;