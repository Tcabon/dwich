import React, { useMemo, useState } from "react";
import styled from "styled-components";
import useCart from '../hooks/useCart';
import AddGuestsToOrder from "../components/splitOrder/AddGuestsToOrder";
import ModalToaster from "../components/common/ModalToaster";
import AssignMealsToGuests from "../components/splitOrder/AssignMealsToGuests";
import ConfirmOrder from "../components/common/ConfirmOrder";
import Button from "../components/common/Button";
import GuestMealChoice from "../components/splitOrder/GuestMealChoice";
import useLunch from "../hooks/useLunch";

const SplitOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartEntries } = useCart();
  const { guestsList } = useLunch();

  const assignedCartEntries = useMemo(() => cartEntries.reduce((acc, entry) => {
    if (guestsList.some((guest) => guest.assignedCartEntries.some((item) => item.cartEntryId === entry.cartEntryId))) {
      return acc;
    }
    return (
      [...acc, entry]
    )
  }, []),[cartEntries, guestsList])
  
  const addGuestDisplay = () => {
    return (
      <div>
        Ajouter un convive
      </div>
    )
  }

  return (
    <StyledSplitOrder >
      <StyledTitleWrapper>
        <StyledArrow>&#8249;</StyledArrow>
        <StyledH1>C'est pour qui ?</StyledH1>
      </StyledTitleWrapper>
      <StyledSelectGuestText>Sélectionnez un convive</StyledSelectGuestText>
      <StyledButtonWrapper>
        <Button action={() => setIsModalOpen(true)} Display={addGuestDisplay} />
      </StyledButtonWrapper>
      <GuestMealChoice assignedCartEntries={assignedCartEntries} />
      <ModalToaster title="Inviter quelqu'un" content={AddGuestsToOrder} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AssignMealsToGuests assignedCartEntries={assignedCartEntries} />
      {assignedCartEntries && assignedCartEntries.length == 0 && (
        <ConfirmOrder emailTemplate='s_order_conf_multi' />
      )}
    </StyledSplitOrder>
  )
};

const StyledSplitOrder = styled.div`
  
`;

const StyledH1 = styled.h1`
  font-size: 2.4em;
  font-weight: 600;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center
`;

const StyledArrow = styled.p`
  font-size: 4em;
  margin: 20px;
  transform: translateY(-4px);
`;

const StyledSelectGuestText = styled.p`
  text-align: left;
  margin: 0 0 15px 20px;
  font-size: 1.6em;
`;

const StyledButtonWrapper =  styled.div`
  margin: 0 20px;
`;

export default SplitOrder;