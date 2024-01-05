import React from 'react';
import './App.css';
import AirportDistanceScreeen from './features/airportDistance/screens/AirportDistance';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <QueryClientProvider client={queryClient} >
            <AirportDistanceScreeen/>
          </QueryClientProvider>
        </p>
      </header>
    </div>
  );
}

export default App;

