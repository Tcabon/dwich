import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import MenuSelection from './components/MenuSelection';
import OrderConfirmation from './components/OrderConfirmation';
import './styles.css';

const rootElement = document.getElementById('app');
createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/menu/:restaurantId" element={<MenuSelection />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
    </Routes>
  </BrowserRouter>
);




