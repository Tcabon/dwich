import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import NotificationToaster from "./NotificationToaster";
import useLunch from "../hooks/useLunch";
import isCustomEmailValid from "../methods/isCustomEmailValid";
import generateUniqueId from "../methods/generateUniqueId";

const AddGuestsToOrder = () => {
  const { guestsList, setGuestsList, guestCount } = useLunch();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddGuest = (data) => {
    if (errors.email) {
      // Afficher un message à l'utilisateur si l'e-mail n'est pas valide
      console.log(errors.email.message);
      return;
    }
    data.userId = generateUniqueId();
    data.isDeletable = true;
    data.assignedCartEntries = [];
    setGuestsList([...guestsList, data]);
    console.log(guestsList)
    reset();
  };

  const handleDeleteGuest = (index) => {
    const updatedGuestsList = [...guestsList];
    updatedGuestsList.splice(index, 1);
    setGuestsList(updatedGuestsList);
  };

  return (
    <StyledAddGuestsToOrder>
      {guestsList.map((guest, index) => (
        <div key={index}>
          {guest.name}
          {guest.isDeletable !== false && (
            <button onClick={() => handleDeleteGuest(index)}>Supprimer</button>
          )}
        </div>
      ))}
      <StyledForm onSubmit={handleSubmit(handleAddGuest)}>
        <input placeholder='Nom' {...register("name", { required: true })} />
        <input
          type='email'
          placeholder='email'
          {...register("email", {
            required: true,
            validate: isCustomEmailValid, // Utilisation de la validation personnalisée
          })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
        <button type='submit'>Ajouter</button>
      </StyledForm>
      <NotificationToaster isNotificationOpen={isNotificationOpen} setIsNotificationOpen={setIsNotificationOpen} />
    </StyledAddGuestsToOrder>
  )
};

const StyledAddGuestsToOrder = styled.div`
  
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default AddGuestsToOrder;