import React from 'react';
import './Intro.css';
import { NavLink } from 'react-router-dom';
import useCounter from '../hooks/useCounter';

const Intro = () => {
  const [userRating, ratingRef] = useCounter(4.8);
  const [downloads, downloadsRef] = useCounter(500);
  const [reliability, reliabilityRef] = useCounter(99);
  
  return (
    <div className="intro">
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
              <a 
                href="https://github.com/jovannedeljkovicatvss/gps-tracker-website/releases/download/GPS_Tracker_PRO_v1/GPS.Tracker.PRO.apk" 
                className="btn btn-primary"
                target="_blank" 
                rel="noopener noreferrer"
                download="GPS_Tracker_PRO.apk"
              >
                <span className="btn-icon">📱</span>
                Preuzmi Aplikaciju
              </a>
              <a 
                href="https://www.youtube.com" 
                className="btn btn-secondary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="btn-icon">🎬</span>
                Pogledaj Demo
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat" ref={ratingRef}>
                <div className="stat-number">{userRating.toFixed(1)}/5</div>
                <div className="stat-label">Ocena korisnika</div>
              </div>
              
              <div className="stat" ref={downloadsRef}>
                <div className="stat-number">{downloads}+</div>
                <div className="stat-label">Preuzimanja</div>
              </div>
              
              <div className="stat" ref={reliabilityRef}>
                <div className="stat-number">{reliability}%</div>
                <div className="stat-label">Pouzdanost</div>
              </div>

              {/* OVO JE ISPRAVLJEN DEO - SA DIRECT DOWNLOAD LINKOM */}
              <div className="stat">
                <a 
                  href="https://drive.google.com/file/d/1yf0orbbJh-fiS_VO3srNf0H5X_RsOhOb/view?usp=sharing/preview"
                  className="btn-learn-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-icon">📖</span>
                  Saznaj više
                </a>
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
                    <div className="satellite-background"></div>
                    
                    <div className="location-marker">
                      <div className="pulse-effect"></div>
                      <div className="pulse-effect-2"></div>
                      <div className="marker-center">📍</div>
                    </div>
                    
                    <div className="current-location">
                      <div className="coord">43.3209° N</div>
                      <div className="coord">21.8957° E</div>
                      <div className="location-name">Niš, Srbija</div>
                    </div>

                    <div className="map-roads">
                      <div className="road horizontal"></div>
                      <div className="road vertical"></div>
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
          <p>&copy; 2025 GPS Tracker PRO. Razvijeno kao školski projekat.</p>
          
          <div className="eco-friendly">
            <div className="eco-icon">🌱</div>
            <h3 className="eco-title">Eco-friendly Website</h3>
            <p className="eco-desc">
              Ovaj sajt je optimizovan za minimalnu potrošnju energije. 
              Koristi sistem fontove, optimizovane slike i efikasne animacije.
            </p>
            <div className="eco-stats">
              <div className="eco-stat">
                <span className="stat-number">~40%</span>
                <span className="stat-label">manje energije</span>
              </div>
              <div className="eco-stat">
                <span className="stat-number">0.2g</span>
                <span className="stat-label">CO2 po stranici</span>
              </div>
              <div className="eco-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">sistem fontovi</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Intro;