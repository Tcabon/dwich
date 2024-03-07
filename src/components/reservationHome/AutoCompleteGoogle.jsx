import React, { useState } from 'react'
import Autocomplete from "react-google-autocomplete";
import styled from 'styled-components';
import useUserDataReservation from '../../hooks/useUserDataReservation';
import Button from '../common/Button';

const AutoCompleteGoogle = ({ hasError, setTownError }) => {
  const { setTown } = useUserDataReservation();
  const [hasPostalCodeError, setHasPostalCodeError] = useState(false);

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
          placeholder="Ville, code postal, adresse"
        />
      </StyledAutoComplete>
    </StyledAutoCompleteContainer>
  )
};

const StyledAutoCompleteContainer = styled.div`
  margin: 0 15px 20px 15px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid ${props => props.$hasError ? "red" : "transparent"};
`;

const StyledAutoComplete = styled.div`
  position: relative; /* Position relative pour positionner la ligne */
  padding: 0 20px 20px 20px;

  .pac-target-input {
    width: 100%;
    height: 40px;
    width: calc(100% - 10px);
    font-size: 1.6em;
    background-color: #FFF;
    color: #1A4133;
    border: none;
    opacity: 0.56;
    border-bottom: 1px solid #919EAB;
    outline: none;
    &:focus {
      border-bottom: 1px solid #919EAB;
      opacity: 1;
    }
    &:focus::placeholder {
      font-size: 0.55em;
      opacity: 0.56;
      position: relative;
      top: -17px;
    }
  }

  /* Style pour la ligne sous l'input */
  .underline::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc; /* Couleur de votre choix */
  }
`;
const StyledTitle = styled.h1`
  font-size: 1.6em;
  margin: 0 0 10px 0;
  padding: 20px 0 20px 20px;
  text-align: left;
`;

export default AutoCompleteGoogle;