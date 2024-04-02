import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserDataReservation from "@/hooks/useUserDataReservation";
import styled from 'styled-components';
import confirmOrderImage from '@/assets/images/confirmOrderImage.png';
import thumbsCircleImage from '@/assets/images/thumbsCircleImage.png';
import Button from '@/components/common/Button';

function OrderConfirmation() {
  const navigate = useNavigate();
  const { dinnerHour, handleResetDataReservation } = useUserDataReservation();

  const handleClick = () => {
    handleResetDataReservation();
    navigate('/');
  };

  const returnHomeDisplay = () => {
    return (
      <div>
        Retourner à l'accueil
      </div>
    )
  }

  return (

    <StyledOrderConfirmation>
      <StyledImageContainer><StyledImage src={confirmOrderImage}/></StyledImageContainer>
      <StyledCommandConfirmationText>Confirmation de commande #1234</StyledCommandConfirmationText>
      <StyledEmailSendText>Vous receverez dans quelques minutes un e-mail de confirmation du restaurant. </StyledEmailSendText>
      <StyledRecapPart>
        <StyledRecapHour>Payer avant {dinnerHour}</StyledRecapHour>
        <StyledRecapText>Chaque convive va recevoir sur son adresse e-mail un lien de paiement qui générera un QR code à montrer au restaurateur</StyledRecapText>
      </StyledRecapPart>
      <StyledReminderText>IMPORTANT. Tout manquement au paiement de l’intégralité des invités entrainera l’annulation de la reservation et le remboursement des paiements</StyledReminderText>
      <Button action={handleClick} Display={returnHomeDisplay} />
    </StyledOrderConfirmation>
  );
}

const StyledOrderConfirmation = styled.div `
  align-item: center;
  margin: 0 16px;
  padding-bottom: 16px;
`;

const StyledImageContainer = styled.div`
  width: 175px;
  height: 175px;
  margin: 0 auto 16px auto;
`;

const StyledImage = styled.img`
  width: 175px;
  height: 175px;
  
`;

const StyledCommandConfirmationText = styled.p`
  display: flex;
  height: 36px;
  align-items: center;
  justify-content: center;
  margin: 0 0 8px 0;
  font-size: 2em;
  font-weight: 700;
`;

const StyledEmailSendText = styled.p`
  height: 48px;
  line-height: 24px;
  margin-bottom: 24px;
  font-size: 1.6em;
`;

const StyledRecapPart = styled.div`
  background-color: #FFF;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;

const StyledRecapHourPart = styled.div`

`;

const StyledRecapHour = styled.div`
  height: 36px;
  line-height: 36px;
  font-size: 2em;
  font-weight: 700;
`;

const StyledThumbsCircleImage = styled.div`
  height: 36px;
`;

const StyledRecapText = styled.p`
  height: 96px;
  line-height: 24px;
  font-size: 1.6em;
  text-align: left;
`;

const StyledReminderText = styled.p`
  height: 60px;
  line-height: 20px;
  margin-bottom: 46px;
  font-size: 1.2em;
  text-align: left;
`;

export default OrderConfirmation;