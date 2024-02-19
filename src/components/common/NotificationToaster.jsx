import React from "react";
import styled from "styled-components";

const NotificationToaster = (props) => {
    const {content: ContentComponent, isNotificationOpen, setIsNotificationOpen, ...restProps} = props;
    return (
      <>
        {isNotificationOpen && (
          <StyledNotificationToaster>
            toto
          </StyledNotificationToaster>
        )}
      </>
    )
};

const StyledNotificationToaster = styled.div`
  position: fixed;
  bottom: 0;
  width: calc(100vw - 40px);
  background-color: red;
  color: white;
`;

export default NotificationToaster;

//<ContentComponent {...restProps} setIsNotificationOpen={setIsNotificationOpen}/>
