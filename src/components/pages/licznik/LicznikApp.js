import React, { useState } from "react";
import CommonPlayerForm from "../CommonPlayerForm";
import EverdellCalculation from "./LicznikCalculation";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [playerNames, setPlayerNames] = useState([]);
  // tablica z imionami graczy
  const [showCommonPlayerForm, setShowCommonPlayerForm] = useState(true);
  // zmienna do renderowania warunkowego dla CommonPlayerForm

  const handleStart = (names) => {
    setPlayerNames(names);
    // przekazanie imion graczy do tablicy playerNames
    setShowCommonPlayerForm(false);
    //  zmiana wartości zmiennej showCommonPlayerForm na false
  };

  return (
    <div>
      {/* Renderowanie warunkowe dla CommonPlayerForm */}
      {showCommonPlayerForm && <CommonPlayerForm onStart={handleStart} />}
      {/* Dodanie formularza dla każdego użytkownika */}
      {playerNames.map((name, index) => (
        <EverdellCalculation key={index} formCount={index + 1} playerName={name} />
      ))}
    </div>
  );
}

export default App;