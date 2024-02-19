import React from "react";
import styled from "styled-components";

const Button = ({ action, Display }) => {

  return (
    <StyledWrapperButton onClick={action}>
      <Display />
    </StyledWrapperButton>
  )
}

const StyledWrapperButton = styled.button`
  width: 100%;
  margin: 10px 0 5px 0;
  height: 30px;
  background: linear-gradient(to right, #e39207, #9ACD32);
  border: none; /* Supprime la bordure */
  border-radius: 10px; /* Ajoute des coins arrondis */
  color: white;
`;

export default Button;