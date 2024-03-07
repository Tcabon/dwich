import React, { createContext, useState, useEffect } from "react";
import useStateStorage from "../hooks/useStateStorage";
import useDateStateStorage from "../hooks/useDateStateStorage";
import useCart from "../hooks/useCart";
import useStateStorageWithDefault from "../hooks/useStateStorageWithDefault";
import useLunch from "../hooks/useLunch";

export const UserDataReservationContext = createContext();

const UserDataReservationContextProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useDateStateStorage('sessionSelectedDate');
  const [guestCount, setGuestCount] = useStateStorageWithDefault('sessionGuestCount', 0);
  const [town, setTown] = useStateStorage('sessionTown');
  const [dinnerHour, setDinnerHour] = useStateStorage('sessionDinnerHour');
  const [restaurantName, setRestaurantName] = useStateStorage('sessionRestaurantName');
  const { setGuestsList } = useLunch();
  const {setCartEntries} = useCart();

  const handleResetDataReservation = () => {
    setGuestsList([]);
    setSelectedDate(new Date());
    setGuestCount(0);
    setTown(null);
    setDinnerHour(null);
    setRestaurantName(null);
    setCartEntries([]);
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
