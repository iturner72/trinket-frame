import React from 'react';
import './App.css';
import dataUris from './services/data_uris.json';
import Frame from './components/Frame';

const App: React.FC = () => {
    const frameOptions = [
        { label: 'Rearden Steel', image: dataUris['trinket1'] },
        { label: 'Eth Head', image: dataUris['trinket2'] },
        { label: 'Gold Bug', image: dataUris['trinket3'] },
        { label: 'Girl Gamer', image: dataUris['trinket4'] },
        { label: 'Aquaman', image: dataUris['trinket5'] },
        { label: 'Lavender', image: dataUris['trinket6'] },
        { label: 'Rose Gold', image: dataUris['trinket7'] },
        { label: 'Tether IP Theft', image: dataUris['trinket8']},
    ]; 

  return (
    <div className="App">
      <Frame options={frameOptions} />
    </div>
  );
}

export default App;
