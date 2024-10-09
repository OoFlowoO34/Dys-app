import React from 'react';
import { Container } from 'react-bootstrap';
import GameCardComponent from '../components/gamecard/game-card-component';

interface Game {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

interface ParentProps {
  games: Game[];
}

const Parent: React.FC<ParentProps> = ({ games }) => {
  return (
    <div className="Parent d-flex flex-column bg-dark" style={{ minHeight: '100vh' }}>
      <main className="flex-grow-1 p-3">
        hello
      </main>
    </div>
  );
};

export default Parent;