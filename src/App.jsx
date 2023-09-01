import React, { useState } from 'react'
import CalendarGrid from './components/CalendarGrid'
import RestaurantList from './components/RestaurantList';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <div>
        <h1>Bienvenue chez Dwich !!!</h1>
        <CalendarGrid onSelect={handleDateSelect} />
        {selectedDate && <RestaurantList selectedDate={selectedDate}/>}
      </div>
    </>
  )
}

export default App
