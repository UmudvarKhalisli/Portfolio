import React from 'react'

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
  },
  adminBtn: {
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#0a0a0a',
    fontWeight: 500,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
  },
}

export default function Navbar({ name, onAdminOpen }) {
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>{name || 'Ad Soyad'}</span>
      <div style={styles.links}>
        <button style={styles.link} onClick={() => scroll('about')}>Haqqımda</button>
        <button style={styles.link} onClick={() => scroll('projects')}>Layihələr</button>
        <button style={styles.link} onClick={() => scroll('contact')}>Əlaqə</button>
        <button style={styles.adminBtn} onClick={onAdminOpen}>⚙</button>
      </div>
    </nav>
  )
}
