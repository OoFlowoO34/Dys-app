import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';
import GamesService from '../services/gameService';
import { Game } from '../types/game';

interface GraphProps {
  userType: 'parent' | 'docteur' | 'professeur';
}

const Graph: React.FC<GraphProps> = ({ userType }) => {
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
        setError('Erreur lors du chargement des données');
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>{error}</p>;

  // Simulons des données de progression pour chaque jeu
  const progressData = games.map(game => ({
    name: game.name,
    score: Math.floor(Math.random() * 100),
    improvement: Math.floor(Math.random() * 50)
  }));

  return (
    <Container className="mt-4">
      <h1>Statistiques et Amélioration ({userType})</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="score" stroke="#8884d8" name="Score" />
          <Line yAxisId="right" type="monotone" dataKey="improvement" stroke="#82ca9d" name="Amélioration" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Graph;