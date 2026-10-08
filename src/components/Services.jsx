import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Services({ services = [] }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  if (!services.length) return null
  return (
    <section id="services" style={{ padding: isMobile ? '3rem 1.5rem' : '5rem 2.5rem', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: isMobile ? '1.5rem' : '3rem' }}>
        — Xidmətlər
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: isMobile ? '1rem' : '1.5rem' }}>
        {services.map((s, i) => (
          <div key={i} style={{ border: '1px solid #e0e0e0', padding: isMobile ? '1.5rem' : '2rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', marginBottom: '1rem', fontFamily: 'DM Sans, sans-serif' }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 style={{ fontFamily: "'EB Garamond', serif", fontWeight: 400, fontSize: '1.3rem', marginBottom: '0.75rem' }}>{s.title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.65, fontFamily: 'DM Sans, sans-serif' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
