import React, { useEffect, useState } from "react";

const useDateStateStorage = (sessionKey) => {
  const [param, setParam] = useState(sessionStorage.getItem(sessionKey) ? new Date(parseInt(sessionStorage.getItem(sessionKey))) : new Date())
  useEffect(() => {
    sessionStorage.setItem(sessionKey, param.getTime() || null)
  }, [
    param,
  ]);
  return ([param, setParam]);
  
}

export default useDateStateStorage;