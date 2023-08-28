import React from "react";
import "./App.css";
import NaviApp from "./components/pages/NaviApp";

function App() {
  return (
    <div className="App">
      <div className="Inner">

        <header className="App-header">
          <h1>Board Game Calculator</h1>
        </header>
        <NaviApp />
      </div>
      <p>wersja z dnia 28.08.2023 19:01</p>

    </div>
  );
}

export default App;
