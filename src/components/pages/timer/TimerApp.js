import React, { useState, useEffect } from "react";
import { Container, } from "react-bootstrap";
import { MDBInput, MDBBtn, } from "mdb-react-ui-kit";

const Timer = () => {
  const [initialTime, setInitialTime] = useState(180);
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const handleInputChange = (event) => {
    setInitialTime(parseInt(event.target.value));
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCurrentTime(initialTime);
    clearInterval(intervalRef.current);
  };

  const intervalRef = React.useRef(null);

  useEffect(() => {
    if (isRunning && currentTime > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (currentTime === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, currentTime]);

  return (
    <div>
      <Container className="contenerGraczy">
        <h3>Wybierz czas jaki gracz będzie miał na wykonanie swojego ruchu:</h3>
        <MDBInput
          type="number"
          placeholder="Enter time in seconds"
          onChange={handleInputChange}
          value={initialTime}
          size="lg"
          className="fs-2"
          contrast
        />
        <MDBBtn onClick={startTimer} disabled={isRunning} color="info" size="lg" className="me-1 fs-6">
          Start
        </MDBBtn>
        <MDBBtn onClick={stopTimer} disabled={!isRunning}
          color="info" size="lg" className="me-1 fs-6">
          Stop
        </MDBBtn>
        <MDBBtn onClick={resetTimer}
          color="info" size="lg" className="me-1 fs-6">Reset</MDBBtn>

       <br></br>
        
        <h2>Pozostały czas na ruch:<br></br> {currentTime} s</h2>
      </Container>
    </div>
  );
};

export default Timer;