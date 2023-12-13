import React, { createContext, useMemo} from "react";
import useStateStorageWithDefault from "../hooks/useStateStorageWithDefault";

export const LunchContext = createContext();

const LunchContextProvider = ({children}) => {
  const [guestsList, setGuestsList] = useStateStorageWithDefault('sessionGuestsList', []);


  return (
    <LunchContext.Provider value={{
      guestsList,
      setGuestsList,
    }}>
      {children}
    </LunchContext.Provider>
  )
}

export default LunchContextProvider