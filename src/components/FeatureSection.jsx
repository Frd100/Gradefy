import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function FeatureSection({ title, icon, description, imageClass, reverse }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="feature-section" id="features">
      <div className="feature-container">
        <div 
          ref={headerRef}
          className={`feature-header ${headerVisible ? 'fade-in-up' : ''}`}
        >
          <h2 className="feature-title">{title}</h2>
        </div>
        <div className={`feature-grid ${reverse ? 'feature-grid-reverse' : ''}`}>
          <div 
            ref={imageRef}
            className={`feature-image-wrapper ${imageVisible ? 'fade-in' : ''}`}
          >
            <div className={`image-placeholder ${imageClass}`}></div>
            <div className={`gradient-overlay ${reverse ? 'gradient-left' : 'gradient-right'}`}></div>
          </div>
          <div 
            ref={contentRef}
            className={`feature-content ${contentVisible ? 'fade-in-up' : ''}`}
          >
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


