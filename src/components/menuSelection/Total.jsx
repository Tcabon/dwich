import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ConfirmOrder from '../common/ConfirmOrder';
import useUserDataReservation from '../../hooks/useUserDataReservation';
import Button from '../common/Button';

function Total({ cart, total }) {
  const navigate = useNavigate();
  const {guestCount, setGuestCount} = useUserDataReservation();
  
  const splitOrderDisplay = () => {
    return (
      <div>
        Payer individuellement
      </div>
    )
  };

  if (!cart) {
    return null;
  }

  const handleSplitOrder = () => {
    navigate('/split-order');
  }

  return (
    <StyledTotalWrapper>
      <StyledTotalCommand>
        <StyledTotalText>TOTAL</StyledTotalText>
        <StyledTotalAmount>{total}€</StyledTotalAmount>
      </StyledTotalCommand>
      <StyledButtonsWrapper>
        {guestCount.count > 1 && (
          <Button action={handleSplitOrder} Display={splitOrderDisplay}/>
        )}
        <ConfirmOrder emailTemplate='s_order_conf' />
      </StyledButtonsWrapper>
    </StyledTotalWrapper>
  );
}

const StyledTotalWrapper = styled.div`

`;

const StyledTotalCommand = styled.div`
  display: flex;
  height: 32px;
  margin-bottom: 20px;
  align-items: center;
`;

const StyledTotalText = styled.p`
  font-size: 1.6em;
`;

const StyledTotalAmount = styled.p`
  margin-left: auto;
  font-size: 2em;
  font-weight: 600;
`;

const StyledButtonsWrapper = styled.div`

`;

export default Total;
