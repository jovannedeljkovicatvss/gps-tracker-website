import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Intro from './pages/Intro';
import Istorijat from './pages/Istorijat';
import Kontakt from './pages/Kontakt'; 
import Detalji from './pages/Detalji';
import Cene from './pages/Cene';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/istorijat" element={<Istorijat />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/detalji" element={<Detalji />} />
          <Route path="/cene" element={<Cene />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;