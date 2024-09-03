import React from "react";
import styled from "styled-components";

const CartEntry = ({ entry }) => {
  const singleItemTotal = entry.quantity * entry.price;
  return (
    <StyledLi>
      <StyledSingleItemQuantity>{entry.quantity}x</StyledSingleItemQuantity>
      <StyledSingleItemName>{entry.name}</StyledSingleItemName> 
      <StyledSingleItemPrice>{entry.price} €</StyledSingleItemPrice>
      <StyledSingleItemTotal>{singleItemTotal}€</StyledSingleItemTotal>
    </StyledLi> 
  );
}

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 32px;
  font-size: 1.6em;
  align-items: center;
`;

const StyledSingleItemQuantity = styled.p`
  margin-right: 8px;
`;

const StyledSingleItemName = styled.p`
  margin-right: 8px;
`;

const StyledSingleItemPrice = styled.p`

`;

const StyledSingleItemTotal = styled.p`
  font-weight: 700;
  margin-left: auto;
`;

export default CartEntry;