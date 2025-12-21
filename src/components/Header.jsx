import React, { useEffect, useState } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="flex items-center">
          <a href="#" className="logo-link" onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            <img src="/logo.png" alt="Gradefy" className="header-logo" />
            <span className="logo-text">Gradefy</span>
          </a>
        </div>
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li>
              <a
                href="#features"
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, '#features')}
              >
                Fonctionnalités
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <a
            href="https://apps.apple.com/app/gradefy"
            className="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            Télécharger sur l'App Store
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

