import React, { useState } from "react";
import Home from "./Home";
import NaviGame from "./NaviGame";
import Instrukcje from "./Instructions";
import Licznik from "./Licznik";

import { Navbar, Container, Nav, Button, } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import { MDBIcon } from 'mdb-react-ui-kit';

function NaviApp() {
  const [menuVisible, setMenuVisible] = useState(true); // dodajemy stan menuVisible

  const handleMenuClick = () => {
    setMenuVisible(false); // zmieniamy stan na false po kliknięciu w element menu
  };

  return (
    <div>
      {menuVisible && ( // wyświetlamy menu tylko jeśli menuVisible jest true
        <div className="Navstyle">
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Navbar.Toggle />
              <Navbar.Collapse >
                <Nav >
                  <Nav.Link as={Link} to="home" onClick={handleMenuClick}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="navigame" onClick={handleMenuClick}>
                    Gry
                  </Nav.Link>
                  <Nav.Link as={Link} to="instrukcje" onClick={handleMenuClick}>
                    Instrukcje
                  </Nav.Link>
                  <Nav.Link as={Link} to="licznik" onClick={handleMenuClick}>
                    Licznik
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )}

      <div>
        <Routes>
          <Route path="/navigame/*" element={<NaviGame />} />
          <Route path="/home" element={<Home />} />
          <Route path="/instrukcje" element={<Instrukcje />} />
          <Route path="/licznik" element={<Licznik />} />
        </Routes>
      </div>

      <Button href="/" variant="outline-light">
        <MDBIcon fas icon="times-circle" />
      </Button>
    </div>
  );
}

export default NaviApp;
