export interface Game {
    id: number;
    name: string;
    description: string;
    image: string;
    color: string;
    status: 'completed' | 'failed' | 'pending' | 'none';
  }