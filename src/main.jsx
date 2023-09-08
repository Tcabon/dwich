import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import MenuSelection from './components/MenuSelection';
import OrderConfirmation from './components/OrderConfirmation';
import './styles.css';
import RestaurantList from "./components/RestaurantList.jsx";
import UserDataReservationContextProvider from "./contexts/UserDataReservationContext"
import RecapBar from "./components/RecapBar.jsx";

const rootElement = document.getElementById('app');
createRoot(rootElement).render(
  <BrowserRouter>
  <UserDataReservationContextProvider>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/restaurants-list/:postalCode" element={<RestaurantList />} />
        <Route path="/menu/:restaurantId" element={<MenuSelection />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
    </Routes>
    <RecapBar />
  </UserDataReservationContextProvider>
  </BrowserRouter>

);




