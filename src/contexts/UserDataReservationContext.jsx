import React, { createContext, useState, useEffect } from "react";

export const UserDataReservationContext = createContext();
  const UserDataReservationContextProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
      setSelectedDate(date);
    };
    return (
      <UserDataReservationContext.Provider value={{
          date: selectedDate,
          handleDateChange,
        }}>
            {children}
      </UserDataReservationContext.Provider>
    )
};

export default UserDataReservationContextProvider;