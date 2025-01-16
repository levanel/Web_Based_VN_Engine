import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartMenu from './startMenu';
import Ch1_Layout from './Chapter1';
import Ch2_Layout from './Chapter2';
import backgroundImage from './images/classrom1.jpeg';

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Routes>
          {/* Main route for StartMenu */}
          <Route path="/" element={<StartMenu />} />
          {/* Route for Chapter 1 Layout */}        
          <Route path="/Chapter1/" element={<Ch1_Layout />}/>
          <Route path="/Chapter2/" element={<Ch2_Layout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
