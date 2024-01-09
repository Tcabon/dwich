import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useCart from '../hooks/useCart';
import useStateStorageWithDefault from "../hooks/useStateStorageWithDefault";
import AddGuestsToOrder from "../components/AddGuestsToOrder";
import ModalToaster from "../components/ModalToaster";
import AssignMealsToGuests from "../components/AssignMealsToGuests";
import ConfirmOrder from "../components/ConfirmOrder";

const SplitOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartEntries } = useCart();
  const [assignedCartEntries, setAssignedCartEntries] = useStateStorageWithDefault('sessionAssignedCartEntries', cartEntries);

  return (
    <StyledSplitOrder>
      <button onClick={() => setIsModalOpen(true)}>Ajouter ou retirer Convives</button>
      <ModalToaster title='Ajouter Convives' content={AddGuestsToOrder} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AssignMealsToGuests assignedCartEntries={assignedCartEntries} setAssignedCartEntries={setAssignedCartEntries} />
      {assignedCartEntries && assignedCartEntries.length == 0 && (
        <ConfirmOrder emailTemplate='s_order_conf_multi' />
      )}
    </StyledSplitOrder>
  )
};

const StyledSplitOrder = styled.div`

`

export default SplitOrder;