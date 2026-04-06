import React from 'react'

import { useMediaQuery } from '../hooks/useMediaQuery'

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
        background: hover ? 'rgba(255,255,255,0.1)' : 'transparent',
        border: '1px solid var(--border)',
        transition: 'all 0.3s ease',
        color: 'var(--black)',
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

const ContactIcons = ({ links }) => {
  const icons = {
    Email: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
    LinkedIn: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2",
    GitHub: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    WhatsApp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.045a11.971 11.971 0 001.591 6.001L0 24l6.135-1.61a11.912 11.912 0 005.91 1.554h.005c6.637 0 12.048-5.412 12.052-12.046a11.82 11.82 0 00-3.535-8.495z"
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
      {links.map((l, i) => (
        <Icon key={i} label={l.label} href={l.href} path={icons[l.label] || icons.Email} />
      ))}
    </div>
  )
}

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
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}>
          <h3 style={{
            fontFamily: "'EB Garamond', serif", fontWeight: 400,
            fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '0.75rem',
            color: 'var(--black)',
          }}>
            CV-ni yüklə
          </h3>
          <p style={{
            color: 'var(--gray)', fontFamily: 'DM Sans, sans-serif',
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
              background: 'var(--black)', color: 'var(--white)',
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
          color: 'var(--gray)', marginBottom: isMobile ? '1.5rem' : '3rem',
        }}>
          — Əlaqə
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: isMobile ? '2rem' : '3rem',
        }}>
          <p style={{
            fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)',
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
