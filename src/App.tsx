import './App.css';
import React, { useEffect, useState } from 'react';

import NavbarComponent from './components/navbar/navbar-component';
import GameCard from './components/gamecard/game-card-component';
import FooterComponent from './components/footer/footer-component';
import GamesService from './services/gameService';
import { Container } from 'react-bootstrap';


interface Game {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

function App() {
    // Créer un état pour stocker les jeux
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    // Utiliser useEffect pour charger les jeux lors du montage du composant
    useEffect(() => {
      const loadGames = async () => {
        try {
          const gamesData = await GamesService.fetchGames();
          setGames(gamesData); // Stocker les jeux dans l'état
        } catch (err) {
          setError('Erreur lors du chargement des jeux.');
        }
      };
  
      loadGames();
    }, []);
  return (
    <div className="App d-flex flex-column bg-dark" style={{ minHeight: '100vh' }}>
      <header>
        <NavbarComponent />
      </header>
      <main className="flex-grow-1 p-3">
        <GameCard games={games} />
      </main>
      <footer className="bg-dark mt-4">
        <Container>
          <FooterComponent />
        </Container>
      </footer>
    </div>
  );
}

export default App;