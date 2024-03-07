import React, { useState } from "react";
import styled from "styled-components";

const ModalToaster = (props) => {
  const {title, content: ContentComponent, isModalOpen, setIsModalOpen, ...restProps} = props;
  return (
    <>
    {isModalOpen &&
      <>
        <StyledOverlay />
        <StyledModalToaster>
          <StyledModalToasterHeader>
            <StyledHeaderTitle>{title}</StyledHeaderTitle>
            <StyledCloseButton onClick={() => setIsModalOpen(false)}>X</StyledCloseButton>
          </StyledModalToasterHeader>
          <ContentComponent {...restProps} setIsModalOpen={setIsModalOpen}/>
        </StyledModalToaster>
      </>
}</>)
};

const StyledOverlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0 , 0, 0.3);
  top: 0;
  left: 0;
`;

const StyledModalToaster = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 80px);
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  z-index: 200;
`;

const StyledModalToasterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledHeaderTitle = styled.p`
  font-size: 1.5em;
  font-weight: 600;
`;

const StyledCloseButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
`;

export default ModalToaster;