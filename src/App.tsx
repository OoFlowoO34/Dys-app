import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavbarComponent from './components/navbar/navbar-component';
import FooterComponent from './components/footer/footer-component';
import GamesService from './services/gameService';
import Child from './pages/child';
import Parent from './pages/parent';
import Doctor from './pages/doctor';
import Professor from './pages/professor';
import Graph from './pages/graph';
import Home from './pages/home';
import { Game } from './types/game';  // Importez l'interface Game depuis le fichier de types

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const gamesData = await GamesService.fetchGames();
        setGames(gamesData);
      } catch (err) {
        setError('Erreur lors du chargement des jeux.');
      }
    };

    loadGames();
  }, []);

  return (
    <Router>
      <div className="App d-flex flex-column bg-dark" style={{ minHeight: '100vh' }}>
        <header>
          <NavbarComponent />
        </header>
        <main className="flex-grow-1 p-3">
          <Routes>
            <Route path="/enfant" element={<Child games={games}/>} />
            <Route path="/parent" element={<Parent games={games}/>} />
            <Route path="/parent/accueil" element={<Home userType="parent" />} />
            <Route path="/parent/graphe" element={<Graph userType="parent" />} />
            <Route path="/docteur" element={<Doctor games={games}/>} />
            <Route path="/docteur/accueil" element={<Home userType="docteur" />} />
            <Route path="/docteur/graphe" element={<Graph userType="docteur" />} />
            <Route path="/professeur" element={<Professor games={games} />} />
            <Route path="/professeur/accueil" element={<Home userType="professeur" />} />
            <Route path="/professeur/graphe" element={<Graph userType="professeur" />} />
            <Route path="*" element={<Navigate to="/enfant" replace />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;