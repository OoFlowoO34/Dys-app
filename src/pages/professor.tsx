import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Book } from 'react-bootstrap-icons';

interface Game {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
}

interface ProfessorProps {
  games: Game[];
}

const Professor: React.FC<ProfessorProps> = ({ games }) => {
  return (
    <Container className="Professor">
      <h1 className="text-white mb-4">Espace Professeur</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Gestion des jeux éducatifs</Card.Title>
              <Book size={48} className="mb-3" />
              <p>Ici, vous pouvez gérer les jeux éducatifs et suivre les progrès des élèves.</p>
              <Button variant="primary">Ajouter un nouveau jeu</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Jeux disponibles</Card.Title>
              <ul>
                {games.map(game => (
                  <li key={game.id}>
                    {game.name}
                    <Button variant="link" size="sm">Modifier</Button>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Professor;