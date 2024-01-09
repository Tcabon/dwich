import React, { createContext, useMemo} from "react";
import useStateStorageWithDefault from "../hooks/useStateStorageWithDefault";

export const LunchContext = createContext();

const LunchContextProvider = ({children}) => {
  const [guestsList, setGuestsList] = useStateStorageWithDefault('sessionGuestsList', []);
  const [guestCount, setGuestCount] = useStateStorageWithDefault('sessionGuestCount', 0);

  return (
    <LunchContext.Provider value={{
      guestsList,
      setGuestsList,
      guestCount,
      setGuestCount,
    }}>
      {children}
    </LunchContext.Provider>
  )
}

export default LunchContextProvider