import React from 'react'
import CalendarGrid from './components/CalendarGrid'
import './App.css';
import Autocomplete from "react-google-autocomplete";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useUserDataReservation from './hooks/useUserDataReservation';
import BookingCounter from './components/BookingCounter';

function App() {
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
    setTown(getElementFromGoogleMapsObject(place, "locality"));
    navigate(`/restaurants-list/${getElementFromGoogleMapsObject(place, "postal_code")}`);
  }

  return (
    <>
      <div>
        <h1>Dwich</h1>
        <h3>Jamais sans Dwich</h3>
        <CalendarGrid />
        <BookingCounter />
        {selectedDate && guestCount &&
            <AutoCompleteContainer>
              <h3>saisissez votre ville</h3>
              <Autocomplete
                  apiKey={'AIzaSyCfclF8Nh5LCwpHTzB9-RFP_lU1VcOYRHI'}
                  onPlaceSelected={(place) => {
                    handlePlaceSelect(place);
                  }}
              />
            </AutoCompleteContainer>
        }
      </div>
    </>
  )
}

const AutoCompleteContainer = styled.div`
  h3 {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-align: left;
    margin: 0 0 5px 10px;
    color: #1A4133;
  }
  
  .pac-target-input {
    width: 100%;
    height: 40px;
    border: none;
    padding: 0 0 0 10px;
    width: calc(100% - 10px);
    font-size: 1.2rem;
    background-color: #DEF0EA;
    color: #1A4133;
  }
`;

export default App
