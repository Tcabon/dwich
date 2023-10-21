import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useStateStorage from "../hooks/useStateStorage";

const AddGuestsToOrder = () => {
  const [guestsList = [], setGuestsList] = useStateStorage('sessionGuestsList');
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const generateUniqueId = () => {
    const randomValue = Math.random().toString(36).substring(2);
    const timestamp = Date.now().toString(36);
    const uniqueId = `${timestamp}-${randomValue}`;
    return uniqueId;
  };

  const handleAddGuest = (data) => {
    data.userId = generateUniqueId();
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
            <button onClick={() => handleDeleteGuest(index)}>Supprimer</button>
          </div>
        ))}
          <StyledForm onSubmit={handleSubmit(handleAddGuest)}>
          <input placeholder='Nom' {...register("name", {required: true})} />
          <input type='email' placeholder='email' {...register("email", {required: true})} />
          <button type='submit'>Ajouter</button>
      </StyledForm>
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