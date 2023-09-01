import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarGrid({ onSelect }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [minSelectableDate, setMinSelectableDate] = useState(null);
  const [maxSelectableDate, setMaxSelectableDate] = useState(null);

  useEffect(() => {
    const today = new Date();
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setDate(today.getDate() + 3);
    maxDate.setDate(today.getDate() + 180)
    setMinSelectableDate(minDate);
    setMaxSelectableDate(maxDate);
  }, []);

  const handleDateChange = date => {
    setSelectedDate(date);
    onSelect(date); // Appel de la fonction onSelect passée en prop
  };

  return (
    <div>
      <h2>Veuillez Selectionnez un jour dans le calendrier</h2>
      <p>(Nous proposons des dates a j+3 minimum)</p>
      <Calendar 
        onChange={handleDateChange}
        value={selectedDate}
        minDate={minSelectableDate} // Utilisation de la date minimale j+3
        maxDate={maxSelectableDate} // Limite fixé a 180 jours
      />
      <p>Date sélectionnée : {selectedDate.toDateString()}</p>
    </div>
  );
}

export default CalendarGrid;