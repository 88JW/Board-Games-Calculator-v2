import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import "../games/css/contenerGraczy.css";


const LicznikCalculation = ({ playerName, formCount }) => {
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(false);

  const handleIncrement1 = () => {
    setCount(count + 1);
  };

  const handleDecrement1 = () => {
    setCount(count - 1);
  };

  const handleIncrement10 = () => {
    setCount(count + 10);
  };

  const handleDecrement10 = () => {
    setCount(count - 10);
  };

  const handleCountChange = (event) => {
    setCount(parseInt(event.target.value));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const elements = document.querySelectorAll("[id^='typeNumber-']");
      let maxCount = -Infinity;
      elements.forEach((element) => {
        const value = parseInt(element.value);
        if (value > maxCount) {
          maxCount = value;
        }
      });
      if (count === maxCount) {
        setWinner(true);
      } else {
        setWinner(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <Container className={`contenerGraczy ${winner ? "winner" : ""}`}>
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

          <MDBBtn onClick={handleIncrement1} color="success" size="lg" className="me-1 fs-6">
            +1
          </MDBBtn>
          <MDBBtn onClick={handleIncrement10} color="success" size="lg" className="me-1 fs-6" >
            +10
          </MDBBtn>
          <MDBBtn onClick={handleDecrement1} color="danger" size="lg" className="me-1 fs-6">
            -1
          </MDBBtn>
          <MDBBtn onClick={handleDecrement10} color="danger" size="lg" className="me-1 fs-6">
            -10
          </MDBBtn>
        </div>
      </Container>
    </>
  );
};

export default LicznikCalculation;