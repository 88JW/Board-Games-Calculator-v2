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
    let sum = 0;
    try {
      sum = eval(`${number1}+${number2}+${number3}`);
    } catch (error) {
      console.log(error);
    }
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
    let sum = 0;
    try {
      sum = eval(`${number1}+${number2}+${number3}`);
    } catch (error) {
      console.log(error);
    }
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
      <h1>{playerName ? playerName : `Player ${formCount}`} </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNumber1">
          <Form.Label>
            {" "}
            Suma Nakarmionych Psów:<br></br>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Wprowadź punkty lub działanie matematyczne"
            value={number1}
            onChange={handleChange1}
          />
        </Form.Group>
        <Form.Group controlId="formNumber2">
          <Form.Label>
            Zabawki:<br></br>
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
            Kości:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number3}
            onChange={handleChange3}
          />
        </Form.Group>
        <Button className="btnSuma" variant="primary" type="submit">
          Oblicz sumę
        </Button>
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