import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

const Timer = () => {
  const [initialTime, setInitialTime] = useState(60);
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isVibrationTriggered, setIsVibrationTriggered] = useState(false);

  const handleInputChange = (event) => {
    setInitialTime(event.target.value);
    setCurrentTime(event.target.value);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setCurrentTime(initialTime);
    setIsRunning(false);
  };

  useEffect(() => {
    const checkVibration = () => {
      if (currentTime === 30 && !isVibrationTriggered) {
        navigator.vibrate(3000);
        setIsVibrationTriggered(true);
      }
    };

    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          }
          checkVibration();
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isRunning && currentTime !== initialTime) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, currentTime, initialTime, isVibrationTriggered]);

  return (
    <div>
      <Container className="text-center">
        <h3>Wybierz czas jaki gracz będzie miał na wykonanie swojego ruchu:</h3>
        <MDBInput
          type="number"
          placeholder="Podaj czas w sekundach"
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