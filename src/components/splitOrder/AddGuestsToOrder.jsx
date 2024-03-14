import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import NotificationToaster from "../common/NotificationToaster";
import useLunch from "../../hooks/useLunch";
import isCustomEmailValid from "../../methods/isCustomEmailValid";
import generateUniqueId from "../../methods/generateUniqueId";
import Button from "../common/Button";
import crossIcon from '@/assets/icons/crossIcon.png';

const AddGuestsToOrder = () => {
  const { guestsList, setGuestsList, guestCount } = useLunch();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [maximumGuestsError, setMaximumGuestsError] = useState(false);

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
    console.log(guestsList.length);
    console.log(guestCount.count);
    if (guestsList.length === guestCount.count) {
      setMaximumGuestsError(true);
      console.log(maximumGuestsError);
      return;
    }
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
              <StyledRemoveGuestButton onClick={() => handleDeleteGuest(index)}><StyledImage src={crossIcon} /></StyledRemoveGuestButton>
            )}
          </StyledExistingGuest>
        ))}
      </StyledExistingGuestList>
      <StyledForm onSubmit={handleSubmit(handleAddGuest)}>
        <StyledInput placeholder='Prénom' {...register("name", { required: true })} />
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
        {maximumGuestsError && 
          <StyledMaximumGuestsError>Vous avez déjà ajouter le nombre de personnes que vous aviez choisis précedemment.</StyledMaximumGuestsError>
        }
        <Button type="submit" Display={addGuestDisplay} />
      </StyledForm>
      <NotificationToaster isNotificationOpen={isNotificationOpen} setIsNotificationOpen={setIsNotificationOpen} />
    </StyledAddGuestsToOrder>
  )
};

const StyledAddGuestsToOrder = styled.div`
  padding: 0 8px;
`;

const StyledExistingGuestList = styled.div`
  display: flex;
  margin: 0 0 24px 0;
  flex-wrap: wrap;
`;

const StyledExistingGuest = styled.div`
  height: 32px;
  border: solid 1px black;
  margin-right: 16px;
  display: flex;
  align-items: center;
  background-color: ${props => props.$isDeletable ? "transparent" : "#e39207"}; /* Condition pour le fond orange */
  color: ${props => props.$isDeletable ? "black" : "white"};
  border: ${props => props.$isDeletable ? "solid 1px black" : "none"};
  border-radius: 5px;
`;

const StyledGuestName = styled.p`
  padding: 0 8px 0 8px;
  font-size: 1.6em;
  white-space: nowrap;
`;

const StyledRemoveGuestButton = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: transparent;
`;

const StyledImage = styled.img`
  width: 9px;
  height: 9px;
  padding-right: 8px;
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

const StyledMaximumGuestsError = styled.div`
  border: solid 1px red;
  border-radius: 8px;
  font-size: 1.6em;
  margin-bottom: 10px;
`;

export default AddGuestsToOrder;