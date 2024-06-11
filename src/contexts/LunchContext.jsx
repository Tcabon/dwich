import React, { createContext, useEffect, useMemo} from "react";
import useStateStorageWithDefault from "../hooks/useStateStorageWithDefault";

export const LunchContext = createContext();

const LunchContextProvider = ({children}) => {
  const [guestsList, setGuestsList] = useStateStorageWithDefault('sessionGuestsList', []);
  const [guestCount, setGuestCount] = useStateStorageWithDefault('sessionGuestCount', 0);

  /*useEffect (() => {
    setTransformedCartEntries(transformCartEntries());
  }, [assignedCartEntries])*/

  const selectGuestInSplitOrder = (guestId) => {
    setGuestsList(guestsList.map(guest => (
      {...guest, isSelected: guest.userId === guestId ? true : false }
    )));
  };

  const assignMealsToGuest = (selectedCartEntries) => {
    setGuestsList(guestsList.map((object) => {
      if (object.isSelected) {
        return { ...object, assignedCartEntries: [...selectedCartEntries, ...object.assignedCartEntries] };
      }
      return object;
    }));
  };

  return (
    <LunchContext.Provider value={{
      guestsList,
      setGuestsList,
      guestCount,
      setGuestCount,
      selectGuestInSplitOrder,
      assignMealsToGuest,
    }}>
      {children}
    </LunchContext.Provider>
  )
}

export default LunchContextProvider