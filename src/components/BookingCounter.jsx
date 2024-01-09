import React from "react";
import useUserDataReservation from '../hooks/useUserDataReservation';
import styled from 'styled-components';

const guestCountsFields = [
  { id: 1, count: 1, label: '1' },
  { id: 2, count: 2, label: '2' },
  { id: 3, count: 3, label: '3' },
  { id: 4, count: 4, label: '4'},
  { id: 5, count: 5, label: '5'},
  { id: 6, count: 6, label: '6'},
  { id: 7, count: 10, label: '7 et +'}
];

const BookingCounter = () => {
  const {guestCount, setGuestCount} = useUserDataReservation();


  const handleGuestCountChange = (elem) => {
    setGuestCount(elem);
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
                className={guestCount.count === elem.count || (guestCount.count > 7 && elem.id === 7)  ? 'selected' : ''} //permet de garder le choix de guest en surbrillance
              >
                {elem.label}
              </StyledSelectedCount>
            )
          })}
        </ StyledBookingCounter>
        {!!guestCount && (
          <h2>Il y'aura {guestCount.label} dwicheur</h2>
        )}
        {!guestCount && (
          <h2>Choisissez un nombre de dwicheur</h2>
        )}
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