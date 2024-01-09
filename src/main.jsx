import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';
import UserDataReservationContextProvider from "./contexts/UserDataReservationContext"
import CartContextProvider from './contexts/CartContext';
import RecapBar from "./components/RecapBar.jsx";
import LunchContextProvider from './contexts/LunchContext.jsx';
import ReservationHome from './pages/ReservationHome.jsx';
import MenuSelection from './pages/MenuSelection.jsx';
import SplitOrder from './pages/SplitOrder.jsx';
import RestaurantList from "./pages/RestaurantList.jsx";
import OrderConfirmation from './pages/OrderConfirmation.jsx';
import Home from './pages/Home.jsx';





const rootElement = document.getElementById('app');
createRoot(rootElement).render(
  <BrowserRouter>
  <CartContextProvider>
  <LunchContextProvider>
  <UserDataReservationContextProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<ReservationHome />} />
        <Route path="/restaurants-list/:postalCode" element={<RestaurantList />} />
        <Route path="/menu/:restaurantId" element={<MenuSelection />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/split-order" element={<SplitOrder />} />
    </Routes>
    <RecapBar />
  </UserDataReservationContextProvider>
  </LunchContextProvider>
  </CartContextProvider>
  </BrowserRouter>

);




