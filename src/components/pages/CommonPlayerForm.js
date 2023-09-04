import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function CommonPlayerForm(props) {
  const [numPlayers, setNumPlayers] = useState(0);
  // zmienna do przechowywania liczby graczy
  const [playerNames, setPlayerNames] = useState([]);
  // tablica z imionami graczy

  // Funkcja obsługująca zmianę liczby graczy
  const handleNumPlayersChange = (event) => {
    const numPlayers = parseInt(event.target.value);
    setNumPlayers(numPlayers);
    setPlayerNames([...Array(numPlayers)].map(() => ""));
  };

  // Funkcja obsługująca zmianę nazwy gracza
  const handleNameChange = (index, name) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  };

  // Funkcja obsługująca kliknięcie przycisku "Rozpocznij"
  const handleStartClick = () => {
    props.onStart(playerNames);
  };

  return (
    <Form>
      <Form.Group controlId="formNumPlayers">
        <Form.Label>Liczba graczy:</Form.Label>
        <Form.Control as="select" onChange={handleNumPlayersChange}>
          <option value="0">Wybierz liczbę graczy...</option>
          <option value="1">1 gracz</option>
          <option value="2">2 graczy</option>
          <option value="3">3 graczy</option>
          <option value="4">4 graczy</option>
        </Form.Control>
      </Form.Group>
      {/* Renderowanie pól do wprowadzania nazw graczy */}
      {[...Array(numPlayers)].map((_, index) => (
        <Form.Group controlId="formPlayerName" key={index}>
          <Form.Label>Wprowadź nazwę gracza {index + 1}:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Wprowadź nazwę"
            value={playerNames[index]}
            onChange={(event) =>
              handleNameChange(index, event.target.value)
            }
          />
        </Form.Group>
      ))}
      {/* Przycisk "Rozpocznij" */}
      <Button
        variant="primary"
        type="button"
        onClick={handleStartClick}
        disabled={numPlayers === 0}
        block
      >
        Rozpocznij
      </Button>
    </Form>
    
  );
}

export default CommonPlayerForm;