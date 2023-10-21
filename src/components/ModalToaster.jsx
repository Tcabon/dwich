import React, { useState } from "react";
import styled from "styled-components";

const ModalToaster = (props) => {
  const {title, content: ContentComponent, isModalOpen, setIsModalOpen, ...restProps} = props;
  return (
    <>
    {isModalOpen &&
      <StyledModalToaster>
          <button onClick={() => setIsModalOpen(false)}></button>
            {title}
            <ContentComponent {...restProps} setIsModalOpen={setIsModalOpen}/>
        </StyledModalToaster>
}</>)
};

const StyledModalToaster = styled.div`
  position: fixed;
  bottom: 0;
  width: calc(100vw - 40px);
  padding: 20px;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  left: 0;
  z-index: 200;
`;

export default ModalToaster;