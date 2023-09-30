import React from "react";
import styled from "styled-components";
import useCart from '../hooks/useCart';
import useStateStorage from "../hooks/useStateStorage";
import { useForm } from "react-hook-form";

const SplitOrder = () => {
  const [guestsList = [], setGuestsList] = useStateStorage('sessionGuestsList');
  const { cartEntries, total } = useCart();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm()

  const handleAddGuest = (data) => {
    setGuestsList([...guestsList, data]);
    console.log(guestsList)
    reset();
  };

  const handleDeleteGuest = (index) => {
    const updatedGuestsList = [...guestsList];
    updatedGuestsList.splice(index, 1);
    setGuestsList(updatedGuestsList);
  };

  const handleAddMealToGuest = () => {

  };

  const handleRemoveMealFromGuest = () => {

  };

  return (
    <StyledSplitOrder>
      <form onSubmit={handleSubmit(handleAddGuest)}>
        <input placeholder='Nom' {...register("name", {required: true})} />
        <input type='email' placeholder='email' {...register("email", {required: true})} />
        <input type='number' placeholder='Montant pris en charge' {...register("Amount", {required: true})}/>
        <button type='submit'>Ajouter</button>
      </form>
      <div>
        Guests Lists
        {guestsList.map((guest, index) => (
          <div key={index}>
            {guest.name}
            <button onClick={() => handleDeleteGuest(index)}>Supprimer</button>
          </div>
        ))}
      </div>
      =========
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
      CONFIRMER COMMANDE
    </StyledSplitOrder>
  )
};

const StyledSplitOrder = styled.div`

`

export default SplitOrder;