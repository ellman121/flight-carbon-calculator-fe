import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAirportDistance } from './api/airports/hooks';

// Internaltional long haul flights CO2e per passenger-kilometer
// 0.2613 kg/passenger-km (combustion)
// 0.02114 kg/passenger-km (well to tank)

// 

function App() {

  const tokyoToMunich = useAirportDistance({
    "name": "Narita International Airport",
    "code": "NRT",
    "coords": {
      "lat": 35.765278,
      "lon": 140.385556
    }
  },
    {
      "name": "Munich Airport",
      "code": "MUC",
      "coords": {
        "lat": 48.353889,
        "lon": 11.786111
      }
    })

  const kms = tokyoToMunich / 1000
  const emissions_wellToTank = kms * 0.02114 // UK estimate https://.....
  const emissions_distance = kms * 0.2613 // UK estimate https://.....
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {Math.round(kms)} km <p/>
          {Math.round(emissions_wellToTank)} kg CO2 for producing the fuel <p/>
          {Math.round(emissions_distance)} kg CO2 for flight distance
        </p>
      </header>
    </div>
  );
}

export default App;

