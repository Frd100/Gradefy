import React from 'react'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-icon-wrapper">
            <img src="/logo.png" alt="Gradefy" className="hero-logo" />
          </div>
          <h1 className="hero-title">Gradefy</h1>
          <a
            href="https://apps.apple.com/app/gradefy"
            className="btn btn-secondary hero-cta"
            target="_blank"
            rel="noopener"
          >
            Télécharger sur l'App Store
          </a>
        </div>
        <div className="hero-video-wrapper">
          <div className="video-placeholder">
            <div className="play-icon">▶</div>
          </div>
        </div>
        <div className="hero-description">
          <p className="hero-text">
            L'application iOS qui révolutionne votre façon d'apprendre. Gérez vos notes, créez
            des flashcards intelligentes avec l'IA, et optimisez vos révisions avec le système de répétition
            espacée.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

