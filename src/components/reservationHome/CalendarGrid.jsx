import { useState, useEffect } from 'react';
import { differenceInCalendarDays } from "date-fns"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/calendar.css';
import styled from 'styled-components';
import useUserDataReservation from '../../hooks/useUserDataReservation';

function CalendarGrid({ hasError, setSelectedDateError }) {
  const {selectedDate, setSelectedDate} = useUserDataReservation();

  const minDate = new Date();
  minDate.setDate(minDate.getDate());
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 180)
  const highlightedDates = [selectedDate];

  const isSameDay = (a, b) => {
    return differenceInCalendarDays(a, b) === 0;
  }

  function tileClassName({ date, view }) {
    if (
      view === "month" &&
      highlightedDates.find((dDate) => isSameDay(dDate, date))
    ) {
      return "highlight";
    }
  }

  const handleDateChange = (value) => {
    if (!value) {
      setSelectedDateError(true);
    } else {
      setSelectedDateError(false);
      setSelectedDate(value);
    }
  }

  return (
    <div>
      <StyledCalendarContainer $hasError={hasError}>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          minDate={minDate} // Utilisation de la date minimale j+3
          maxDate={maxDate} // Limite fixé a 180 jours
          defaultActiveStartDate={new Date()}
          tileClassName={tileClassName}
        />
      </StyledCalendarContainer>
    </div>
  );
}

const StyledCalendarContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  
  padding-bottom: 20px;
  border: 2px solid ${props => props.$hasError ? "red" : "transparent"};

  .react-calendar {
    border: none;
    background: none;
    width: 100%;
  }
  
  .react-calendar__navigation {
    .react-calendar__navigation button:disabled {
      background: none;
    }
  }

  .react-calendar__navigation__prev2-button, .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__navigation button {
    font-size: 1.5rem;
    color: black; /* Couleur noire */
  }

  .react-calendar__month-view__weekdays__weekday {
    abbr[title] {
      text-decoration: none;
      color: #000;
      font-size: 1.5em;
    }
  }
  button {
    border: none;
  }
  
  .react-calendar__tile {
    font-size: 1rem;
    color: #000;
    font-weight: 400;
    display: flex;
    justify-content: center;
    padding: 3px 0 3px 0;
    abbr {
      display: grid;
      width: 40px;
      height: 40px;
      aspect-ratio: 1/1;
      place-content: center;
      border-color: #ccc;
      border-style: solid;
      border-width: 1px;
      border-radius: 100%;
    }
    &:disabled {
      opacity: 0.5;
      abbr {
        border: none;
      }
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    abbr {
      border: none;
      opacity: 0.5;
    }
  }
  
  .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus, .highlight {
    background: none;
    abbr {
      opacity: 1;
      background: #e39207;
      color: #fff;
      font-weight: 600;
      border: none;
      border-radius: 100%;
      box-shadow: rgba(50, 50, 93, 0.125) 0px 5px 10px -5px, rgba(0, 0, 0, 0.15) 0px 5px 10px -5px;
    }
  }

  .react-calendar__tile:disabled {
    background: none;
  }
  
  .react-calendar__navigation__label__labelText {
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    
  }

  .react-calendar__navigation button {
    font-size: 1.5rem;
    color: #000;
  }
  
  .react-calendar__navigation button:disabled {
    background: none;
  }

  .react-calendar__tile--now {
    background: none;
  }
`
export default CalendarGrid;
