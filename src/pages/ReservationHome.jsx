import React, { useState } from 'react'
import CalendarGrid from '../components/reservationHome/CalendarGrid'
import '../App.css';
import styled from 'styled-components';
import BookingCounter from '../components/reservationHome/BookingCounter';
import AutoCompleteGoogle from '../components/reservationHome/AutoCompleteGoogle'
import RecapBar from '../components/common/RecapBar';
import Button from '../components/common/Button';
import useUserDataReservation from '../hooks/useUserDataReservation';
import { useNavigate } from 'react-router-dom';


const ReservationHome = () => {
  const navigate = useNavigate();
  const {selectedDate, guestCount, town} = useUserDataReservation();
  const [selectedDateError, setSelectedDateError] = useState(false);
  const [guestCountError, setGuestCountError] = useState(false);
  const [townError, setTownError] = useState(false);

  const SubmitDisplay = () => {
    return (
      <div>
        Envoyer
      </div>
    )
  }

  const handleButtonClick = () => {
    if (!selectedDate) {
      setSelectedDateError(true)
    }
    if (!guestCount) {
      setGuestCountError(true);
    }
    if (!town) {
      setTownError(true);
    }
    /*if (town && guestCount) {
      navigate(`/restaurants-list/${town}`);
    }*/
    if (guestCount) {
      navigate(`/restaurants-list/92100`);
    }
  };
  
  return (
    <StyledReservationHome>
      <StyledTitle>Quand voulez vous manger ?</StyledTitle>
      <StyledCalendarGridWrapper>
        <CalendarGrid hasError={selectedDateError} setSelectedDateError={setSelectedDateError}/>
      </StyledCalendarGridWrapper>
      <StyledTitle>Combien de dwicheurs ?</StyledTitle>
      <StyledBookingCounterWrapper>
        <BookingCounter hasError={guestCountError} setGuestCountError={setGuestCountError} />
      </StyledBookingCounterWrapper>
      <StyledTitle>Où vous trouvez-vous ?</StyledTitle>
      <AutoCompleteGoogle hasError={townError} setTownError={setTownError} />
      <StyledButtonContainer>
        <Button action={handleButtonClick} Display={SubmitDisplay} />
      </StyledButtonContainer>
      <RecapBar />
    </StyledReservationHome>
  )
}

const StyledReservationHome = styled.div`
  background-color: #fff62b;
  height: 106vh;
  flex-direction: column; 
  margin: 0;
  padding: 0;
  width: 100%;
  padding-bottom: 180px;
`

const StyledCalendarGridWrapper = styled.div`
  background-color: #fff62b;
  padding: 0 16px;
`;

const StyledBookingCounterWrapper = styled.div`
  background-color: #fff62b;
  padding: 0 16px;
`

const StyledTitle = styled.h1`
  font-size: 2.2em;
  font-weight: 700;
  margin: 22px 0 22px 16px;
  text-align: left;
`;

const StyledButtonContainer = styled.div`
  padding: 0 16px 0 16px;
`;

export default ReservationHome;