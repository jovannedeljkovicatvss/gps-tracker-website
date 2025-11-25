import React from 'react';
import './Detalji.css';

const Detalji = () => {
  const features = [
    {
      category: "📍 Osnovno Praćenje",
      items: [
        {
          icon: "🎯",
          title: "Real-time Lokacija",
          description: "Precizno praćenje trenutne pozicije sa visokom tačnošću",
          tech: "FusedLocationProvider, GPS/Network"
        },
        {
          icon: "📊",
          title: "Statistika Kretanja",
          description: "Brzina, rastojanje, vreme putovanja i visina",
          tech: "Location services, Sensors API"
        }
      ]
    },
    {
      category: "💾 Upravljanje Podacima",
      items: [
        {
          icon: "💾",
          title: "Local Storage",
          description: "Čuvanje istorije lokacija u lokalnoj bazi podataka",
          tech: "Room Database, SQLite"
        },
        {
          icon: "📁",
          title: "Export Podataka",
          description: "Izvezite istoriju putovanja u CSV format",
          tech: "File System, Sharing Intent"
        }
      ]
    },
    {
      category: "⚙️ Napredne Funkcije",
      items: [
        {
          icon: "🔔",
          title: "Pametni Notifikacioni Sistem",
          description: "Obaveštenja o promeni lokacije i statusu praćenja",
          tech: "WorkManager, NotificationManager"
        },
        {
          icon: "🌙",
          title: "Background Service",
          description: "Neprekidno praćenje čak i kada aplikacija nije aktivna",
          tech: "Foreground Service, Bound Service"
        }
      ]
    }
  ];

  return (
    <div className="detalji">
      <div className="container">
        <div className="detalji-header">
          <h1>GPS Tracker PRO - Detalji</h1>
          <p>Napredna Android aplikacija za praćenje lokacije sa modernim tehnologijama</p>
        </div>

        <div className="detalji-grid">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="detalji-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="detalji-list">
                {category.items.map((feature, featureIndex) => (
                  <div key={featureIndex} className="detalji-card">
                    <div className="detalji-icon">{feature.icon}</div>
                    <div className="detalji-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <div className="tech-stack">
                        <span>Tehnologije: {feature.tech}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-showcase">
          <h2>🛠️ Korišćene Tehnologije</h2>
          <div className="tech-grid">
            <div className="tech-item">Android SDK</div>
            <div className="tech-item">Kotlin</div>
            <div className="tech-item">Room Database</div>
            <div className="tech-item">WorkManager</div>
            <div className="tech-item">Coroutines</div>
            <div className="tech-item">FusedLocationProvider</div>
            <div className="tech-item">Foreground Service</div>
            <div className="tech-item">MVVM Architecture</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalji;