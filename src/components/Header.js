import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>📍 GPS Tracker PRO</h1>
          </Link>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Početna
          </Link>
          <Link 
            to="/istorijat" 
            className={location.pathname === '/istorijat' ? 'active' : ''}
          >
            Istorijat
          </Link>
          <Link to="/detalji" className="coming-soon">
            Detalji
          </Link>
          <Link to="/cene" className="coming-soon">
            Cene
          </Link>
          <Link to="/kontakt" className="coming-soon">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;