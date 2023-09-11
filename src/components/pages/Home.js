import React from "react";
import { Container, } from "react-bootstrap";
import { MDBFooter, } from 'mdb-react-ui-kit';
function Home() {
  return (
    <div>
      <Container className="contenerGraczy">
        <p>Witaj w aplikacji do liczenia punktów w grach planszowych. Aplikacja jest w fazie rozwoju, więc proszę o wyrozumiałość.</p>
        <p>elementy które zostaną dodane w najbliższym czasie:</p>
        <ol>
          <li><s>timer na ruch</s></li>
          <li>Ruletka</li>
          <li>Półk</li>
        </ol>
        <p>do zmiany:</p>
        <ol>
          <li>dodanie rozwujanego menu z MuI</li>
          <li>zmiana kolorów czcionek</li>
          <li>zmiana fontu czcionek</li>
          <li>zmiana kolorystyki tła i elementów generowanych</li>
        </ol>
        <p>wersja z dnia 11.09.2023 20:07</p>
      </Container>
      <MDBFooter className='text-center text-white footer-own' style={{ backgroundColor: '#21081a' }}>

      </MDBFooter>
    </div>
  );
}
export default Home;
