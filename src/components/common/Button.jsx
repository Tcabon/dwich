import React from "react";
import styled from "styled-components";

const Button = ({type, action, Display, status }) => {
  console.log(status);
  return (
    <StyledWrapperButton type={type} onClick={action} $status={status} >
      <Display />
    </StyledWrapperButton>
  )
}

const StyledWrapperButton = styled.button`
  display: flex;
  width: 100%;
  height: 54px;
  padding: 20px 0;
  background: ${props => props.$status === 'disabled' ? 'linear-gradient(to right, #D5D5D5, #EEE)' : 'linear-gradient(to right, #e39207, #9ACD32)'};
  border: none;
  border-radius: 8px;
  color: ${props => props.$status === 'disabled' ? '#4a535c' : '#FFF'};
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 16px rgba(81, 0, 163, 0.3);
  font-size: 1.6em;
  font-weight: 700;
`;

export default Button;