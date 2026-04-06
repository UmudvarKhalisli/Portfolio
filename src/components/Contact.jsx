import React from 'react'

import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Contact({ contact }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { email, linkedin, github, cv, text, whatsapp } = contact

  const links = [
    { label: email || 'Email', href: email ? `mailto:${email}` : null },
    { label: 'LinkedIn', href: linkedin || null },
    { label: 'GitHub', href: github || null },
    { label: 'WhatsApp', href: whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, '')}` : null },
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
          gridTemplateColumns: '1fr',
          gap: isMobile ? '2rem' : '4rem',
        }}>
          <p style={{
            fontSize: '1rem', lineHeight: 1.8, color: '#444',
            fontFamily: 'DM Sans, sans-serif',
          }}>
            {text || 'Müsahibə və ya əməkdaşlıq üçün əlaqə saxlayın.'}
          </p>

    const Icon = ({ path, label, href }) => {
      const [hover, setHover] = React.useState(false)
      return (
        <a
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            background: hover ? 'rgba(0,0,0,0.05)' : 'transparent',
            border: '1px solid #e0e0e0',
            transition: 'all 0.3s ease',
            color: '#0a0a0a',
            textDecoration: 'none',
          }}
          title={label}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={path} />
          </svg>
        </a>
      )
    }

    const icons = {
      Email: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
      LinkedIn: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2",
      GitHub: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
      WhatsApp: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
    }

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {links.map((l, i) => (
          <Icon key={i} label={l.label} href={l.href} path={icons[l.label] || icons.Email} />
        ))}
      </div>
    )
  }

  return (
    <>
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
          gridTemplateColumns: '1fr',
          gap: isMobile ? '2rem' : '3rem',
        }}>
          <p style={{
            fontSize: '1.1rem', lineHeight: 1.8, color: '#444',
            fontFamily: 'DM Sans, sans-serif', maxWidth: 600
          }}>
            {text || 'Müsahibə və ya əməkdaşlıq üçün əlaqə saxlayın.'}
          </p>

          <ContactIcons links={links} />
        </div>
      </section>
    </>
  )
}
