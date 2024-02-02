import React from 'react'
import CalendarGrid from '../components/CalendarGrid'
import '../App.css';
import styled from 'styled-components';
import BookingCounter from '../components/BookingCounter';
import AutoCompleteGoogle from '../components/AutoCompleteGoogle'
import RecapBar from '../components/RecapBar';


const ReservationHome = () => {
  return (
    <StyledReservationHome>
      <StyledTitle>Quand voulez vous manger ?</StyledTitle>
      <StyledCalendarGridWrapper>
        <CalendarGrid backgroundColor="#fff"/>
      </StyledCalendarGridWrapper>
      <StyledTitle>Combien de dwicheurs ?</StyledTitle>
      <StyledBookingCounterWrapper>
        <BookingCounter backgroundColor="#fff"/>
      </StyledBookingCounterWrapper>
      <StyledTitle>Où vous trouvez-vous ?</StyledTitle>
      <AutoCompleteGoogle backGroundColor="#fff"/>
      <RecapBar />
    </StyledReservationHome>
  )
}

const StyledReservationHome = styled.div`
  background-color: #fff62b;
  height: 100vh;
  flex-direction: column; 
  margin: 0;
  padding: 0;
  width: 100%
`

const StyledCalendarGridWrapper = styled.div`
  background-color: #fff62b;
  padding: 0 15px;
`;

const StyledBookingCounterWrapper = styled.div`
  background-color: #fff62b;
  padding: 0 15px;
`

const StyledTitle = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin: 10px 0 15px 15px;
  text-align: left;
`;

export default ReservationHome;