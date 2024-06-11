import React from "react";
import styled from "styled-components";
import useCart from '../../hooks/useCart';
import useUserDataReservation from "../../hooks/useUserDataReservation";
import { useNavigate } from 'react-router-dom';
import useLunch from "../../hooks/useLunch";
import Button from "./Button";
import { format } from "date-fns";
import { fr } from 'date-fns/locale';

const ConfirmOrder = () => {
  const { cartEntries, total } = useCart();
  const {
    selectedDate,
    guestCount,
    town,
    dinnerHour,
    restaurantName,
  } = useUserDataReservation();

  const selectedDateFormated = format(selectedDate, 'dd MMMMMMMMM yyyy', {locale:fr})
  const { guestsList } = useLunch();
  const navigate = useNavigate();

  const guestsListFormatter = () => {
    const res = guestsList.map((elem) => {
      const formattedCartEntries = elem.assignedCartEntries.map((el) => {
        return (`<p>${el.name}</p>`)
      })
      return (`<div><p>${elem.name} - ${elem.email}</p> <div>${formattedCartEntries}</div></div>`)
    }).join("");
    return (res);
  };

  const emailData = {
    toEmail: 'app.dwich@gmail.com',
    toName: 'Recipient Name',
    fromEmail: 'app.dwich@gmail.com',
    fromName: 'Sender Name',
    subject: 'Récapitulatif de votre commande',
    selectedDateFormated,
    guestCount,
    guestsList,
    town,
    dinnerHour,
    restaurantName,
    cartEntries,
    total,
  };

  const handleServiceConfirmOrder = async () => {
    guestsListFormatter();
    try {
      const response = await fetch('http://localhost:3000/send-service-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      const responseData = await response.json();
      navigate('/order-confirmation'); // Redirection vers la page de confirmation
      console.log('Email sent successfully:', responseData);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleUserConfirmOrder = async () => {
    try {
      for (const guest of guestsList) {
        // Créer les données spécifiques à cet invité
        const guestEmailData = {
          ...emailData,
          toEmail: guest.email,
          toName: `${guest.firstName} ${guest.name}`,
        };
        const response = await fetch('http://localhost:3000/send-customer-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(guestEmailData),
        });
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
        const responseData = await response.json();
        console.log('Email sent successfully to', guest.email, ':', responseData);
      }
      navigate('/order-confirmation'); // Redirection vers la page de confirmation
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleSendMails = async () => {
    await handleServiceConfirmOrder();
    await handleUserConfirmOrder();
  };

  const confirmOrderDisplay = () => {
    return (
      <div>
        Commander
      </div>
    )
  };

  return (
    <StyledConfirmOrder>
      <Button action={handleSendMails} Display={confirmOrderDisplay} />
    </StyledConfirmOrder>
  )
};

const StyledConfirmOrder = styled.div`
  margin-top: 16px;
  padding-bottom: 40px;
`;

export default ConfirmOrder;
