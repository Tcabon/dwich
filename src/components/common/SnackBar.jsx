import React from 'react';
import styled from 'styled-components';

const SnackBar = ({type, message}) => {
  console.log(message);
  return (
    <StyledSnackbarWrapper>
      <StyledMessage>{message}</StyledMessage>
    </StyledSnackbarWrapper>
  )
};

const StyledSnackbarWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 20px;
  width: calc(100% - 34px);
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #CF233A;
  border: solid 1px #871424;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
`;

const StyledMessage = styled.p`
  color: #FFF;
  font-size: 1.6em;
  font-weight: 600;
`;

export default SnackBar;