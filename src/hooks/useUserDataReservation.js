import React, { useContext } from "react";
import { UserDataReservationContext } from "../contexts/UserDataReservationContext";

const useUserDataReservation = () => {
    return useContext(UserDataReservationContext)
}

export default useUserDataReservation