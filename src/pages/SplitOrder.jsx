import React, { useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import useCart from '../hooks/useCart';
import AddGuestsToOrder from "../components/splitOrder/AddGuestsToOrder";
import ModalToaster from "../components/common/ModalToaster";
import AssignMealsToGuests from "../components/splitOrder/AssignMealsToGuests";
import ConfirmOrder from "../components/common/ConfirmOrder";
import Button from "../components/common/Button";
import GuestMealChoice from "../components/splitOrder/GuestMealChoice";
import useLunch from "../hooks/useLunch";
import backArrow from '@/assets/icons/backArrow.png';

const SplitOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartEntries } = useCart();
  const { guestsList } = useLunch();
  const navigate = useNavigate();

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
  };

  const handlePreviousButtonClick = () => {
    navigate(-1);
  };

  return (
    <StyledSplitOrder >
      <StyledPageHeader>
        <StyledButtonContainer>
          <StyledPreviousButton onClick={() => handlePreviousButtonClick()}><StyledImage src={backArrow} /></StyledPreviousButton>
        </StyledButtonContainer>
        <StyledTitle>C'est pour qui ?</StyledTitle>
      </StyledPageHeader>
      <StyledGuestSection>
        <StyledSelectGuestText>Sélectionnez un convive</StyledSelectGuestText>
        <StyledButtonWrapper>
          <Button action={() => setIsModalOpen(true)} Display={addGuestDisplay} />
        </StyledButtonWrapper>
        <GuestMealChoice assignedCartEntries={assignedCartEntries} />
      </StyledGuestSection>
      <ModalToaster title="Inviter quelqu'un" content={AddGuestsToOrder} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AssignMealsToGuests assignedCartEntries={assignedCartEntries} />
      {assignedCartEntries && assignedCartEntries.length == 0 && (
        <ConfirmOrder emailTemplate='s_order_conf_multi' />
      )}
    </StyledSplitOrder>
  )
};

const StyledSplitOrder = styled.div`
  padding: 0 16px;
`;

const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  margin-bottom: 16px;
`;

const StyledButtonContainer = styled.div`

`;

const StyledPreviousButton = styled.button`
  line-height: 0;
`;

const StyledImage = styled.img`
  height: 30px;
`;

const StyledTitle = styled.p`
  font-size: 2.2em;
  font-weight: 700;
`;

const StyledGuestSection = styled.div`
  margin-bottom: 16px;
`;

const StyledSelectGuestText = styled.p`
  display: flex;
  height: 36px;
  text-align: left;
  align-items: center;
  font-size: 2em;
  margin-bottom: 24px;
`;

const StyledButtonWrapper =  styled.div`
  margin-bottom: 24px;
`;

export default SplitOrder;