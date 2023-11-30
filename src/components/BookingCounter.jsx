import React, { useState } from "react";
import useUserDataReservation from '../hooks/useUserDataReservation';
import styled from 'styled-components';

const guestCountsFields = [
  { id: 1, count: 1 },
  { id: 2, count: 2 },
  { id: 3, count: 3 },
  { id: 4, count: 4 },
  { id: 5, count: '5 et + '}
];

const BookingCounter = () => {
  const {guestCount, setGuestCount} = useUserDataReservation();


  const handleGuestCountChange = (elem) => {
    setGuestCount(elem.count);
  };

    return (
      <StyledBookingCounterContainer>
        <h2>Nombres de dwicheur</h2>
        <StyledBookingCounter>
          {guestCountsFields.map(elem => {
            return (
              <StyledSelectedCount 
                key={elem.id} 
                onClick={() => handleGuestCountChange(elem)}
                value={elem.count}
                className={guestCount === elem.count ? 'selected' : ''} //permet de garder le choix de guest en surbrillance
              >
                {elem.count}
              </StyledSelectedCount>
            )
          })}
        </ StyledBookingCounter>
        <h2>Il y'aura {guestCount} dwicheur</h2>
      </StyledBookingCounterContainer>
    )
}

const StyledBookingCounterContainer = styled.div`

`

const StyledBookingCounter = styled.div`

`

const StyledSelectedCount = styled.button`
    background-color: #DFDFDF;
    border-radius: 10px;
    border: none;
    margin-left: 10px;
    &.selected {
      background-color: #F2D621;
    }
`


export default BookingCounter