import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './pages/Intro';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/gps-tracker-website" element={<Intro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;