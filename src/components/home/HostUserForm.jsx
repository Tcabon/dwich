import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useForm } from "react-hook-form";
import useLunch from "../../hooks/useLunch";
import { useNavigate } from 'react-router-dom';
import isCustomEmailValid from "../../methods/isCustomEmailValid";
import generateUniqueId from "../../methods/generateUniqueId";

const UserFormButton = () => {
  return (
    <div>
      Faire une reservation
    </div>
  )
}

const HostUserForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { guestsList, setGuestsList } = useLunch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleButtonClick = () => {
    setIsFormVisible(true);
  }

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
      <Button action={handleButtonClick} Display={UserFormButton} />
      {isFormVisible && (
        <div>
          <StyledForm onSubmit={handleSubmit(handleAddHost)}>
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
        </div>
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default HostUserForm;