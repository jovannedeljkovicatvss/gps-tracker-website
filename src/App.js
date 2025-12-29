import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Intro from './pages/Intro';
import Istorijat from './pages/Istorijat';
import Kontakt from './pages/Kontakt'; 
import Detalji from './pages/Detalji';
import Cene from './pages/Cene';
import { ThemeProvider } from './context/ThemeContext';
import ProgressBar from './components/ProgressBar';
import BackToTop from './components/BackToTop';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  // DODAJ OVO za refresh
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('load', handleLoad);
    
    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  
  return (
    <ThemeProvider>
    <Router>
      <ProgressBar /> 
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/istorijat" element={<Istorijat />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/detalji" element={<Detalji />} />
          <Route path="/cene" element={<Cene />} />
        </Routes>
      </div>
      <BackToTop />
    </Router>
    </ThemeProvider>
  );
}

export default App;