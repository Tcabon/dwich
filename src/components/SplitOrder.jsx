import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import styled from "styled-components";
import useCart from '../hooks/useCart';
import useStateStorageWithDefault from "../hooks/useStateStorageWithDefault";
import { useForm } from "react-hook-form";
import AddGuestsToOrder from "./AddGuestsToOrder";
import ModalToaster from "./ModalToaster";
import AssignMealsToGuests from "./AssignMealsToGuests";
import useUserDataReservation from "../hooks/useUserDataReservation";
import { useNavigate } from 'react-router-dom';

const SplitOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartEntries, total } = useCart();
  const [assignedCartEntries, setAssignedCartEntries] = useStateStorageWithDefault('sessionAssignedCartEntries', cartEntries);
  const { selectedDate, guestCount, town, dinnerHour } = useUserDataReservation();
  const [guestsList, setGuestsList] = useStateStorageWithDefault('sessionGuestsList', []);
  const totalAmount = total;
  const navigate = useNavigate();
  console.log(assignedCartEntries);
  const handleConfirmOrder = async () => {
    const emailService = 'service_7nfumx7'; // Remplacez par votre Service ID EmailJS
    const template = 'order_confirmation_multi'; // Remplacez par le nom de votre modèle EmailJS
    const templateParams = {
      to_email: 'thibaut.cabon@gmail.com',
      total_amount: totalAmount,
      cart_items: JSON.stringify(cartEntries),
      guests_list: JSON.stringify(guestsList),
      date: selectedDate,
      guestCount,
      town,
      dinnerHour,
    };

    try {
      //await emailjs.send(emailService, template, templateParams, import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID);
      navigate('/order-confirmation'); // Redirection vers la page de confirmation
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
  };

  return (
    <StyledSplitOrder>
      <button onClick={() => setIsModalOpen(true)}>Ajouter Convives</button>
      <ModalToaster title='Ajouter Convives' content={AddGuestsToOrder} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AssignMealsToGuests assignedCartEntries={assignedCartEntries} setAssignedCartEntries={setAssignedCartEntries} />
      {assignedCartEntries && assignedCartEntries.length == 0 && (
        <button onClick={handleConfirmOrder}>Confirmer la commande</button>
      )}
    </StyledSplitOrder>
  )
};

const StyledSplitOrder = styled.div`

`

export default SplitOrder;

/*=========
      =========
      CONVIVES
        ajouter convive
          champ email,
          champ nom,
        Liste CONVIVES
          afficher convives
            afficher panier convive
              supprimer contenu panier convive
            Supprimer convive
      LISTE PLATS
        Afficher plat
          bouton ajouter plat convive
      CONFIRMER COMMANDE*/