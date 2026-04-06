import React from 'react'

import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Hero({ profile }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { name, role, bio, imgUrl } = profile

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const roleText = (
    <div style={{
      fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase',
      color: '#888', fontFamily: 'DM Sans, sans-serif', marginBottom: '1rem'
    }}>
      {role || 'Frontend Developer'}
    </div>
  )

  const nameText = (
    <h1 style={{
      fontFamily: "'EB Garamond', serif",
      fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 7vw, 5.5rem)',
      fontWeight: 400,
      lineHeight: 1.0,
      letterSpacing: '-1px',
      marginBottom: isMobile ? '0' : '2rem',
      color: '#0a0a0a',
    }}>
      {name ? name.split(' ').map((w, i) => (
        <span key={i} style={{ display: 'block' }}>{w}</span>
      )) : <span>Ad<br />Soyad</span>}
    </h1>
  )

  const bioText = (
    <p style={{
      fontSize: '0.95rem', color: '#666', lineHeight: 1.75,
      maxWidth: 480, marginBottom: '2.5rem',
      fontFamily: 'DM Sans, sans-serif',
      marginTop: isMobile ? '1.5rem' : '0'
    }}>
      {bio || 'Admin paneldən öz məlumatlarınızı daxil edin.'}
    </p>
  )

  const actionButtons = (
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
        Layihələrim
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
  )

  const profileImage = (size, radius) => imgUrl && (
    <img
      src={imgUrl}
      alt={name}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        objectFit: 'cover',
        filter: 'grayscale(100%)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.target.style.filter = 'grayscale(0%)'
        e.target.style.transform = 'scale(1.02)'
      }}
      onMouseLeave={e => {
        e.target.style.filter = 'grayscale(100%)'
        e.target.style.transform = 'scale(1)'
      }}
    />
  )

  if (isMobile) {
    return (
      <section style={{ padding: '3rem 1.5rem', maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            {roleText}
            {nameText}
          </div>
          <div style={{ flexShrink: 0 }}>
            {profileImage('90px', '20px')}
          </div>
        </div>
        {bioText}
        {actionButtons}
      </section>
    )
  }

  return (
    <section style={{ 
      padding: '8rem 2.5rem 5rem', 
      maxWidth: 960, 
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: '4rem',
      alignItems: 'center'
    }}>
      <div>
        {roleText}
        {nameText}
        {bioText}
        {actionButtons}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {profileImage('260px', '48px')}
      </div>
    </section>
  )
}
