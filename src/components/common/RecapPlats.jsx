import React, { useState } from "react";
import styled from "styled-components";
import useCart from "../../hooks/useCart";
import Total from "../menuSelection/Total";
import backArrow from '@/assets/icons/backArrow.png';

const RecapPlats = () => {
  const { cartEntries, total, CartEntries } = useCart();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  return (
    <StyledRecapBar $expanded={expanded}>
      <StyledRecapHead onClick={toggleExpanded}>
        <StyledRecapTitle>Votre commande</StyledRecapTitle>
        <StyledToggleArrow $expanded={expanded}><StyledArrowIcon src={backArrow} /></StyledToggleArrow>
      </StyledRecapHead>
      {expanded && (
        <StyledInfos>
          <CartEntries/>
          <Total cart={cartEntries} total={total}/>
        </StyledInfos>
      )}
    </StyledRecapBar>
  );
};

const StyledRecapBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - 32px);
  max-width: 960px;
  height: ${props => props.$expanded ? 'auto' : '50px'};
  min-height: 56px;
  overflow: hidden;
  background-color: #FFF;
  border-radius: 10px 10px 0 0;
  padding: 0 16px;
  box-shadow: 0 5px 25px 10px rgba( 0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, 0);
  transition: max-height 0.2s cubic-bezier(0.17, 0.67, 0.76, 0.71);
`;

const StyledRecapHead = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
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
  color: black;
  font-size: 2em;
  font-weight: 700;
`;

const StyledInfos = styled.div`
  padding: 24px 8px 38px 8px;
`;

export default RecapPlats;
