import React, { useContext } from "react";
import { LunchContext } from "../contexts/LunchContext";

const useLunch = () => {
    return useContext(LunchContext);
};

export default useLunch;