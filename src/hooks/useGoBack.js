import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const useGoBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasPreviousState = location.key !== "default";
  
  return () => {
    if (hasPreviousState) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
};

export default useGoBack;