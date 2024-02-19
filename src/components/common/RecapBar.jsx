import React, { useState } from "react";
import styled from "styled-components";
import useUserDataReservation from '../../hooks/useUserDataReservation';
import { useNavigate } from 'react-router-dom';
import Button from "./Button";

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

  const resetDisplay = () => {
    return (
      <div>
        Reset 
      </div>
    )
  }

  return (
    <StyledRecapBar $expanded={expanded}>
      <StyledRecapHead onClick={toggleExpanded}>
        <StyledRecapTitle>Récapitulatif</StyledRecapTitle>
        <StyledToggleArrow $expanded={expanded}>&#8679;</StyledToggleArrow>
      </StyledRecapHead>
      {expanded && (
        <>
          <StyledInfos>
            <p>Pour le {selectedDate ? selectedDate.toDateString() : "pas de date"}</p>
            <p>Nombres de dwicheurs : {guestCount ? guestCount.label : <label>2 personnes</label>} </p>
            <p>Ville : {town}</p>
            <p>Horaire : {dinnerHour}</p>
          </StyledInfos>
          <Button action={handleResetClick} Display={resetDisplay} />
        </>
      )}
    </StyledRecapBar>
  );
};

const StyledRecapBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: ${props => props.$expanded ? 'auto' : '50px'};
  overflow: hidden;
  background-color: #FFF;
  border-radius: 10px 10px 0 0;
  padding: ${props => props.$expanded ? '0 20px' : '0 20px'};
  box-shadow: 0px 5px 25px 10px rgba( 0, 0, 0, 0.1);
  position: fixed;
  bottom: 0; /* Décalage vers le haut */
  left: 0;
  width: calc(100% - 40px);
  z-index: 100;
  font-size: 1rem;
  color: black;
  background-color: #FFF;
  transition: height 0.3s, padding 0.3s, bottom 0.3s;
`;

const StyledRecapHead = styled.div`
  display: flex;
  justify-content: space-between; /* Permet d'espacer les éléments sur toute la largeur */
  width: calc(100% - 40px);
`;

const StyledToggleArrow = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.3s;
  transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0)'};
  position: absolute;
  top: 5px;
  right: 20px;
  color: black;
`;

const StyledRecapTitle = styled.h2`
  margin: 10px 0; 
  color: black;
  font-weight: 600;
`;

const StyledInfos = styled.div`
  
`;

export default RecapBar;