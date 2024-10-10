import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GraphUp } from 'react-bootstrap-icons';

interface Game {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

interface DoctorProps {
  games: Game[];
}

const Doctor: React.FC<DoctorProps> = ({ games }) => {
  return (
    <Container className="Doctor">
      <h1 className="text-white mb-4">Espace Docteur</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Statistiques des jeux</Card.Title>
              <GraphUp size={48} className="mb-3" />
              <p>Ici, vous pouvez voir les statistiques d'utilisation des jeux par les enfants.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Jeux disponibles</Card.Title>
              <ul>
                {games.map(game => (
                  <li key={game.id}>{game.name}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Doctor;