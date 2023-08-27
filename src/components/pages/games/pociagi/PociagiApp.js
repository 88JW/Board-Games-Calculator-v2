import React, { useState } from "react";
import CommonPlayerForm from "../../CommonPlayerForm";
// pobieranie komponentu CommonPlayerForm z pliku CommonPlayerForm.js wyboru gracza i imienia

import PociagiCalculation from "./PociagiCalculation";
// pobieranie komponentu NumberForm z pliku NumberForm.js dla generowania formularzy dla każdego gracza


// Funkcja główna komponentu App - renderuje formularz CommonPlayerForm oraz formularze dla każdego użytkownika (NumberForm)  
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
        <PociagiCalculation key={index} formCount={index + 1} playerName={name} />
      ))}
    </div>
  );
}

export default App;