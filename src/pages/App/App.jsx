import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NavBar from '../../components/NavBar/NavBar'
import './App.css';


export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      <NavBar />
      { user ? 
      <>
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes> 
      </>
        : 
        <AuthPage /> }
    </main>
  );
} 


