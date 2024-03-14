import React, { createContext, useMemo} from "react";
import useStateStorageWithDefault from "../hooks/useStateStorageWithDefault";

export const LunchContext = createContext();

const LunchContextProvider = ({children}) => {
  const [guestsList, setGuestsList] = useStateStorageWithDefault('sessionGuestsList', []);
  const [guestCount, setGuestCount] = useStateStorageWithDefault('sessionGuestCount', 0);

  const selectGuestInSplitOrder = (guestId) => {
    setGuestsList(guestsList.map(guest => (
      {...guest, isSelected: guest.userId === guestId ? true : false }
    )));
  };

  const findObjectsWithMatchingIds = () => {
    return assignedCartEntries.filter((obj1) =>
      selectedCartEntryIds.includes(obj1.cartEntryId)
    );
  };

  const assignMealsToGuest = (selectedOption) => {
    setGuestsList(guestsList.map((object) => {
        return { ...object, assignedCartEntries: [...findObjectsWithMatchingIds(), ...object.assignedCartEntries] };
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