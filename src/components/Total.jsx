import React from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import useUserDataReservation from '../hooks/useUserDataReservation';

function Total({ cart, total }) {
  const navigate = useNavigate();
  
  // Vérifiez si cart existe (n'est pas null ou undefined)
  if (!cart) {
    return null; // Ou un autre rendu approprié si cart n'est pas défini
  }
  const totalAmount = total;
  const { date, guestCount, town, dinnerHour } = useUserDataReservation();

  const handleConfirmOrder = async () => {
    const emailService = 'service_7nfumx7'; // Remplacez par votre Service ID EmailJS
    const template = 'order_confirmation'; // Remplacez par le nom de votre modèle EmailJS
    const templateParams = {
      to_email: 'thibaut.cabon@gmail.com',
      total_amount: totalAmount,
      cart_items: JSON.stringify(cart),
      date,
      guestCount,
      town,
      dinnerHour
    };

    try {
      //await emailjs.send(emailService, template, templateParams, import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID);
      navigate('/order-confirmation'); // Redirection vers la page de confirmation
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
  };

  const handleSplitOrder = () => {
    navigate('/split-order');
  }

  return (
    <div className="total">
      <p>Total : {totalAmount} €</p>
      <button onClick={handleSplitOrder}>Partager la commande</button>
      <button onClick={handleConfirmOrder}>Confirmer la commande</button>
    </div>
  );
}

export default Total;
