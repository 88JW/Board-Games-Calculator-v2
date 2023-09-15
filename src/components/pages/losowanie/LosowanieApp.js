import React, { useState, useEffect } from 'react';
// import './App.css';

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');
  const [randomName, setRandomName] = useState('');

  useEffect(() => {
    // Sprawdź, czy są zapisane nazwy w localStorage
    const savedNames = localStorage.getItem('savedGamesNames');
    if (savedNames) {
      setNames(JSON.parse(savedNames));
    }

    // // Ustaw interwał do czyszczenia localStorage co godzinę (3600000 milisekund)
    // const clearLocalStorageInterval = setInterval(() => {
    //   localStorage.clear();
    //   setNames([]);
    // }, 3600000);

    // return () => {
    //   // Po odmontowaniu komponentu zatrzymaj interwał
    //   clearInterval(clearLocalStorageInterval);
    // };
  }, []);

  const addName = () => {
    if (name.trim() !== '') {
      const updatedNames = [...names, { name: name, checked: false }];
      setNames(updatedNames);
      setName('');

      // Zapisz nazwy w localStorage
      localStorage.setItem('savedGamesNames', JSON.stringify(updatedNames));
    }
  };

  const removeName = (indexToRemove) => {
    const updatedNames = names.filter((_, index) => index !== indexToRemove);
    setNames(updatedNames);

    // Zapisz zaktualizowane nazwy w localStorage
    localStorage.setItem('savedGamesNames', JSON.stringify(updatedNames));
  };

  const toggleCheck = (index) => {
    const updatedNames = [...names];
    updatedNames[index].checked = !updatedNames[index].checked;
    setNames(updatedNames);

    // Zapisz zaktualizowane nazwy w localStorage
    localStorage.setItem('savedGamesNames', JSON.stringify(updatedNames));
  };

  const endInput = () => {
    // Wybierz tylko zaznaczone nazwy do losowania
    const selectedNames = names.filter((nameItem) => nameItem.checked);

    if (selectedNames.length > 0) {
      const randomIndex = Math.floor(Math.random() * selectedNames.length);
      const selectedName = selectedNames[randomIndex].name;
      setRandomName(selectedName);
    } else {
      setRandomName('Brak zaznaczonych gier do losowania.');
    }
  };

  return (
    <div className="App">
      <h1>Biblioteka gier:</h1>
      <div>
        <input
          type="text"
          placeholder="Wprowadź nazwę"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addName}>Dodaj</button>
      </div>

      <h2>Lista wprowadzonych gier:</h2>
      <h5>Zaznacz gry które mają być losowane</h5>
      <ul>
        {names.map((nameItem, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={nameItem.checked}
                onChange={() => toggleCheck(index)}
              />
              {nameItem.name}
            </label>
            <button onClick={() => removeName(index)}>Usuń</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={endInput}>Wylosuj grę</button>
      </div>
      <h2>Wylosowana gra:</h2>
      <p>{randomName}</p>
    </div>
  );
}

export default App;