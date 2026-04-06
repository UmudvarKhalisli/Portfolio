import React from 'react'

import { useMediaQuery } from '../hooks/useMediaQuery'

export default function About({ profile }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { about, skills, imgUrl, name } = profile

  const skillLines = (skills || '').split('\n').filter(Boolean).map(line => {
    const [skill, level] = line.split('|')
    return { 
      skill: (skill || '').trim(), 
      level: (level || '').trim() 
    }
  })

  const initials = (name || 'AD').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

  return (
    <section id="about" style={{ 
      padding: isMobile ? '3rem 1.5rem' : '5rem 2.5rem', 
      maxWidth: 960, 
      margin: '0 auto' 
    }}>
      <div style={{
        fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#888', marginBottom: isMobile ? '1.5rem' : '3rem',
      }}>
        — Haqqımda
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: isMobile ? '2rem' : '4rem',
        alignItems: 'start',
      }}>
        <div>
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={name}
              style={{
                width: 100, height: 100, borderRadius: '50%',
                objectFit: 'cover', marginBottom: '1.5rem',
                border: '1px solid #e0e0e0',
              }}
            />
          ) : (
            <div style={{
              width: 100, height: 100, borderRadius: '50%',
              background: '#f0f0f0', display: 'flex', alignItems: 'center',
              justifyContent: 'center', marginBottom: '1.5rem',
              fontFamily: "'EB Garamond', serif", fontSize: '1.8rem',
              color: '#888', border: '1px solid #e0e0e0',
            }}>
              {initials}
            </div>
          )}
          <p style={{
            fontSize: '1rem', lineHeight: 1.85, color: '#444',
            fontFamily: 'DM Sans, sans-serif',
          }}>
            {about || 'Admin paneldən haqqınızda məlumat əlavə edin.'}
          </p>
        </div>

        <div>
          <div style={{
            fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#888', marginBottom: '1.25rem',
          }}>
            Bacarıqlar
          </div>
          <ul style={{ listStyle: 'none' }}>
            {skillLines.map((s, i) => (
              <li key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.75rem 0', borderBottom: '1px solid #e0e0e0',
                fontSize: '0.9rem', fontFamily: 'DM Sans, sans-serif',
              }}>
                <span>{s.skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
