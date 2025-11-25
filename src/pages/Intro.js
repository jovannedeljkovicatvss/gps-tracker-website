import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>📍 GPS Tracker PRO</h1>
          </div>
          <nav className="nav">
            <a href="#uvod">Uvod</a>
            <a href="#istorija">Istorija</a>
            <a href="#detalji">Detalji</a>
            <a href="#cene">Cene</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero Sekcija */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>GPS Tracker PRO</h1>
            <p className="hero-subtitle">Napredna Android aplikacija za precizno praćenje lokacije i upravljanje rutama</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">📱 Preuzmi Aplikaciju</button>
              <button className="btn btn-secondary">🎬 Video Demo</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="map-demo">
                  <div className="location-pin">📍</div>
                  <p>Live Tracking Active</p>
                  <div className="gps-status">GPS: 🔵 Connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Šta Nudi Sekcija */}
      <section id="uvod" className="features">
        <div className="container">
          <h2>Zašto odabrati GPS Tracker PRO?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Precizno Praćenje</h3>
              <p>GPS tačnost do 5 metara sa real-time osvežavanjem lokacije svakih 3 sekunde</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Detaljne Statistike</h3>
              <p>Analiza ruta, brzine, vremena putovanja i potrošnje goriva</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Optimizovana Baterija</h3>
              <p>Pametno upravljanje resursima za dugotrajno praćenje bez punjenja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prednosti */}
      <section className="benefits">
        <div className="container">
          <h2>Ključne Prednosti</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-check">✅</span>
              <div>
                <h3>Rad u Pozadini</h3>
                <p>Nastavlja sa praćenjem čak i kada aplikacija nije aktivna</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✅</span>
              <div>
                <h3>Offline Mape</h3>
                <p>Funkcionalnost i bez internet konekcije</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✅</span>
              <div>
                <h3>Bezbednost Podataka</h3>
                <p>Svi podaci se čuvaju lokalno na vašem uređaju</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 GPS Tracker PRO. Razvijeno kao školski projekat.</p>
        </div>
      </footer>
    </div>
  );
};

export default Intro;