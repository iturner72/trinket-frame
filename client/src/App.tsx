import React from 'react';
import './App.css';
import Frame from './components/Frame';

const App: React.FC = () => {
    const frameOptions = [
        { label: 'Rearden Steel', image: '/images/trinket1.png' },
        { label: 'Eth Head', image: '/images/trinket2.png' },
        { label: 'Gold Bug', image: '/images/trinket3.png' },
        { label: 'Girl Gamer', image: '/images/trinket4.png' },
        { label: 'Aquaman', image: '/images/trinket5.png' },
        { label: 'Lavender', image: '/images/trinket6.png' },
        { label: 'Rose Gold', image: '/images/trinket7.png' },
        { label: 'Tether IP Theft', image: '/images/trinket8.png' },
    ]; 

  return (
    <div className="App">
      <Frame options={frameOptions} />
    </div>
  );
}

export default App;
