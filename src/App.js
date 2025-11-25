import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Intro from './pages/Intro';
import Istorijat from './pages/Istorijat';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/istorijat" element={<Istorijat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;