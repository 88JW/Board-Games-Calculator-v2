import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import "../games/css/contenerGraczy.css";

function NumberForm({ formCount, playerName, scores, setScores }) {
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
    <>
      <Container className="contenerGraczy">
        <div>
          <h1>{playerName ? playerName : `Player ${formCount}`}</h1>
          <MDBInput
            value={count}
            onChange={handleCountChange}
            label="Wynik:"
            id={`typeNumber-${formCount}`}
            type="number"
            contrast
            size="lg"
            className="fs-2"
          />
          <br></br>

          <MDBBtn
            onClick={handleIncrement1}
            size="lg"
            className="me-1 fs-6"
            color="success"
          >
            +1
          </MDBBtn>
          <MDBBtn
            onClick={handleIncrement10}
            size="lg"
            className="me-1 fs-6"
            color="success"
          >
            +10
          </MDBBtn>
          <MDBBtn
            onClick={handleDecrement1}
            size="lg"
            className="me-1 fs-6"
            color="danger"
          >
            -1
          </MDBBtn>
          <MDBBtn
            onClick={handleDecrement10}
            size="lg"
            className="me-1 fs-6"
            color="danger"
          >
            -10
          </MDBBtn>         
        </div>
      </Container>
    </>
  );
}

export default NumberForm;