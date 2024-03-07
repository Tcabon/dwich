import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import NotificationToaster from "../common/NotificationToaster";
import useLunch from "../../hooks/useLunch";
import isCustomEmailValid from "../../methods/isCustomEmailValid";
import generateUniqueId from "../../methods/generateUniqueId";
import Button from "../common/Button";

const AddGuestsToOrder = () => {
  const { guestsList, setGuestsList, guestCount } = useLunch();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addGuestDisplay = () => {
    return (
      <div>
        Ajouter un convive
      </div>
    )
  };

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
    reset();
  };

  const handleDeleteGuest = (index) => {
    const updatedGuestsList = [...guestsList];
    updatedGuestsList.splice(index, 1);
    setGuestsList(updatedGuestsList);
  };

  return (
    <StyledAddGuestsToOrder>
      <StyledExistingGuestList>
        {guestsList.map((guest, index) => (
          <StyledExistingGuest key={index} $isDeletable={guest.isDeletable !== false}>
            {guest.isDeletable === false && (<StyledGuestName>{guest.firstName}</StyledGuestName>)}
            {guest.isDeletable !== false && (<StyledGuestName>{guest.name}</StyledGuestName>)}
            {guest.isDeletable !== false && (
              <StyledRemoveGuestButton onClick={() => handleDeleteGuest(index)}>X</StyledRemoveGuestButton>
            )}
          </StyledExistingGuest>
        ))}
      </StyledExistingGuestList>
      <StyledForm onSubmit={handleSubmit(handleAddGuest)}>
        <StyledInput placeholder='Nom' {...register("name", { required: true })} />
        <StyledInput
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
        <Button type="submit" Display={addGuestDisplay} />
      </StyledForm>
      <NotificationToaster isNotificationOpen={isNotificationOpen} setIsNotificationOpen={setIsNotificationOpen} />
    </StyledAddGuestsToOrder>
  )
};

const StyledAddGuestsToOrder = styled.div`
  
`;

const StyledExistingGuestList = styled.div`
  display: flex;
  margin: 20px 0;
`;

const StyledExistingGuest = styled.div`
  height: 30px;
  border: solid 1px black;
  margin-right: 15px;
  display: flex;
  align-items: center;
  background-color: ${props => props.$isDeletable ? "transparent" : "#e39207"}; /* Condition pour le fond orange */
  color: ${props => props.$isDeletable ? "black" : "white"};
  border: ${props => props.$isDeletable ? "solid 1px black" : "none"};
  border-radius: 5px;
`;

const StyledGuestName = styled.p`
  padding: 0 5px;
  font-size: 1.4em;
`;

const StyledRemoveGuestButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.2em;

`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  background-color: #f7f8f9;
  height: 35px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
`;

export default AddGuestsToOrder;