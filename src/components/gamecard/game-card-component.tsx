import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { CheckCircleFill, XCircleFill, ExclamationCircleFill, ChatDots } from 'react-bootstrap-icons';
import { Game } from '../../types/game';

interface GameCardComponentProps {
  games: Game[];
  showStatus?: boolean;
}

const GameCardComponent: React.FC<GameCardComponentProps> = ({ games, showStatus = true }) => {
    const getImagePath = (image: string) => {
      try {
        return require(`../../assets/images/${image}`);
      } catch (err) {
        console.error(`Image non trouvée: ${image}`, err);
        return require(`../../assets/images/default-image.png`);
      }
    };

  const renderStatusIcon = (status: Game['status']) => {
    if (!showStatus) return null;
    
    switch (status) {
      case 'completed':
        return <CheckCircleFill color="green" size={24} />;
      case 'failed':
        return <XCircleFill color="red" size={24} />;
      case 'pending':
        return <ExclamationCircleFill color="orange" size={24} />;
      case 'none':
      default:
        return null;
    }
  };

  return (
    <div>
      {games.map((game) => (
        <Card className="mb-4 position-relative" key={game.id} style={{ backgroundColor: `#${game.color}`, marginBottom: '20px', padding: '20px', maxWidth: '500px', margin: '0 auto'}}>
          <Row className="g-0">
            <Col xs={4}>
              <Card.Img src={getImagePath(game.image)} alt={game.name} style={{ height: '100%', objectFit: 'cover', maxWidth: '100px' }} />
            </Col>
            <Col xs={8}>
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
          {showStatus && (
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              display: 'flex',
              gap: '10px'
            }}>
              {renderStatusIcon(game.status)}
              <ChatDots size={24} style={{ cursor: 'pointer' }} />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default GameCardComponent;