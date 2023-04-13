import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import MoviesDetailPage from '../MoviesDetailPage/MoviesDetailPage';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorsListPage from '../MoviesDetailPage/MoviesDetailPage';
import NavBar from '../../components/NavBar/NavBar'
import './App.css';


export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      <NavBar user={user} />
      { user ? 
        <Routes>
          <Route path="/" element={<MoviesListPage />} />
          <Route path="/movies/:movieName" element={<MoviesDetailPage />} />
          <Route path="/actors" element={<ActorsListPage />} />
        </Routes> 
        : 
        <LoginPage user={user} setUser={setUser} /> }
    </main>
  );
} 


