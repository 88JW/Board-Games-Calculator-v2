import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././css/contenerGraczy.css";

function calculateExpression(expression) {
  let numbers = expression.split(/[+-]/);
  let operators = expression.split(/\d+/).slice(1, -1);
  let result = Number(numbers[0]);
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      result += Number(numbers[i + 1]);
    } else if (operators[i] === "-") {
      result -= Number(numbers[i + 1]);
    }
  }
  return result;
}

function NumberForm({ formCount, playerName }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [number7, setNumber7] = useState(0);
  const [sum, setSum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const num1 = isNaN(number1) ? calculateExpression(number1) : parseInt(number1);
    const sum = num1 + parseInt(number2) + parseInt(number3) + parseInt(number4) + parseInt(number5) + parseInt(number6) + parseInt(number7);
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

  const handleChange4 = (event) => {
    setNumber4(event.target.value);
  };
  const handleChange5 = (event) => {
    setNumber5(event.target.value);
  };
  const handleChange6 = (event) => {
    setNumber6(event.target.value);
  };
  const handleChange7 = (event) => {
    setNumber7(event.target.value);
  };

  const handleButtonClick = () => {
    const num1 = isNaN(number1) ? calculateExpression(number1) : parseInt(number1);
    const sum = num1 + parseInt(number2) + parseInt(number3) + parseInt(number4) + parseInt(number5) + parseInt(number6) + parseInt(number7);
    setSum(sum);
  };

  const handleResetClick = () => {
    setNumber1("");
    setNumber2(0);
    setNumber3(0);
    setNumber4(0);
    setNumber5(0);
    setNumber6(0);
    setNumber7(0);
    setSum("");
  };

  return (
    <Container className="contenerGraczy">
      <h1>{playerName ? playerName : `Player ${formCount}`} </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNumber1">
          <Form.Label>
            {" "}
            Suma<br></br>
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
            Karty Bonusowe:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number2}
            onChange={handleChange2}
          />
        </Form.Group>
        <Form.Group controlId="formNumber3">
          <Form.Label>
            Cele:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number3}
            onChange={handleChange3}
          />
        </Form.Group>
        <Form.Group controlId="formNumber4">
          <Form.Label>
            Jajka:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number4}
            onChange={handleChange4}
          />
        </Form.Group>
        <Form.Group controlId="formNumber5">
          <Form.Label>
            Pożywienie Na Kartach:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number5}
            onChange={handleChange5}
          />
        </Form.Group>
        <Form.Group controlId="formNumber6">
          <Form.Label>
            Karta Pod Inną Kartą:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number6}
            onChange={handleChange6}
          />
        </Form.Group>
        <Form.Group controlId="formNumber7">
          <Form.Label>
            Znaczniki Duetu / Cele <br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number7}
            onChange={handleChange7}
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