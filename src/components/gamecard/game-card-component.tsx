import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

interface Game {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

interface GamesListProps {
  games: Game[];
}

const GamesList: React.FC<GamesListProps> = ({ games }) => {
  const getImagePath = (image: string) => {
    try {
      console.log(image)
      return require(`../../assets/images/${image}`);
    } catch (err) {
      console.error(`Image non trouvée: ${image}`, err);
      return require(`../../assets/images/default-image.png`); // Chemin vers une image par défaut
    }
  };
  
  return (
    <div>
      {games.map((game) => (
        <Card className="mb-4" key={game.id} style={{ backgroundColor: `#${game.color}`, marginBottom: '20px', padding: '20px', maxWidth: '500px', margin: '0 auto'}}>
          <Row className="g-0">
            <Col md={4}>
            
              <Card.Img  src={getImagePath(game.image)} alt={game.name} style={{ height: '100%', objectFit: 'cover', maxWidth: '100px' }} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default GamesList;
