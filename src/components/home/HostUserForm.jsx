import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useLunch from "../../hooks/useLunch";
import { useNavigate } from 'react-router-dom';
import isCustomEmailValid from "../../methods/isCustomEmailValid";
import generateUniqueId from "../../methods/generateUniqueId";

const HostUserForm = () => {
  const { guestsList, setGuestsList } = useLunch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddHost = (data) => {
    if (errors.email) {
      console.err(errors.email.message);
      return;
    }
    let host = guestsList.find(elem => elem.isHost === true);
    if (host) {
      let index = guestsList.indexOf(host);
      guestsList.splice(index, 1);
    }
    data.userId = generateUniqueId();
    data.isHost = true;
    data.isDeletable = false;
    data.assignedCartEntries = [];
    setGuestsList([...guestsList, data]);
    reset();
    navigate(`/reservation`);
  }

  return (
    <StyledWrapper>
      <StyledText>Faisons connaissance avant de commencer</StyledText>
      <StyledForm onSubmit={handleSubmit(handleAddHost)}>
        <StyledRow>
          <StyledInputName placeholder='Nom' {...register("name", { required: true })} />
          <StyledInputName placeholder='Prénom' {...register("firstName", { required: true })} />
        </StyledRow>
          <StyledInputEmail
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
        <button type='submit'>Réserver</button>
      </StyledForm>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Espace entre les éléments de la ligne */
  margin-bottom: 10px; /* Ajout de marge en bas pour espacement */
`;

const StyledInputName = styled.input`
  padding: 8px;
  flex: 1;
  width: 48% /* Ajout de marge à droite pour séparer les champs */
`;

const StyledInputEmail = styled.input`
  align-self: stretch;
  padding: 8px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  padding: 20px;
`;

const StyledText = styled.p`
  margin: 10px 0px 20px 15px; 
  float: left;
  font-family: "Public Sans";
  font-size: 1.5em;
  font-style: normal;
`;

export default HostUserForm;