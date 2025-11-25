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
            <p className="hero-subtitle">
              Profesionalno rešenje za praćenje lokacije, analizu ruta i upravljanje tačkama interesa. 
              Savršen alat za svakodnevnu upotrebu i poslovne potrebe.
            </p>
            
            <div className="hero-features">
              <div className="feature-badge">
                <span className="feature-icon">🎯</span>
                <span>Tačnost do 5m</span>
              </div>
              <div className="feature-badge">
                <span className="feature-icon">⚡</span>
                <span>Real-time praćenje</span>
              </div>
              <div className="feature-badge">
                <span className="feature-icon">📊</span>
                <span>Detaljne statistike</span>
              </div>
              <div className="feature-badge">
                <span className="feature-icon">🔒</span>
                <span>Privatnost podataka</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary">
                <span className="btn-icon">📱</span>
                Preuzmi Aplikaciju
              </button>
              <button className="btn btn-secondary">
                <span className="btn-icon">🎬</span>
                Pogledaj Demo
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">4.8/5</div>
                <div className="stat-label">Ocena korisnika</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Preuzimanja</div>
              </div>
              <div className="stat">
                <div className="stat-number">99%</div>
                <div className="stat-label">Pouzdanost</div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="app-header">
                    <div className="app-title">GPS Tracker PRO</div>
                    <div className="app-status">
                      <span className="status-dot"></span>
                      <span>Active</span>
                    </div>
                  </div>
                  
                  <div className="map-view">
                    <div className="location-marker">
                      <div className="pulse-effect"></div>
                      <div className="marker-center">📍</div>
                    </div>
                    <div className="current-location">
                      <div className="coord">44.7866° N</div>
                      <div className="coord">20.4489° E</div>
                    </div>
                  </div>
                  
                  <div className="app-footer">
                    <div className="gps-info">
                      <div className="signal-strength">
                        <span>📶</span>
                        <span>Excellent</span>
                      </div>
                      <div className="battery-level">
                        <span>🔋</span>
                        <span>85%</span>
                      </div>
                    </div>
                    <div className="tracking-stats">
                      <div className="stat-item">
                        <span>🛣️</span>
                        <span>12.5 km</span>
                      </div>
                      <div className="stat-item">
                        <span>⏱️</span>
                        <span>45 min</span>
                      </div>
                    </div>
                  </div>
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