import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/enfant">Enfant</Nav.Link>
          <Nav.Link as={Link} to="/parent/accueil">Parent</Nav.Link>
          <Nav.Link as={Link} to="/professeur/accueil">Professeur</Nav.Link>
          <Nav.Link as={Link} to="/docteur/accueil">Doctor</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;