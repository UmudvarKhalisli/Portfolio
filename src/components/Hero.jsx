import React from 'react'

import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Hero({ profile }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { name, role, bio, imgUrl } = profile

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const sectionStyle = {
    padding: isMobile ? '3rem 1.5rem 3rem' : '8rem 2.5rem 5rem',
    maxWidth: 960,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
    gap: isMobile ? '2.5rem' : '4rem',
    alignItems: 'center',
  }

  return (
    <section style={sectionStyle}>
      <div style={{ order: isMobile ? 2 : 1 }}>
        <div style={{
          fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#888', fontFamily: 'DM Sans, sans-serif', marginBottom: '1.5rem'
        }}>
          {role || 'Frontend Developer'}
        </div>

        <h1 style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 400,
          lineHeight: 1.0,
          letterSpacing: '-2px',
          marginBottom: '2rem',
          color: '#0a0a0a',
        }}>
          {name ? name.split(' ').map((w, i) => (
            <span key={i} style={{ display: 'block' }}>{w}</span>
          )) : <span>Ad<br />Soyad</span>}
        </h1>

        <p style={{
          fontSize: '1rem', color: '#666', lineHeight: 1.75,
          maxWidth: 480, marginBottom: '2.5rem',
          fontFamily: 'DM Sans, sans-serif',
        }}>
          {bio || 'Admin paneldən öz məlumatlarınızı daxil edin.'}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => scroll('projects')}
            style={{
              padding: '0.75rem 2rem',
              border: '1px solid #0a0a0a',
              background: '#0a0a0a',
              color: '#fafafa',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = '#333' }}
            onMouseLeave={e => { e.target.style.background = '#0a0a0a' }}
          >
            Layihələrə bax
          </button>
          <button
            onClick={() => scroll('contact')}
            style={{
              padding: '0.75rem 2rem',
              border: '1px solid #e0e0e0',
              background: 'transparent',
              color: '#0a0a0a',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = '#0a0a0a' }}
            onMouseLeave={e => { e.target.style.borderColor = '#e0e0e0' }}
          >
            Əlaqə
          </button>
        </div>
      </div>

      {imgUrl && (
        <div style={{ 
          order: isMobile ? 1 : 2,
          display: 'flex',
          justifyContent: isMobile ? 'flex-start' : 'flex-end',
          alignItems: 'center'
        }}>
          <img
            src={imgUrl}
            alt={name}
            style={{
              width: isMobile ? '120px' : '300px',
              height: isMobile ? '120px' : '300px',
              borderRadius: 0,
              objectFit: 'cover',
              filter: 'grayscale(100%)',
              transition: 'filter 0.3s ease',
            }}
            onMouseEnter={e => e.target.style.filter = 'grayscale(0%)'}
            onMouseLeave={e => e.target.style.filter = 'grayscale(100%)'}
          />
        </div>
      )}
    </section>
  )
}
