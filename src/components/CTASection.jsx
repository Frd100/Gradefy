import React from 'react'

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-icon-wrapper">
          <img src="/logo.png" alt="Gradefy" className="cta-logo" />
        </div>
        <h2 className="cta-title">Découvrir Gradefy</h2>
        <a
          href="#features"
          className="btn btn-secondary cta-button"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          Explorer les fonctionnalités
        </a>
        <p className="cta-note">* Concept d'application iOS</p>
      </div>
    </section>
  )
}

export default CTASection

