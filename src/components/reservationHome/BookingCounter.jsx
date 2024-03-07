import React from "react";
import useUserDataReservation from '../../hooks/useUserDataReservation';
import styled from 'styled-components';

const guestCountsFields = [
  { id: 1, count: 1, label: '1' },
  { id: 2, count: 2, label: '2' },
  { id: 3, count: 3, label: '3' },
  { id: 4, count: 4, label: '4'},
  { id: 5, count: 5, label: '5'},
  { id: 6, count: 6, label: '6+'},
];

const BookingCounter = ({ hasError, setGuestCountError }) => {
  const {guestCount, setGuestCount} = useUserDataReservation();

  const handleGuestCountChange = (elem) => {
    setGuestCountError(false);
    setGuestCount(elem);
  };
    return (
      <StyledBookingCounterContainer $hasError={hasError}>
        <StyledTitle>Personne en coin de table !</StyledTitle>
        <StyledBookingCounter >
          {guestCountsFields.map(elem => {
            return (
              <StyledSelectedCount 
                key={elem.id} 
                onClick={() => handleGuestCountChange(elem)}
                value={elem.count}
                className={guestCount.count === elem.count || (guestCount.count > 7 && elem.id === 7)  ? 'selected' : ''}
              >
                {elem.label}
              </StyledSelectedCount>
            )
          })}
        </ StyledBookingCounter>
      </StyledBookingCounterContainer>
    )
}

const StyledBookingCounterContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid ${props => props.$hasError ? "red" : "transparent"};
`

const StyledBookingCounter = styled.div`
  height: 80px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledSelectedCount = styled.button`
  display: grid;
  width: 12%;
  aspect-ratio: 1/1;
  place-content: center;
  border-color: #ccc;
  border-style: solid;
  border-width: 1px;
  border-radius: 100%;
  background: transparent;
  &.selected {
    background-color: #e39207;
    color: #fff;
    border: none;
    font-weight: 600;
  }
`

const StyledTitle = styled.h1`
  font-size: 1.6em;
  padding: 20px 0 0 20px;
  font-weight: 400;
`;


export default BookingCounter;