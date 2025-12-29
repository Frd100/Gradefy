import React, { useRef, useEffect } from 'react'

function LiquidGlassSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <section className="liquid-glass-section">
      <div className="liquid-glass-container">
        <div className="liquid-glass-video-wrapper">
          <div className="liquid-glass-video-container">
            <video
              ref={videoRef}
              className="liquid-glass-video"
              src="/liquidglass.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>
        <div className="liquid-glass-content">
          <h2 className="liquid-glass-title">Liquid Glass iOS 26</h2>
          <p className="liquid-glass-description">
            Découvrez le nouveau design Liquid Glass d'iOS 26, une interface révolutionnaire 
            qui apporte fluidité et élégance à chaque interaction. Une expérience visuelle 
            immersive qui redéfinit l'esthétique mobile.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LiquidGlassSection

