import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function OrderConfirmation() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <StyledOrderConfirmation className="order-confirmation">
      <h2>Confirmation de commande</h2>
      <p>Merci pour votre commande ! Un e-mail de confirmation vous a été envoyé.</p>
      <StyledButton onClick={() => handleClick()} >
        Retour à la page d'accueil
      </StyledButton>
    </StyledOrderConfirmation>
  );
}

const StyledOrderConfirmation = styled.div `

`;

const StyledButton = styled.button`

`;

export default OrderConfirmation;