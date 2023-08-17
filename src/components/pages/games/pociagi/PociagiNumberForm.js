import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NumberForm({ formCount, playerName }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [sum, setSum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const sum = parseInt(number1) + parseInt(number2) + parseInt(number3);
    setSum(sum);
  };

  const handleChange1 = (event) => {
    setNumber1(event.target.value);
  };

  const handleChange2 = (event) => {
    setNumber2(event.target.value);
  };

  const handleChange3 = (event) => {
    setNumber3(event.target.value);
  };

  const handleButtonClick = () => {
    const sum = parseInt(number1) + parseInt(number2) + parseInt(number3);
    setSum(sum);
  };

  const handleResetClick = () => {
    setNumber1("");
    setNumber2("");
    setNumber3("");
    setSum("");
  };

  return (
    <Container className="contenerGraczy">
      <h1>{playerName ? playerName : `Player ${formCount}`}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNumber1">
          <Form.Label>
            {" "}
            Długość trasy:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number1}
            onChange={handleChange1}
          />
        </Form.Group>
        <Form.Group controlId="formNumber2">
          <Form.Label>
            Zrealizowane bilety<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number2}
            onChange={handleChange2}
          />
        </Form.Group>
        <Form.Group controlId="formNumber2">
          <Form.Label>
            Najdłuższa trasa 10pkt<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number3}
            onChange={handleChange3}
          />
        </Form.Group>
      </Form>
      <p>Suma wprowadzonych liczb: {sum}</p>
      <Button className="btnSuma" variant="primary" onClick={handleButtonClick}>
        Oblicz sumę
      </Button>
      <Button
        className="btnResetuj"
        variant="danger"
        onClick={handleResetClick}
      >
        Resetuj
      </Button>      
    </Container>
  );
}

export default NumberForm;