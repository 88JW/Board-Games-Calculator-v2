import React from "react";
import { MDBFooter, } from 'mdb-react-ui-kit';
function Home() {
  return (
    <div>
      <p>Witaj w aplikacji do liczenia punktów w grach planszowych. Aplikacja jest w fazie rozwoju, więc proszę o wyrozumiałość.</p>
      <MDBFooter className='text-center text-white footer-own' style={{ backgroundColor: '#21081a' }}>
        <p>wersja z dnia 04.09.2023 16:30</p>
      </MDBFooter>
    </div>
  );
}
export default Home;
