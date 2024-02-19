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
  const {guestCount, town} = useUserDataReservation();
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
    if (!guestCount) {
      setGuestCountError(true);
    }
    if (!town) {
      setTownError(true);
    }
    if (town && guestCount) {
      navigate(`/restaurants-list/${town}`);
    }
  };

  return (
    <StyledReservationHome>
      <StyledTitle>Quand voulez vous manger ?</StyledTitle>
      <StyledCalendarGridWrapper>
        <CalendarGrid backgroundColor="#fff"/>
      </StyledCalendarGridWrapper>
      <StyledTitle>Combien de dwicheurs ?</StyledTitle>
      <StyledBookingCounterWrapper>
        <BookingCounter hasError={guestCountError} setGuestCountError={setGuestCountError} />
      </StyledBookingCounterWrapper>
      <StyledTitle>Où vous trouvez-vous ?</StyledTitle>
      <AutoCompleteGoogle hasError={townError} setTownError={setTownError} />
      <Button action={handleButtonClick} Display={SubmitDisplay} />
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
  margin: 20px 0 20px 15px;
  text-align: left;
`;

export default ReservationHome;