import React from "react";
import emailjs from 'emailjs-com';
import styled from "styled-components";
import useCart from '../hooks/useCart';
import useUserDataReservation from "../hooks/useUserDataReservation";
import { useNavigate } from 'react-router-dom';
import useLunch from "../hooks/useLunch";

const ConfirmOrder = ({ template }) => {
  const { cartEntries, total } = useCart();
  const { selectedDate, guestCount, town, dinnerHour, restaurantName } = useUserDataReservation();
  const {guestsList, setGuestsList} = useLunch();
  const totalAmount = total;
  const navigate = useNavigate();
  console.log(restaurantName);
  const handleConfirmOrder = async () => {
    const emailService = 'service_7nfumx7'; // Remplacez par votre Service ID EmailJS
    const templateParams = {
      to_email: 'app.dwich@gmail.com',
      total_amount: totalAmount,
      cart_items: JSON.stringify(cartEntries),
      guests_list: JSON.stringify(guestsList),
      date: selectedDate,
      guest_count: guestCount,
      town,
      dinner_hour: dinnerHour,
      restaurant_name: restaurantName,
    };

    try {
      await emailjs.send(emailService, template, templateParams, import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID);
      navigate('/order-confirmation'); // Redirection vers la page de confirmation
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
  };

  return (
    <StyledConfirmOrder>
      <button onClick={handleConfirmOrder}>Confirmer la commande</button>
    </StyledConfirmOrder>
  )
};

const StyledConfirmOrder = styled.div`

`

export default ConfirmOrder;