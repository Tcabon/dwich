import React from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

function Total({ cart }) {
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleConfirmOrder = async () => {
    const emailService = 'service_7nfumx7'; // Remplacez par votre Service ID EmailJS
    const template = 'order_confirmation'; // Remplacez par le nom de votre modèle EmailJS
    const templateParams = {
      to_email: 'thibaut.cabon@gmail.com',
      total_amount: totalAmount,
      cart_items: cart
    };

    try {
      //await emailjs.send(emailService, template, templateParams, import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID);
      navigate('/order-confirmation'); // Redirection vers la page de confirmation
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
  };

  return (
    <div className="total">
      <p>Total : {totalAmount} €</p>
      <button onClick={handleConfirmOrder}>Confirmer la commande</button>
    </div>
  );
}

export default Total;
