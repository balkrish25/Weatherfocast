import React from 'react';
import './App.css';
import WeatherDashboard from '../src/components/WeatherDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
      </header>
      <main>
        <WeatherDashboard />
      </main>
    </div>
  );
}

export default App;
