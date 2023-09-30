import React, { useEffect, useState } from "react";

const useDateStateStorage = (sessionKey) => {
  const [param, setParam] = useState(new Date(parseInt(sessionStorage.getItem(sessionKey))) || null)
  
  useEffect(() => {
    sessionStorage.setItem(sessionKey, param.getTime() || null)
  }, [
    param,
  ]);

  return ([param, setParam]);
  
}

export default useDateStateStorage;