import React from "react";
import emailjs from 'emailjs-com';
import styled from "styled-components";
import useCart from '../../hooks/useCart';
import useUserDataReservation from "../../hooks/useUserDataReservation";
import { useNavigate } from 'react-router-dom';
import useLunch from "../../hooks/useLunch";
import Button from "./Button";

const ConfirmOrder = ({ emailTemplate }) => {
  const { cartEntries, total } = useCart();
  const {
    selectedDate,
    guestCount,
    town,
    dinnerHour,
    restaurantName,
    handleResetDataReservation,
  } = useUserDataReservation();

  const { guestsList } = useLunch();
  const totalAmount = total;
  const navigate = useNavigate();
  const template = emailTemplate;
  const emailService = import.meta.env.VITE_EMAILJS_SERVICE_ID;

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
    subject: 'Test Email from Vite App',
    htmlPart: '<p>This is a <strong>HTML</strong> part of the email.</p>',
  };

  const handleServiceConfirmOrder = async () => {
    guestsListFormatter();
    try {
      const response = await fetch('http://localhost:3000/send-email', {
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
    const hostEmail = guestsList.find(elem => elem.isHost === true).email;
    try {
      const response = await fetch('http://localhost:3000/send-email', {
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
