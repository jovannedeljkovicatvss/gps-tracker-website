import React from 'react';
import './Cene.css';

const Cene = () => {
  const planovi = [
    {
      naziv: "📱 BASIC",
      cena: "BESPLATAN",
      opis: "Za povremeno korišćenje",
      popularan: false,
      karakteristike: [
        "✅ Osnovno praćenje lokacije",
        "✅ Čuvanje istorije (7 dana)",
        "✅ Real-time statistika",
        "✅ Osnovne notifikacije",
        "❌ Background servis (ograničen)",
        "❌ Export podataka u CSV",
        "❌ Napredni grafikoni",
        "❌ Premium podrška"
      ],
      dugme: "Trenutno aktivan",
      boja: "#667eea"
    },
    {
      naziv: "🚀 PREMIUM PRO",
      cena: "€4.99",
      period: "jednokratno",
      opis: "Za profesionalno korišćenje",
      popularan: true,
      karakteristike: [
        "✅ Neograničeno praćenje lokacije",
        "✅ Potpuna istorija (bez brisanja)",
        "✅ Napredna statistika kretanja",
        "✅ Pametni notifikacioni sistem",
        "✅ 24/7 Background servis",
        "✅ Export podataka u CSV/JSON",
        "✅ Detaljni grafikoni i analize",
        "✅ Prioritetna podrška"
      ],
      dugme: "Nadogradi na PRO",
      boja: "#764ba2"
    }
  ];

  const premiumFeatures = [
    {
      ikonica: "🌙",
      naslov: "Background Service",
      opis: "Neprekidno praćenje čak i kada aplikacija nije aktivna"
    },
    {
      ikonica: "📊",
      naslov: "Napredna Analitika",
      opis: "Detaljni grafikoni, trendovi i izveštaji o kretanju"
    },
    {
      ikonica: "💾",
      naslov: "Export Podataka",
      opis: "Preuzmite svoju istoriju u CSV ili JSON formatu"
    },
    {
      ikonica: "🔔", 
      naslov: "Pametne Notifikacije",
      opis: "Prilagođena obaveštenja bazirana na vašem kretanju"
    }
  ];

  return (
    <div className="cene">
      <div className="container">
        {/* Header */}
        <div className="cene-header">
          <h1>📊 Cene i Paketi</h1>
          <p>Izaberite plan koji najbolje odgovara vašim potrebama</p>
        </div>

        {/* Planovi */}
        <div className="planovi-grid">
          {planovi.map((plan, index) => (
            <div 
              key={index} 
              className={`plan-kartica ${plan.popularan ? 'popularan' : ''}`}
            >
              {plan.popularan && <div className="popularan-badge">PREPORUČUJEMO</div>}
              
              <div className="plan-header">
                <h3>{plan.naziv}</h3>
                <div className="plan-cena">
                  <span className="cena">{plan.cena}</span>
                  {plan.period && <span className="period">/{plan.period}</span>}
                </div>
                <p className="plan-opis">{plan.opis}</p>
              </div>

              <ul className="karakteristike-lista">
                {plan.karakteristike.map((karakteristika, idx) => (
                  <li key={idx} className={karakteristika.startsWith('❌') ? 'onemoguceno' : ''}>
                    {karakteristika}
                  </li>
                ))}
              </ul>

              <button 
                className={`plan-dugme ${plan.popularan ? 'premium' : 'basic'}`}
                style={{ backgroundColor: plan.boja }}
              >
                {plan.dugme}
              </button>
            </div>
          ))}
        </div>

        {/* Premium Feature Showcase */}
        <div className="premium-showcase">
          <h2>🚀 Šta dobijate sa Premium verzijom?</h2>
          <div className="premium-grid">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="premium-kartica">
                <div className="premium-ikonica">{feature.ikonica}</div>
                <h3>{feature.naslov}</h3>
                <p>{feature.opis}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>❔ Često Postavljana Pitanja</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Da li mogu da nadogradim kasnije?</h3>
              <p>Da! U bilo kom trenutku možete da nadogradite na Premium verziju putem aplikacije.</p>
            </div>
            <div className="faq-item">
              <h3>Koje načine plaćanja prihvatate?</h3>
              <p>Prihvatamo kreditne kartice, Google Pay i druge popularne načine plaćanja.</p>
            </div>
            <div className="faq-item">
              <h3>Da li postoji refundacija?</h3>
              <p>Da, nudimo 30-dnevnu garanciju povraćaja novca ako niste zadovoljni.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cene;