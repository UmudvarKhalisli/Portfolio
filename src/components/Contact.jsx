import React from 'react'

import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Contact({ contact }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { email, linkedin, github, cv, text } = contact

  const links = [
    { label: email || 'Email', href: email ? `mailto:${email}` : null },
    { label: 'LinkedIn', href: linkedin || null },
    { label: 'GitHub', href: github || null },
  ].filter(l => l.href)

  return (
    <>
      {cv && (
        <div style={{
          textAlign: 'center',
          padding: isMobile ? '3rem 1.5rem' : '4rem 2.5rem',
          borderTop: '1px solid #e0e0e0',
          borderBottom: '1px solid #e0e0e0',
        }}>
          <h3 style={{
            fontFamily: "'EB Garamond', serif", fontWeight: 400,
            fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '0.75rem',
          }}>
            CV-ni yüklə
          </h3>
          <p style={{
            color: '#888', fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.9rem', marginBottom: '2rem',
          }}>
            Tam tərcümeyi-halımı PDF formatında əldə edin.
          </p>
          <a
            href={cv}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block', padding: isMobile ? '0.75rem 1.75rem' : '0.85rem 2.5rem',
              background: '#0a0a0a', color: '#fafafa',
              textDecoration: 'none', fontSize: '0.78rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              fontFamily: 'DM Sans, sans-serif', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.8'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            CV-ni yüklə (PDF)
          </a>
        </div>
      )}

      <section id="contact" style={{ 
        padding: isMobile ? '3rem 1.5rem' : '5rem 2.5rem', 
        maxWidth: 960, 
        margin: '0 auto' 
      }}>
        <div style={{
          fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#888', marginBottom: isMobile ? '1.5rem' : '3rem',
        }}>
          — Əlaqə
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: isMobile ? '2rem' : '4rem',
        }}>
          <p style={{
            fontSize: '1rem', lineHeight: 1.8, color: '#444',
            fontFamily: 'DM Sans, sans-serif',
          }}>
            {text || 'Müsahibə və ya əməkdaşlıq üçün əlaqə saxlayın.'}
          </p>

          <div>
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1rem 0', borderBottom: '1px solid #e0e0e0',
                  textDecoration: 'none', color: '#0a0a0a',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <span>{l.label}</span>
                <span>→</span>
              </a>
            ))}
            {links.length === 0 && (
              <p style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem' }}>
                Admin paneldən əlaqə məlumatları əlavə edin.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
