import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
   const { isDark, toggleTheme } = useTheme();

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
          <NavLink to="/detalji" className={({ isActive }) => isActive ? "active" : ""}>
            Detalji
          </NavLink>
          <NavLink to="/cene" className={({ isActive }) => isActive ? "active" : ""}>
            Cene
            </NavLink>
          <NavLink to="/kontakt" className={({ isActive }) => isActive ? "active" : ""}>
  Kontakt
</NavLink>
        </nav>
        {/* Theme Toggle Dugme */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;