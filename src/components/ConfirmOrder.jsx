import React from "react";
import emailjs from 'emailjs-com';
import styled from "styled-components";
import useCart from '../hooks/useCart';
import useUserDataReservation from "../hooks/useUserDataReservation";
import { useNavigate } from 'react-router-dom';
import useLunch from "../hooks/useLunch";

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

  const handleServiceConfirmOrder = async () => {
    const templateParams = {
      to_email: 'app.dwich@gmail.com',
      total_amount: totalAmount,
      cart_items: JSON.stringify(cartEntries),
      guests_list: JSON.stringify(guestsList),
      date: selectedDate,
      guest_count: guestCount.label,
      town,
      dinner_hour: dinnerHour,
      restaurant_name: restaurantName,
    };

    try {
      //await emailjs.send(emailService, template, templateParams, import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID);
      navigate('/order-confirmation'); // Redirection vers la page de confirmation
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
  };

  const handleUserConfirmOrder = async () => {
    const hostEmail = guestsList.find(elem => elem.isHost === true).email;
    const templateParams = {
      to_email: hostEmail,
      total_amount: totalAmount,
      cart_items: JSON.stringify(cartEntries),
      guests_list: JSON.stringify(guestsList),
      date: selectedDate,
      guest_count: guestCount.label,
      town,
      dinner_hour: dinnerHour,
      restaurant_name: restaurantName,
    };
    try {
      //await emailjs.send(emailService, 's_order_conf', templateParams, import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID);
      navigate('/order-confirmation'); // Redirection vers la page de confirmation
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
  }

  const handleSendMails = async () => {
    await handleServiceConfirmOrder();
    await handleUserConfirmOrder();
    await handleResetDataReservation();
  }

  return (
    <StyledConfirmOrder>
      <button onClick={handleSendMails}>Confirmer la commande</button>
    </StyledConfirmOrder>
  )
};

const StyledConfirmOrder = styled.div`

`

export default ConfirmOrder;