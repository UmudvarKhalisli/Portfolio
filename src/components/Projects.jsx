import React from 'react'

function ProjectCard({ project, index, isMobile }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? 'var(--black)' : 'var(--border)'}`,
        padding: isMobile ? '1.5rem' : '2rem',
        transition: 'all 0.2s',
        cursor: 'default',
        background: hovered ? 'rgba(255,255,255,0.03)' : 'transparent',
      }}
    >
      <div style={{
        fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em',
        marginBottom: '1rem', fontFamily: 'DM Sans, sans-serif',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 style={{
        fontFamily: "'EB Garamond', serif", fontWeight: 400,
        fontSize: '1.3rem', marginBottom: '0.75rem',
      }}>
        {project.title}
      </h3>
      <p style={{
        fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65,
        fontFamily: 'DM Sans, sans-serif', marginBottom: '1.5rem',
      }}>
        {project.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {(project.tags || []).map((tag, i) => (
          <span key={i} style={{
            fontSize: '0.68rem', padding: '0.3rem 0.75rem',
            border: '1px solid var(--border)', color: 'var(--gray)',
            fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em',
          }}>
            {tag}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1.25rem' }}>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              fontFamily: 'DM Sans, sans-serif', textDecoration: 'none',
              color: 'var(--black)', borderBottom: '1px solid var(--black)', paddingBottom: '1px',
            }}
          >
            Demo →
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase',
              fontFamily: 'DM Sans, sans-serif', textDecoration: 'none',
              color: 'var(--gray)', borderBottom: '1px solid var(--gray)', paddingBottom: '1px',
            }}
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  )
}

import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Projects({ projects }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section id="projects" style={{ 
      padding: isMobile ? '3rem 1.5rem' : '5rem 2.5rem', 
      maxWidth: 960, 
      margin: '0 auto' 
    }}>
      <div style={{
        fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#888', marginBottom: isMobile ? '1.5rem' : '3rem',
      }}>
        — Layihələr
      </div>

      {projects.length === 0 ? (
        <p style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem' }}>
          Admin paneldən layihə əlavə edin.
        </p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '1rem' : '1.5rem',
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} isMobile={isMobile} />
          ))}
        </div>
      )}
    </section>
  )
}
