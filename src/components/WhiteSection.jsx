import React, { useRef, useEffect } from 'react'

function WhiteSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <section className="white-section">
      <div className="white-section-container">
        <div className="white-section-rectangle">
          <video
            ref={videoRef}
            className="white-section-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/Video_1_copie.mp4" type="video/quicktime" />
            <source src="/Video_1.mov" type="video/quicktime" />
            <source src="/Video_1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </section>
  )
}

export default WhiteSection

