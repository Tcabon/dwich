import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';
import styled from 'styled-components';
import useUserDataReservation from '../hooks/useUserDataReservation';

function CalendarGrid() {
  const {selectedDate, setSelectedDate} = useUserDataReservation();

  const minDate = new Date();
  minDate.setDate(minDate.getDate());
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 180)

 const handleDateChange = (value) => {
  setSelectedDate(value);
 }

  return (
    <div>
      <h2>Veuillez Selectionnez un jour dans le calendrier</h2>
      <CalendarContainer>
        <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={minDate} // Utilisation de la date minimale j+3
            maxDate={maxDate} // Limite fixé a 180 jours
            defaultActiveStartDate={new Date()}
        />
      </CalendarContainer>
    </div>
  );
}

const CalendarContainer = styled.div`
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

  .react-calendar__month-view__weekdays__weekday {
    abbr[title] {
      text-decoration: none;
      color: #1A4133;
    }
  }
  button {
    border: none;
  }
  
  .react-calendar__tile {
    font-size: 1rem;
    color: #1A4133;
    background: none;
    font-weight: 400;
    &:disabled {
      opacity: 0.5;
    }
  }
  
  .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {
    background: #F2D621;
    color: #000;
    border-radius:3px;
    box-shadow: rgba(50, 50, 93, 0.125) 0px 5px 10px -5px, rgba(0, 0, 0, 0.15) 0px 5px 10px -5px;

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
    color: #1A4133;
  }
  
  .react-calendar__navigation button:disabled {
    background: none;
  }
`;

export default CalendarGrid;
