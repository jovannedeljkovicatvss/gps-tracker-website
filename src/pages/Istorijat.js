import React from 'react';
import './Istorijat.css';

const Istorijat = () => {
  return (
    <div className="istorijat">
      <div className="container">
        <h1>Istorijat i Motivacija</h1>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Oktobar 2025</div>
            <div className="timeline-content">
              <h3>Početak Ideje</h3>
              <p>
                Kao student master studija, želeo sam da kombinujem teorijsko znanje 
                sa praktičnom primenom. GPS Tracker PRO je nastao iz želje da 
                rešim stvarne probleme praćenja lokacije u svakodnevnom životu.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Novembar 2025</div>
            <div className="timeline-content">
              <h3>Istraživanje i Planiranje</h3>
              <p>
                Detaljno istraživanje postojećih rešenja na tržištu. Analiza 
                korisničkih potreba i identifikacija nedostataka u konkurentskim aplikacijama.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Decembar 2025</div>
            <div className="timeline-content">
              <h3>Razvoj Prve Verzije</h3>
              <p>
                Implementacija osnovnih funkcionalnosti: praćenje lokacije, 
                snimanje ruta i upravljanje tačkama interesa. Fokus na stabilnost i pouzdanost.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Januar 2026</div>
            <div className="timeline-content">
              <h3>Finalna Verzija</h3>
              <p>
                Dodavanje naprednih funkcionalnosti, optimizacija performansi, 
                i priprema za publikaciju. Testiranje na različitim Android uređajima.
              </p>
            </div>
          </div>
        </div>

        <div className="motivacija">
          <h2>Motivacija</h2>
          <div className="motivacija-grid">
            <div className="motivacija-card">
              <h3>🎓 Akademski Izazov</h3>
              <p>Primena stečenog znanja iz Android programiranja na realan projekt</p>
            </div>
            <div className="motivacija-card">
              <h3>💡 Inovacija</h3>
              <p>Kreiranje boljeg rešenja od postojećih na tržištu</p>
            </div>
            <div className="motivacija-card">
              <h3>🚀 Praktična Primena</h3>
              <p>Aplikacija koja rešava stvarne probleme korisnika</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Istorijat;