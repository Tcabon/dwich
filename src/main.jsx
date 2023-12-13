import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import MenuSelection from './components/MenuSelection';
import OrderConfirmation from './components/OrderConfirmation';
import './styles.css';
import RestaurantList from "./components/RestaurantList.jsx";
import UserDataReservationContextProvider from "./contexts/UserDataReservationContext"
import CartContextProvider from './contexts/CartContext';
import RecapBar from "./components/RecapBar.jsx";
import SplitOrder from './components/SplitOrder.jsx';
import LunchContextProvider from './contexts/LunchContext.jsx';

const rootElement = document.getElementById('app');
createRoot(rootElement).render(
  <BrowserRouter>
  <CartContextProvider>
  <UserDataReservationContextProvider>
  <LunchContextProvider>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/restaurants-list/:postalCode" element={<RestaurantList />} />
        <Route path="/menu/:restaurantId" element={<MenuSelection />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/split-order" element={<SplitOrder />} />
    </Routes>
    <RecapBar />
  </LunchContextProvider>
  </UserDataReservationContextProvider>
  </CartContextProvider>
  </BrowserRouter>

);




