import React from 'react'

function FeatureSection({ title, icon, description, imageClass, reverse }) {
  return (
    <section className="feature-section" id="features">
      <div className="feature-container">
        <div className="feature-header">
          <h2 className="feature-title">{title}</h2>
        </div>
        <div className={`feature-grid ${reverse ? 'feature-grid-reverse' : ''}`}>
          <div className="feature-image-wrapper">
            <div className={`image-placeholder ${imageClass}`}></div>
            <div className={`gradient-overlay ${reverse ? 'gradient-left' : 'gradient-right'}`}></div>
          </div>
          <div className="feature-content">
            <div className="feature-icon-small">
              <span>{icon}</span>
            </div>
            <p className="feature-description">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection


