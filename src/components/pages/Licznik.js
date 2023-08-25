import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/games/css/contenerGraczy.css";
// import ".././css/contenerGraczy.css";


function NumberForm({ formCount, playerName }) {
  const [count, setCount] = useState(0);

  const handleIncrement1 = () => {
    setCount(count + 1);
  };

  const handleIncrement10 = () => {
    setCount(count + 10);
  };

  const handleDecrement1 = () => {
    setCount(count - 1);
  };

  const handleDecrement10 = () => {
    setCount(count - 10);
  };

  const handleCountChange = (event) => {
    setCount(parseInt(event.target.value));
  };

  return (
    <Container className="contenerGraczy">
      <div>
        <h1>{playerName ? playerName : `Player ${formCount}`} </h1>
        <input type="number" value={count} onChange={handleCountChange} /><br></br>
        <button onClick={handleIncrement1}>+1</button>
        <button onClick={handleIncrement10}>+10</button>
        <button onClick={handleDecrement1}>-1</button>
        <button onClick={handleDecrement10}>-10</button>
      </div>
    </Container>
  );
}

function App() {
  const [numPlayers, setNumPlayers] = useState(0);
  const [showForms, setShowForms] = useState(false);
  const [playerNames, setPlayerNames] = useState([]);

  const handleNumPlayersChange = (event) => {
    const numPlayers = parseInt(event.target.value);
    setNumPlayers(numPlayers);
    setPlayerNames([...Array(numPlayers)].map(() => ""));
  };

  const handleStartClick = () => {
    setShowForms(true);
  };

  const handleNameChange = (index, name) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  };

  return (
    <Container style={{ maxWidth: "500px", margin: "auto" }}>
      {!showForms && (
        <Form>
          <Form.Group controlId="formNumPlayers">
            <Form.Label>Wybierz liczbę graczy:</Form.Label>
            <Form.Control
              as="select"
              value={numPlayers}
              onChange={handleNumPlayersChange}            >
              <option value="0">Wybierz...</option>
              <option value="1">1 gracz</option>
              <option value="2">2 graczy</option>
              <option value="3">3 graczy</option>
              <option value="4">4 graczy</option>
            </Form.Control>
          </Form.Group>
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
      )}
      {showForms && (
        <>
          {[...Array(numPlayers)].map((_, index) => (
            <div key={index}>
              <NumberForm
                formCount={index + 1}
                onDelete={() => setNumPlayers(numPlayers - 1)}
                playerName={playerNames[index]}
              />
            </div>
          ))}
        </>
      )}
    </Container>
  );
}

export default App;
