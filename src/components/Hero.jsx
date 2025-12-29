import React from 'react'

function Hero({ isAnimating, onToggleAnimation }) {
  return (
    <section className="apple-hero-section">
      <div className="apple-hero-container">
        {/* Logo + Brand */}
        <div className="apple-hero-brand">
          <span className="apple-hero-brand-text">Gradefy</span>
        </div>

        {/* Main Title */}
        <h1 className="apple-hero-title">
          Révolutionnez
          <br />
          votre
          <br />
          apprentissage.
        </h1>

        {/* Description */}
        <p className="apple-hero-description">
          Gérez vos notes, créez des flashcards avec l'IA, et optimisez vos révisions avec le système de répétition espacée.
        </p>
      </div>

      {/* Play/Pause Button */}
      <button 
        className="apple-play-button" 
        onClick={onToggleAnimation}
        aria-label={isAnimating ? "Pause l'animation" : "Lire l'animation"}
      >
        {isAnimating ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </section>
  )
}

export default Hero

