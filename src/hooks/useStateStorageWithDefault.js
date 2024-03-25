import React, { useEffect, useState } from "react";

const useStateStorage = (sessionKey, defaultValue) => {
  const [param, setParam] = useState(JSON.parse(sessionStorage.getItem(sessionKey)) || defaultValue)
  useEffect(() => {
    sessionStorage.setItem(sessionKey, param ? JSON.stringify(param) : JSON.stringify(defaultValue));
  }, [
    param,
  ]);
  return ([param, setParam]);
  
}

export default useStateStorage;