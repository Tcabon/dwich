import React, { useState } from 'react'
import Autocomplete from "react-google-autocomplete";
import styled from 'styled-components';
import useUserDataReservation from '../../hooks/useUserDataReservation';
import { useNavigate } from 'react-router-dom';

const AutoCompleteGoogle = ({ hasError, setTownError }) => {
  const {selectedDate, guestCount, setTown} = useUserDataReservation();
  const [hasPostalCodeError, setHasPostalCodeError] = useState(false);
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
    const town = getElementFromGoogleMapsObject(place, "postal_code");
    if (!town) {
      setHasPostalCodeError(true);
      setTownError(true);
    }
    setTown(town);
  };

  return (
    <StyledAutoCompleteContainer $hasError={hasError}>
      <StyledTitle>Avec une adresse c'est toujours mieux :</StyledTitle>
      {hasPostalCodeError && (
        <div>PAS BONNN</div>
      )}
      <StyledAutoComplete>
        <Autocomplete
          apiKey={'AIzaSyDjnSesrQA-c56OERPP6ObwQZlnwof1zRs'}
          onPlaceSelected={(place) => {
            handlePlaceSelect(place);
          }}
          onFocus={() => setTownError(false)}
          options={{ types: ['(regions)'], componentRestrictions: { country: 'fr' } }}
        />
      </StyledAutoComplete>
    </StyledAutoCompleteContainer>
  )
};

const StyledAutoCompleteContainer = styled.div`
  margin: 0 15px 0 15px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid ${props => props.$hasError ? "red" : "transparent"};
`;

const StyledAutoComplete = styled.div`
  .pac-target-input {
    width: 100%;
    height: 40px;
    padding: 0 0 0 10px;
    width: calc(100% - 10px);
    font-size: 1.2rem;
    background-color: #FFF;
    color: #1A4133;
    border: none;
  }
  padding-left: 10px;
  padding-bottom: 10px;
`;

const StyledTitle = styled.h1`
  font-size: 1.5em;
  margin: 0 0 10px 0;
  padding: 20px 0 0 20px;
  text-align: left;
`;

export default AutoCompleteGoogle;