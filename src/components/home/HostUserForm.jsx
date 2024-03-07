import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useLunch from "../../hooks/useLunch";
import { useNavigate } from 'react-router-dom';
import isCustomEmailValid from "../../methods/isCustomEmailValid";
import generateUniqueId from "../../methods/generateUniqueId";
import Button from "../common/Button";

const HostUserForm = () => {
  const { guestsList, setGuestsList } = useLunch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const reservationDisplay = () => {
    return (
      <div>
        Réserver
      </div>
    )
  };

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
            placeholder='Adresse e-mail'
            {...register("email", {
              required: true,
              validate: isCustomEmailValid, // Utilisation de la validation personnalisée
            })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
          <Button type='submit' Display={reservationDisplay} />
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
  gap: 10px;
  margin-bottom: 10px;
`;

const StyledInputName = styled.input`
  padding: 12px 8px 8px 0;
  flex: 1;
  width: calc(50% - 5px);
  border: none;
  border-bottom: 1px solid #919EAB;
  font-size: 1.6em;
  color: #919EAB;
  opacity: 0.56;
  &:focus, &:active {
    opacity: 1;
    outline: none;
  }
  &:focus::placeholder {
    font-size: 0.5em;
    opacity: 0.56;
    position: relative;
    top: -17px;
  }
`;

const StyledInputEmail = styled.input`
  align-self: stretch;
  padding: 12px 8px 8px 0;
  border: none;
  border-bottom: 1px solid #919EAB;
  font-size: 1.6em;
  color: #919EAB;
  ::placeholder {
    color: #919EAB;
  }
  opacity: 0.56;
  &:focus, &:active {
    opacity: 1;
    outline: none;
  }
  &:focus::placeholder {
    font-size: 0.5em;
    opacity: 0.56;
    position: relative;
    top: -17px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  padding: 24px;
`;

const StyledText = styled.p`
  text-align: left;
  line-height: 24px;
  font-size: 1.6em;
  font-style: normal;
  padding: 24px 24px 0 24px;
`;

const StyledButton = styled.button`
  width: 100%;
  margin: 10px 0 5px 0;
  height: 30px;
  background: linear-gradient(to right, #e39207, #9ACD32);
  border: none;
  border-radius: 5px;
  color: white;
`

export default HostUserForm;