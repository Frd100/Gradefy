import React from 'react'

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-icon-wrapper">
          <img src="/logo.png" alt="Gradefy" className="cta-logo" />
        </div>
        <h2 className="cta-title">Télécharger Gradefy</h2>
        <a
          href="https://apps.apple.com/app/gradefy"
          className="btn btn-secondary cta-button"
          target="_blank"
          rel="noopener"
        >
          Télécharger sur l'App Store
        </a>
        <p className="cta-note">* Disponible sur iOS 17.0 et versions ultérieures</p>
      </div>
    </section>
  )
}

export default CTASection

