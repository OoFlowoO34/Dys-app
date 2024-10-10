import React from 'react';
import { Game } from '../types/game';
import GameCardComponent from '../components/gamecard/game-card-component';

interface ChildProps {
  games: Game[];
}

const Child: React.FC<ChildProps> = ({ games }) => {
  return (
    <div className="Child d-flex flex-column bg-dark" style={{ minHeight: '100vh' }}>
      <main className="flex-grow-1 p-3">
        <GameCardComponent games={games} showStatus={false}/>
      </main>
    </div>
  );
};

export default Child;