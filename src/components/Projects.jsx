import React from 'react'

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? '#0a0a0a' : '#e0e0e0'}`,
        padding: '2rem',
        transition: 'border-color 0.2s',
        cursor: 'default',
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
        fontSize: '0.85rem', color: '#666', lineHeight: 1.65,
        fontFamily: 'DM Sans, sans-serif', marginBottom: '1.5rem',
      }}>
        {project.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {(project.tags || []).map((tag, i) => (
          <span key={i} style={{
            fontSize: '0.68rem', padding: '0.3rem 0.75rem',
            border: '1px solid #e0e0e0', color: '#888',
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
              color: '#0a0a0a', borderBottom: '1px solid #0a0a0a', paddingBottom: '1px',
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
              color: '#888', borderBottom: '1px solid #ccc', paddingBottom: '1px',
            }}
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects({ projects }) {
  return (
    <section id="projects" style={{ padding: '5rem 2.5rem', maxWidth: 960, margin: '0 auto' }}>
      <div style={{
        fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#888', marginBottom: '3rem',
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
          gap: '1.5rem',
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      )}
    </section>
  )
}
