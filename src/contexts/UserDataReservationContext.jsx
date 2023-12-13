import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useStateStorage from "../hooks/useStateStorage";
import useDateStateStorage from "../hooks/useDateStateStorage";

export const UserDataReservationContext = createContext();

const UserDataReservationContextProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useDateStateStorage('sessionSelectedDate')
  const [guestCount, setGuestCount] = useStateStorage('sessionGuestCount')
  const [town, setTown] = useStateStorage('sessionTown')
  const [dinnerHour, setDinnerHour] = useStateStorage('sessionDinnerHour')
  const [restaurantName, setRestaurantName] = useStateStorage('sessionRestaurantName')
  const navigate = useNavigate();

  const handleResetDataReservation = () => {
    console.log("reset");
    setSelectedDate(new Date());
    setGuestCount(null);
    setTown(null);
    setDinnerHour(null);
    setRestaurantName(null);
    navigate('/');
  };

  return (
    <UserDataReservationContext.Provider value={{
      selectedDate,
      setSelectedDate,
      guestCount,
      setGuestCount,
      town,
      setTown,
      dinnerHour,
      setDinnerHour,
      restaurantName,
      setRestaurantName,
      handleResetDataReservation,
    }}>
      {children}
    </UserDataReservationContext.Provider>
  )
};

export default UserDataReservationContextProvider;
