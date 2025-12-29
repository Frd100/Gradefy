import React from 'react'

function Footer() {
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="#"
              className="logo-link"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img src="/logo.png" alt="Gradefy" className="footer-logo" />
              <span className="logo-text">Gradefy</span>
            </a>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Gradefy</h4>
              <ul className="footer-list">
                <li>
                  <a
                    href="#features"
                    className="footer-link"
                    onClick={(e) => handleSmoothScroll(e, '#features')}
                  >
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="footer-link"
                    onClick={(e) => handleSmoothScroll(e, '#features')}
                  >
                    Fonctionnalités
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Gradefy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

