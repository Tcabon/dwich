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
  { id: 7, count: 10, label: '7+'}
];

const BookingCounter = ({ backgroundColor }) => {
  const {guestCount, setGuestCount} = useUserDataReservation();


  const handleGuestCountChange = (elem) => {
    setGuestCount(elem);
  };

    return (
      <StyledBookingCounterContainer style={{ backgroundColor: "#fff" }}>
        <StyledTitle>Personne en coin de table !</StyledTitle>
        <StyledBookingCounter >
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
      </StyledBookingCounterContainer>
    )
}

const StyledBookingCounterContainer = styled.div`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledBookingCounter = styled.div`
  height: 80px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const StyledSelectedCount = styled.button`
  background-color: #e39207; /* Couleur de fond */
  border: none;
  border-radius: 5px;
  color: #fff; /* Couleur du texte */
  font-size: 1.2rem;
  margin-left: 10px;

  &.selected {
    background-color: #F2D621;
  }
`

const StyledTitle = styled.h1`
  font-size: 1.5em;
  margin: 20px 0 0 0;
  padding-left: 15px;
`;


export default BookingCounter;