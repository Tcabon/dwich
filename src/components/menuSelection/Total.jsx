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
        <StyledTotalText>Total :</StyledTotalText>
        <StyledTotalAmount>{total}€</StyledTotalAmount>
      </StyledTotalCommand>
      {guestCount.count > 1 && (
        <Button action={handleSplitOrder} Display={splitOrderDisplay}/>
      )}
      <ConfirmOrder emailTemplate='s_order_conf' />
    </StyledTotalWrapper>
  );
}

const StyledTotalWrapper = styled.div`

`;

const StyledTotalCommand = styled.div`
  display: flex;
  margin-top: 10px;
  font-weight: 600;
`;

const StyledTotalText = styled.p`
  font-size: 1.2em;
`;

const StyledTotalAmount = styled.p`
  margin-left: auto;
  font-size: 1.5em;
`;

export default Total;
