import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import GamesList from '../components/gamecard/game-card-component';
import GamesService from '../services/gameService';
import { Game } from '../types/game';

interface HomeProps {
  userType: 'parent' | 'docteur' | 'professeur' | 'enfant';
}

const Home: React.FC<HomeProps> = ({ userType }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const fetchedGames = await GamesService.fetchGames();
        setGames(fetchedGames);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des jeux');
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Chargement des jeux...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container className="mt-4">
      <h1>Accueil</h1>
      <GamesList games={games} showStatus={true} />
    </Container>
  );
};

export default Home;