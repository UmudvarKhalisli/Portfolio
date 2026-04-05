import React, { useState } from 'react'
import { useData } from './hooks/useData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AdminPanel from './components/AdminPanel'

export default function App() {
  const { data, updateProfile, updateProjects, updateContact } = useData()
  const [adminOpen, setAdminOpen] = useState(false)

  return (
    <>
      <Navbar name={data.profile.name} onAdminOpen={() => setAdminOpen(true)} />

      <main>
        <Hero profile={data.profile} />
        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: 0 }} />
        <About profile={data.profile} />
        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: 0 }} />
        <Projects projects={data.projects} />
        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: 0 }} />
        <Contact contact={data.contact} />
      </main>

      <footer style={{
        padding: '1.5rem 2.5rem',
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center',
        fontSize: '0.75rem',
        color: '#aaa',
        fontFamily: 'DM Sans, sans-serif',
        letterSpacing: '0.05em',
      }}>
        © {new Date().getFullYear()} · {data.profile.name || 'Ad Soyad'} · Baku, Azerbaijan
      </footer>

      {adminOpen && (
        <AdminPanel
          data={data}
          onUpdateProfile={updateProfile}
          onUpdateProjects={updateProjects}
          onUpdateContact={updateContact}
          onClose={() => setAdminOpen(false)}
        />
      )}
    </>
  )
}
