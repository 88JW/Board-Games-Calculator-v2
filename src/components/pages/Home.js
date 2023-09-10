import React from "react";
import { MDBFooter, } from 'mdb-react-ui-kit';
function Home() {
  return (
    <div>
      <p>Witaj w aplikacji do liczenia punktów w grach planszowych. Aplikacja jest w fazie rozwoju, więc proszę o wyrozumiałość.</p>
      <MDBFooter className='text-center text-white footer-own' style={{ backgroundColor: '#21081a' }}>
        <p>elementy które zostaną dodane w najbliższym czasie:</p>
        <ol>
          <li>timer na ruch</li>
          <li>Ruletka</li>
          <li>Półk</li>
        </ol>
        <p>do zmiany:</p>
        <ol>
          <li>zmiana kolorów czcionek</li>
          <li>zmiana fontu czcionek</li>
          <li>zmiana kolorystyki tła i elementów generowanych</li>
        </ol>
        <p>wersja z dnia 10.09.2023 20:00</p>
      </MDBFooter>
    </div>
  );
}
export default Home;
