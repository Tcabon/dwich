import React from "react";
import styled from "styled-components";

const CartEntry = ({ entry }) => {
  const singleItemTotal = entry.quantity * entry.price;
  return (
    <StyledLi>
      <StyledSingleItem>{entry.quantity}x {entry.name} {entry.price} €</StyledSingleItem>
      <StyledSingleItemTotal>{singleItemTotal}€</StyledSingleItemTotal>
    </StyledLi> 
  );
}

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  mrgin: 0 0 0 5px;
`;

const StyledSingleItemTotal = styled.p`
  font-weight: 600;
  font-size: 1em;
  margin-left: auto; /* Aligner cet élément à droite de l'élément parent */
  margin-bottom: 10px;
`;

const StyledSingleItem = styled.p`
  font-size: 0.8em;
  margin: 0 0 0 5px;
`;

export default CartEntry;