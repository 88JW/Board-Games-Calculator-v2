import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";

import { MDBBtn, } from 'mdb-react-ui-kit';

import Home from "./Home";
import NaviGame from "./NaviGame";
import Instrukcje from "./Instructions";
import Licznik from "./licznik/LicznikApp";
import Timer from "./timer/TimerApp.js";
import Losowanie from "./losowanie/LosowanieApp";
import Test from "./Test";

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
                  <NavDropdown title="Więcej" id="basic-nav-dropdown">
                    <Nav.Link as={Link} to="licznik" onClick={handleMenuClick}>
                      Licznik
                    </Nav.Link>
                    <Nav.Link as={Link} to="timer" onClick={handleMenuClick}>
                      Timer
                    </Nav.Link>
                    <Nav.Link as={Link} to="losowanie" onClick={handleMenuClick}>
                      Biblioteka i Losowanie
                    </Nav.Link>
                    <Nav.Link as={Link} to="test" onClick={handleMenuClick}>
                      Test
                    </Nav.Link>
                  </NavDropdown>
                  {/* <Nav.Link as={Link} to="licznik" onClick={handleMenuClick}>
                    Licznik
                  </Nav.Link> */}
                  {/* <Nav.Link as={Link} to="timer" onClick={handleMenuClick}>
                    Timer
                  </Nav.Link> */}
                  {/* <Nav.Link as={Link} to="timer" onClick={handleMenuClick}>
                    Timer
                  </Nav.Link>            */}
                  {/* <Nav.Link as={Link} to="test" onClick={handleMenuClick}>
                    Losowanie
                  </Nav.Link> */}
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
          <Route path="/timer" element={<Timer />} />
          <Route path="/losowanie" element={<Losowanie />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
      <br />
      <MDBBtn href="/" className="btn-close btn-close-white" color="none" aria-label="Close" />

    </div>
  );
}

export default NaviApp;
