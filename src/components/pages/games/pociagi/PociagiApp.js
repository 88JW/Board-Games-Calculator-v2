import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CommonPlayerForm from '../../CommonPlayerForm';
import PociagiNumberForm from './PociagiNumberForm';

function PociagiAPP2() {
  const [numPlayers, setNumPlayers] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);

  const handleNumPlayersChange = (num) => {
    // aktualizacja liczby graczy
    setNumPlayers(num);
    // resetowanie nazw graczy
    const names = new Array(num).fill('');
    setPlayerNames(names);
  };

  const handleNameChange = (index, name) => {
    // aktualizacja nazwy gracza
    const names = [...playerNames];
    names[index] = name;
    setPlayerNames(names);
  };

  const handleStart = () => {
    // funkcja wywoływana po kliknięciu przycisku "Rozpocznij"
    console.log('Rozpocznij');
  };

  const [forms, setForms] = useState([]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Pociągi</h1>
          <CommonPlayerForm numPlayers={numPlayers} playerNames={playerNames} onNumPlayersChange={handleNumPlayersChange} onNameChange={handleNameChange} onStart={handleStart} />
          {forms}
        </Col>
      </Row>
    </Container>
  );
}

export default PociagiAPP2;