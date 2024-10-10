import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { House, Controller, GraphUp, Person } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import './footer-component.css';

const FooterComponent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split('/');
  const baseRoute = pathParts[1];
  const isGraphPage = pathParts[2] === 'graphe';
  const isHomePage = pathParts[2] === 'accueil' || pathParts.length === 2;

  const navigateToGraph = () => {
    navigate(`/${baseRoute}/graphe`);
  };

  const navigateToMain = () => {
    navigate(`/${baseRoute}`);
  };

  const navigateToHome = () => {
    navigate(`/${baseRoute}/accueil`);
  };

  const renderIcons = () => {
    switch (baseRoute) {
      case 'parent':
        return (
          <>
            <Col className="text-center">
              <House size={24} onClick={navigateToHome} style={{ cursor: 'pointer', color: isHomePage ? 'gold' : 'white' }} />
            </Col>
            <Col className="text-center">
              <GraphUp size={24} onClick={isGraphPage ? navigateToMain : navigateToGraph} style={{ cursor: 'pointer', color: isGraphPage ? 'gold' : 'white' }} />
            </Col>
            <Col className="text-center">
              <Person size={24} onClick={() => navigate('/enfant')} style={{ cursor: 'pointer' }} />
            </Col>
          </>
        );
      case 'enfant':
        return (
          <>
            <Col className="text-center">
              <Controller size={24} />
            </Col>
            <Col className="text-center">
              <Person size={24} onClick={() => navigate('/parent/accueil')} style={{ cursor: 'pointer' }} />
            </Col>
          </>
        );
      case 'docteur':
        return (
          <>
            <Col className="text-center">
              <House size={24} onClick={navigateToHome} style={{ cursor: 'pointer', color: isHomePage ? 'gold' : 'white' }} />
            </Col>
            <Col className="text-center">
              <GraphUp size={24} onClick={isGraphPage ? navigateToMain : navigateToGraph} style={{ cursor: 'pointer', color: isGraphPage ? 'gold' : 'white' }}/>
            </Col>
          </>
        );
      case 'professeur':
        return (
          <>
            <Col className="text-center">
              <House size={24} onClick={navigateToHome} style={{ cursor: 'pointer', color: isHomePage ? 'gold' : 'white' }} />
            </Col>
            <Col className="text-center">
              <GraphUp size={24} onClick={isGraphPage ? navigateToMain : navigateToGraph} style={{ cursor: 'pointer', color: isGraphPage ? 'gold' : 'white' }} />
            </Col>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-dark text-white py-2 fixed-bottom">
      <Container>
        <Row className="justify-content-between align-items-center">
          {renderIcons()}
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;