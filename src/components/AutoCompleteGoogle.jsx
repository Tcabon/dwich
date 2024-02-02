import React from 'react'
import Autocomplete from "react-google-autocomplete";
import styled from 'styled-components';
import useUserDataReservation from '../hooks/useUserDataReservation';
import { useNavigate } from 'react-router-dom';

const AutoCompleteGoogle = ({ backgroundColor }) => {
  const {selectedDate, guestCount, setTown} = useUserDataReservation();
  const navigate = useNavigate();

  const getElementFromGoogleMapsObject = (apiObject, type) => {
    if (apiObject && apiObject.address_components && Array.isArray(apiObject.address_components)) {
      for (let i = 0; i < apiObject.address_components.length; i++) {
        const component = apiObject.address_components[i];
        if (component.types.includes(type)) {
          return component.long_name;
        }
      }
    }
    return null; // Return null if postal code not found
  }

  const handlePlaceSelect = place => {
    const town = getElementFromGoogleMapsObject(place, "locality") || getElementFromGoogleMapsObject(place, "postal_code");
    setTown(town);
    if (getElementFromGoogleMapsObject(place, "postal_code") !== null) {
      navigate(`/restaurants-list/${getElementFromGoogleMapsObject(place, "postal_code")}`);
    }
    else {
      navigate(`/restaurants-list/${getElementFromGoogleMapsObject(place, "locality")}`);
    }
  };

  return (
    <StyledAutoCompleteContainer style={{ backgroundColor: "#fff" }}>
      <StyledTitle>Avec une adresse c'est toujours mieux :</StyledTitle>
      <StyledAutoComplete>
        <Autocomplete
          apiKey={'AIzaSyDjnSesrQA-c56OERPP6ObwQZlnwof1zRs'}
          onPlaceSelected={(place) => {
            handlePlaceSelect(place);
          }}
          options={{ types: ['(regions)'], componentRestrictions: { country: 'fr' } }}
        />
      </StyledAutoComplete>
    </StyledAutoCompleteContainer>
  )
};

const StyledAutoCompleteContainer = styled.div`
  margin: 0 15px 0 15px;
  border-radius: 10px;
`;

const StyledAutoComplete = styled.div`

  .pac-target-input {
    border-radius: 10px;
    width: 100%;
    height: 40px;
    border: none;
    padding: 0 0 0 10px;
    width: calc(100% - 10px);
    font-size: 1.2rem;
    background-color: #FFF;
    color: #1A4133;
  }
  margin-bottom: 10px;
`;

const StyledTitle = styled.h1`
  font-size: 1.5em;
  margin: 15px 0 10px 0;
  padding-left: 15px;
  text-align: left;
`;

export default AutoCompleteGoogle;