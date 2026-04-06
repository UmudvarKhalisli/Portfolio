import React, { useState, useRef } from 'react'

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 2.5rem',
    borderBottom: '1px solid #e0e0e0',
    position: 'sticky',
    top: 0,
    background: 'rgba(250,250,250,0.96)',
    backdropFilter: 'blur(8px)',
    zIndex: 100,
  },
  logo: {
    fontFamily: "'EB Garamond', serif",
    fontSize: '1.1rem',
    fontWeight: 400,
    letterSpacing: '-0.3px',
    textDecoration: 'none',
    color: '#0a0a0a',
    cursor: 'pointer',
    userSelect: 'none',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#888',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    transition: 'color 0.2s',
    padding: 0,
    fontFamily: 'DM Sans, sans-serif',
  },
  templateBtn: {
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#0a0a0a',
    cursor: 'pointer',
    background: 'none',
    border: '1px solid #0a0a0a',
    padding: '0.45rem 0.9rem',
    fontFamily: 'DM Sans, sans-serif',
    borderRadius: 0,
    transition: 'all 0.2s',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '2rem',
  },
  modal: {
    background: '#fff',
    border: '1px solid #0a0a0a',
    maxWidth: '440px',
    width: '100%',
    padding: '2.5rem',
    position: 'relative',
    textAlign: 'center',
    borderRadius: 0,
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
  },
  closeBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#0a0a0a',
    lineHeight: 1,
  },
  modalTitle: {
    fontFamily: "'EB Garamond', serif",
    fontSize: '1.75rem',
    fontWeight: 400,
    marginBottom: '1rem',
    color: '#0a0a0a',
  },
  modalText: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.9rem',
    lineHeight: 1.6,
    color: '#666',
    marginBottom: '2rem',
  },
  githubBtn: {
    display: 'block',
    background: '#0a0a0a',
    color: '#fff',
    textDecoration: 'none',
    padding: '1rem',
    fontSize: '0.78rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    marginBottom: '1.5rem',
    transition: 'opacity 0.2s',
  },
  modalFooter: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.75rem',
    lineHeight: 1.6,
    color: '#888',
  }
}

export default function Navbar({ name, onAdminOpen }) {
  const [showModal, setShowModal] = useState(false)
  const [clicks, setClicks] = useState(0)
  const lastClick = useRef(0)

  const handleLogoClick = () => {
    const now = Date.now()
    if (now - lastClick.current > 2000) {
      setClicks(1)
    } else {
      const next = clicks + 1
      if (next === 5) {
        onAdminOpen()
        setClicks(0)
      } else {
        setClicks(next)
      }
    }
    lastClick.current = now
  }

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={styles.nav}>
        <span style={styles.logo} onClick={handleLogoClick}>{name || 'Ad Soyad'}</span>
        <div style={styles.links}>
          <button style={styles.link} onClick={() => scroll('about')}>Haqqımda</button>
          <button style={styles.link} onClick={() => scroll('projects')}>Layihələr</button>
          <button style={styles.link} onClick={() => scroll('contact')}>Əlaqə</button>
          <button 
            style={styles.templateBtn} 
            onClick={() => setShowModal(true)}
            onMouseEnter={e => { e.target.style.background = '#0a0a0a'; e.target.style.color = '#fff' }}
            onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = '#0a0a0a' }}
          >
            Bu şablonu istifadə et
          </button>
        </div>
      </nav>

      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>
            <h2 style={styles.modalTitle}>Öz portfolionu yarat</h2>
            <p style={styles.modalText}>
              Bu portfolionun şablonunu GitHub-dan əldə edib özünə uyğunlaşdıra bilərsən.
            </p>
            <a 
              href="https://github.com/UmudvarKhalisli/Portfolio" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.githubBtn}
              onMouseEnter={e => e.target.style.opacity = '0.8'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              GitHub Reposuna bax →
            </a>
            <div style={styles.modalFooter}>
              <p style={{ fontWeight: 500, color: '#444', marginBottom: '0.5rem' }}>
                Admin panelə giriş şifrəsi repoda README.md faylında yazılıb.
              </p>
              <p>
                Şifrəni tapdıqdan sonra saytda admin paneli aktivləşdirmək üçün README-dəki təlimatları izlə.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
