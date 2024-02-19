import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ConfirmOrder from '../common/ConfirmOrder';
import useUserDataReservation from '../../hooks/useUserDataReservation';


function Total({ cart, total }) {
  const navigate = useNavigate();
  const {guestCount, setGuestCount} = useUserDataReservation();
  
  // Vérifiez si cart existe (n'est pas null ou undefined)
  if (!cart) {
    return null; // Ou un autre rendu approprié si cart n'est pas défini
  }

  const handleSplitOrder = () => {
    navigate('/split-order');
  }

  return (
    <StyledTotal>
      <p>Total : {total} €</p>
      {guestCount.count > 1 && (
        <button onClick={handleSplitOrder}>Partager la commande</button>
      )}
      <ConfirmOrder emailTemplate='s_order_conf' />
    </StyledTotal>
  );
}

const StyledTotal = styled.div`

`

export default Total;
