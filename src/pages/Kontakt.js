import React, { useState } from 'react';
import './Kontakt.css';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    tema: '',
    poruka: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulacija slanja forme
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ ime: '', email: '', tema: '', poruka: '' });
    }, 2000);
  };

  return (
    <div className="kontakt">
      <div className="container">
        <div className="kontakt-header">
          <h1>Kontaktirajte Nas</h1>
          <p>Imate pitanja ili vam treba podrška? Javite nam se!</p>
        </div>

        <div className="kontakt-content">
          {/* Kontakt Informacije */}
          <div className="kontakt-info">
            <div className="info-card">
              <h2>📧 Informacije</h2>
              
              <div className="info-item">
                <div className="info-icon">🎓</div>
                <div className="info-details">
                  <h3>Student</h3>
                  <p>Jovan Nedeljković</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🏫</div>
                <div className="info-details">
                  <h3>Fakultet</h3>
                  <p>Akademija tehničko-vaspitačkih strukovnih studija</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📚</div>
                <div className="info-details">
                  <h3>Predmet</h3>
                  <p>Klijentske tehnologije</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-details">
                  <h3>Projekat</h3>
                  <p>GPS Tracker PRO Android aplikacija</p>
                </div>
              </div>
            </div>

            <div className="stats-card">
              <h3>📊 Statistike Projekta</h3>
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Preuzimanja</div>
                </div>
                <div className="stat">
                  <div className="stat-number">4.8</div>
                  <div className="stat-label">Ocena</div>
                </div>
                <div className="stat">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Pouzdanost</div>
                </div>
              </div>
            </div>
          </div>

          {/* Kontakt Forma */}
          <div className="kontakt-forma">
            <div className="form-card">
              <h2>✉️ Pošaljite Poruku</h2>
              
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <h3>Poruka je uspešno poslata!</h3>
                  <p>Odgovorićemo vam u najkraćem mogućem roku.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-secondary"
                  >
                    Pošalji novu poruku
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="ime">Ime i prezime *</label>
                    <input
                      type="text"
                      id="ime"
                      name="ime"
                      value={formData.ime}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Unesite vaše ime i prezime"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email adresa *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="unesite@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tema">Tema poruke *</label>
                    <select
                      id="tema"
                      name="tema"
                      value={formData.tema}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Izaberite temu</option>
                      <option value="podrska">Podrška za aplikaciju</option>
                      <option value="pitanje">Tehničko pitanje</option>
                      <option value="predlog">Predlog za poboljšanje</option>
                      <option value="saradnja">Saradnja</option>
                      <option value="ostalo">Ostalo</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="poruka">Poruka *</label>
                    <textarea
                      id="poruka"
                      name="poruka"
                      rows="6"
                      value={formData.poruka}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Opišite vaš problem, pitanje ili predlog..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading-spinner"></span>
                        Slanje...
                      </>
                    ) : (
                      'Pošalji poruku'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;