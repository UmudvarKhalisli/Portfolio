import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

const label = { fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', fontFamily: 'DM Sans, sans-serif', marginBottom: '0.25rem' }
const value = { fontSize: '0.85rem', color: '#555', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif', marginBottom: '1rem' }

function WorkCard({ work, index, isMobile }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ border: `1px solid ${hovered ? '#0a0a0a' : '#e0e0e0'}`, padding: isMobile ? '1.5rem' : '2rem', transition: 'border-color 0.2s' }}
    >
      <div style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', marginBottom: '1rem', fontFamily: 'DM Sans, sans-serif' }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 style={{ fontFamily: "'EB Garamond', serif", fontWeight: 400, fontSize: '1.3rem', marginBottom: '1.25rem' }}>{work.brand}</h3>
      {work.image && <img src={work.image} alt={work.brand} style={{ width: '100%', marginBottom: '1.25rem', display: 'block' }} />}
      {work.task && (<><div style={label}>Tapşırıq</div><p style={value}>{work.task}</p></>)}
      {work.did && (<><div style={label}>Nə etdim</div><p style={value}>{work.did}</p></>)}
      {work.result && (<><div style={label}>Nəticə</div><p style={value}>{work.result}</p></>)}
      {work.link && (
        <a href={work.link} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none', color: '#0a0a0a', borderBottom: '1px solid #0a0a0a', paddingBottom: '1px' }}>
          Hesaba bax →
        </a>
      )}
    </div>
  )
}

export default function SmmWorks({ works = [] }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  if (!works.length) return null
  return (
    <section id="smm" style={{ padding: isMobile ? '3rem 1.5rem' : '5rem 2.5rem', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: isMobile ? '1.5rem' : '3rem' }}>
        — SMM işlərim
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: isMobile ? '1rem' : '1.5rem' }}>
        {works.map((w, i) => <WorkCard key={i} work={w} index={i} isMobile={isMobile} />)}
      </div>
    </section>
  )
}
