import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function PrivacySection() {
  const [containerRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="privacy-section">
      <div 
        ref={containerRef}
        className={`privacy-container ${isVisible ? 'fade-in-up' : ''}`}
      >
        <div className="privacy-icon">
          <span>🔐</span>
        </div>
        <h2 className="privacy-title">Confidentialité garantie</h2>
        <p className="privacy-description">
          Toutes les données seraient stockées localement sur l'appareil. Aucune
          transmission externe, aucun cloud. L'IA fonctionnerait entièrement hors ligne pour garantir la
          confidentialité.
        </p>
      </div>
    </section>
  )
}

export default PrivacySection


