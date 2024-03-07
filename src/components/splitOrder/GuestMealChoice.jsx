import React from "react";
import styled from "styled-components";
import useLunch from "../../hooks/useLunch";
import SoloGuestMealChoice from "./SoloGuestMealChoice";

const GuestMealChoice = ({assignedCartEntries}) => {
  const { guestsList } = useLunch();
  
  return (
    <StyledContentWrapper>
      {guestsList && guestsList.map((guest, index) => (
        <SoloGuestMealChoice key={index} guest={guest} assignedCartEntries={assignedCartEntries} />
      ))}
    </StyledContentWrapper>
  )
}

const StyledContentWrapper = styled.div`
  width: 100%;

`;

const StyledSoloGuest = styled.div`
  
`;

export default GuestMealChoice;