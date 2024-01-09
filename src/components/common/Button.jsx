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

`;

export default Button;