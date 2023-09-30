import React, { useEffect, useState } from "react";

const useStateStorage = (sessionKey) => {
  const [param, setParam] = useState(JSON.parse(sessionStorage.getItem(sessionKey)) || undefined)
  
  useEffect(() => {
    sessionStorage.setItem(sessionKey, param ? JSON.stringify(param) : null);
  }, [
    param,
  ]);

  return ([param, setParam]);
  
}

export default useStateStorage;