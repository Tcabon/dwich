import React, { createContext, useState, useEffect } from "react";

export const UserDataReservationContext = createContext();
  const UserDataReservationContextProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isSelected, setIsSelected] = useState(false);

    const handleDateChange = date => {
      setSelectedDate(date);
      setIsSelected(true);
    };

    return (
      <UserDataReservationContext.Provider value={{
          date: selectedDate,
          isSelected,
          setIsSelected,
          handleDateChange,
        }}>
            {children}
      </UserDataReservationContext.Provider>
    )
};

export default UserDataReservationContextProvider;
