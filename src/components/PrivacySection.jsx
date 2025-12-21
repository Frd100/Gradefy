import React from 'react'

function PrivacySection() {
  return (
    <section className="privacy-section">
      <div className="privacy-container">
        <div className="privacy-icon">
          <span>🔐</span>
        </div>
        <h2 className="privacy-title">Vos données restent privées</h2>
        <p className="privacy-description">
          Toutes vos données sont stockées localement sur votre appareil. Aucune
          transmission externe, aucun cloud. L'IA fonctionne entièrement hors ligne pour garantir votre
          confidentialité.
        </p>
      </div>
    </section>
  )
}

export default PrivacySection


