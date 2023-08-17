import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerForm from "../../CommonPlayerForm";

function App() {
  return (
    <Container style={{ maxWidth: "500px", margin: "auto" }}>
      <PlayerForm />
    </Container>
  );
}

export default App;