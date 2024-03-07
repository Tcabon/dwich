import React, { useState } from "react";
import styled from "styled-components";
import useUserDataReservation from '../../hooks/useUserDataReservation';
import { useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import fr from 'date-fns/locale/fr';
import Button from "./Button";
import backArrow from '@/assets/icons/backArrow.png';


const RecapBar = () => {
  const { selectedDate, guestCount, town, handleResetDataReservation } = useUserDataReservation();
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
      <StyledRecapHeader onClick={toggleExpanded}>
        <StyledRecapTitle>Récapitulatif</StyledRecapTitle>
        <StyledToggleArrow $expanded={expanded}><StyledArrowIcon src={backArrow} /></StyledToggleArrow>
      </StyledRecapHeader>
          <StyledInfos>
            <StyledSingleInfo><StyledPrefix>Pour le</StyledPrefix> {(selectedDate !== null) ? <StyledSelectedChoice>{format(selectedDate, 'dd MMMMMMMMM yyyy')}</StyledSelectedChoice> : "pas de date"}</StyledSingleInfo>
            <StyledSingleInfo><StyledPrefix>Avec</StyledPrefix> {guestCount ? <StyledSelectedChoice>{guestCount.label} personnes</StyledSelectedChoice> : <StyledPlaceholder>2 personnes</StyledPlaceholder>}</StyledSingleInfo>
            <StyledSingleInfo><StyledPrefix>À</StyledPrefix> {town ? <StyledSelectedChoice>{town}</StyledSelectedChoice> : <StyledPlaceholder>Ville, code postal, adresse</StyledPlaceholder>}</StyledSingleInfo>
            <Button action={handleResetClick} Display={resetDisplay} />
          </StyledInfos>
    </StyledRecapBar>
  );
};

const StyledRecapBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  max-height: ${props => props.$expanded ? '300px' : '50px'};
  background-color: #FFF;
  border-radius: 10px 10px 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: #FFF;
  transition: max-height 0.2s cubic-bezier(0.17, 0.67, 0.76, 0.71);
`;

const StyledRecapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

const StyledToggleArrow = styled.div`
  cursor: pointer;
  transition: transform 0.3s;
  transform: ${props => props.$expanded ? 'rotate(270deg)' : 'rotate(90deg)'};
  position: absolute;
  top: 5px;
  right: 4px;
`;

const StyledArrowIcon = styled.img`

`;

const StyledRecapTitle = styled.h2`
  margin: 10px 0; 
  color: black;
  font-weight: 700;
  font-size: 2em;
`;

const StyledInfos = styled.div`
  padding: 20px 24px 35px 24px;
  text-align: left;
`;

const StyledSingleInfo = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: end;
  &:nth-child(3) {
    margin-bottom: 20px;
  };
`;

const StyledPrefix = styled.p`
  font-size: 1.6em;
`;

const StyledSelectedChoice = styled.p`
  margin-left: 6px;
  font-size: 2em;
  font-weight: 700;
`;

const StyledPlaceholder = styled.label`
  position: relative;
  top: 4px;
  width: 100%;
  margin-left: 6px;
  padding-bottom: 3px;
  opacity: 0.5;
  border-bottom: 1px solid #919EAB;
  font-size: 1.6em;
`;

export default RecapBar;