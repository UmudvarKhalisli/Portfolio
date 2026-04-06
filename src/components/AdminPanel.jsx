import React, { useState, useEffect } from 'react'

const ADMIN_PASSWORD = 'kapital2025'

function Toast({ message, onHide }) {
  useEffect(() => {
    const t = setTimeout(onHide, 2500)
    return () => clearTimeout(t)
  }, [message])

  return (
    <div style={{
      position: 'fixed', bottom: '2rem', right: '2rem',
      background: '#0a0a0a', color: '#fafafa',
      padding: '0.75rem 1.5rem', zIndex: 9999,
      fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem',
      letterSpacing: '0.03em', pointerEvents: 'none', borderRadius: 0,
    }}>
      {message}
    </div>
  )
}

function Input({ label, value, onChange, type = 'text', rows }) {
  const inputStyle = {
    width: '100%', padding: '0.75rem',
    border: '1px solid #e0e0e0', outline: 'none',
    fontSize: '0.9rem', background: '#fafafa',
    color: '#0a0a0a', transition: 'border-color 0.2s',
    fontFamily: 'DM Sans, sans-serif', borderRadius: 0,
  }
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{
        display: 'block', fontSize: '0.7rem', letterSpacing: '0.12em',
        textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem',
        fontFamily: 'DM Sans, sans-serif',
      }}>
        {label}
      </label>
      {rows ? (
        <textarea
          value={value} onChange={e => onChange(e.target.value)}
          rows={rows} style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={e => e.target.style.borderColor = '#0a0a0a'}
          onBlur={e => e.target.style.borderColor = '#e0e0e0'}
        />
      ) : (
        <input
          type={type} value={value} onChange={e => onChange(e.target.value)}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = '#0a0a0a'}
          onBlur={e => e.target.style.borderColor = '#e0e0e0'}
        />
      )}
    </div>
  )
}

function SaveBtn({ onClick, label = 'Saxla' }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%', padding: '0.9rem',
        background: '#0a0a0a', color: '#fafafa', border: 'none',
        fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
        fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', transition: 'opacity 0.2s',
        borderRadius: 0,
      }}
      onMouseEnter={e => e.target.style.opacity = '0.8'}
      onMouseLeave={e => e.target.style.opacity = '1'}
    >
      {label}
    </button>
  )
}

function ProfileTab({ profile, onSave }) {
  const [form, setForm] = useState(profile)
  useEffect(() => setForm(profile), [profile])
  const set = (key) => (val) => setForm(f => ({ ...f, [key]: val }))
  const initials = (form.name || 'AD').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #e0e0e0' }}>
        {form.imgUrl ? (
          <img src={form.imgUrl} alt="" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '1px solid #e0e0e0' }} />
        ) : (
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'EB Garamond',serif", fontSize: '1.5rem', color: '#888', border: '1px solid #e0e0e0' }}>
            {initials}
          </div>
        )}
        <div style={{ flex: 1 }}>
          <Input label="Profil şəkli URL" value={form.imgUrl} onChange={set('imgUrl')} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <Input label="Ad Soyad" value={form.name} onChange={set('name')} />
        <Input label="Vəzifə / Rol" value={form.role} onChange={set('role')} />
      </div>
      <Input label="Qısa Bio (hero altında)" value={form.bio} onChange={set('bio')} rows={3} />
      <Input label="Haqqımda (ətraflı)" value={form.about} onChange={set('about')} rows={5} />
      <Input label="Bacarıqlar (hər sətirdə: Bacarıq | Səviyyə)" value={form.skills} onChange={set('skills')} rows={8} />
      <SaveBtn onClick={() => onSave(form)} />
    </div>
  )
}

function ProjectsTab({ projects, onSave, onShowToast }) {
  const [list, setList] = useState(projects)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ title: '', desc: '', tags: '', demo: '', github: '' })
  useEffect(() => setList(projects), [projects])

  const openNew = () => {
    setForm({ title: '', desc: '', tags: '', demo: '', github: '' })
    setEditing(-1)
  }
  const openEdit = (i) => {
    const p = list[i]
    setForm({ ...p, tags: (p.tags || []).join(', ') })
    setEditing(i)
  }
  const saveProject = () => {
    if (!form.title.trim()) { onShowToast('Ad daxil edin'); return }
    const proj = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) }
    let newList
    if (editing === -1) newList = [...list, proj]
    else { newList = [...list]; newList[editing] = proj }
    setList(newList)
    onSave(newList)
    setEditing(null)
    onShowToast(editing === -1 ? 'Layihə əlavə edildi' : 'Layihə yeniləndi')
  }
  const del = (i) => {
    if (!confirm('Silmək istədiyinizə əminsiniz?')) return
    const newList = list.filter((_, idx) => idx !== i)
    setList(newList)
    onSave(newList)
    onShowToast('Layihə silindi')
  }
  const set = (key) => (val) => setForm(f => ({ ...f, [key]: val }))

  if (editing !== null) {
    return (
      <div>
        <button
          onClick={() => setEditing(null)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', marginBottom: '1.5rem', padding: 0 }}
        >
          ← Geri
        </button>
        <h3 style={{ fontFamily: "'EB Garamond', serif", fontWeight: 400, fontSize: '1.3rem', marginBottom: '1.5rem' }}>
          {editing === -1 ? 'Yeni layihə' : 'Layihəni redaktə et'}
        </h3>
        <Input label="Layihənin adı" value={form.title} onChange={set('title')} />
        <Input label="Qısa təsvir" value={form.desc} onChange={set('desc')} rows={3} />
        <Input label="Texnologiyalar (vergüllə ayır)" value={form.tags} onChange={set('tags')} />
        <Input label="Demo URL" value={form.demo} onChange={set('demo')} />
        <Input label="GitHub URL" value={form.github} onChange={set('github')} />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <SaveBtn onClick={saveProject} />
          <button onClick={() => setEditing(null)} style={{ flex: 0.5, padding: '0.9rem', border: '1px solid #e0e0e0', background: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 0 }}>
            Bağla
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <button
        onClick={openNew}
        style={{
          width: '100%', padding: '1rem', border: '1px dashed #ccc', background: 'none',
          fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#888',
          cursor: 'pointer', marginBottom: '1.5rem', transition: 'all 0.2s',
          borderRadius: 0,
        }}
        onMouseEnter={e => { e.target.style.borderColor = '#0a0a0a'; e.target.style.color = '#0a0a0a' }}
        onMouseLeave={e => { e.target.style.borderColor = '#ccc'; e.target.style.color = '#888' }}
      >
        + Yeni layihə əlavə et
      </button>

      {list.length === 0 && (
        <p style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', textAlign: 'center', padding: '2rem' }}>
          Hələ layihə yoxdur
        </p>
      )}

      {list.map((p, i) => (
        <div key={i} style={{ border: '1px solid #e0e0e0', padding: '1.25rem', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 500 }}>{p.title}</span>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={() => openEdit(i)} style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', padding: '0.4rem 0.9rem', border: '1px solid #e0e0e0', background: 'none', color: '#0a0a0a', transition: 'all 0.2s', borderRadius: 0 }}
              onMouseEnter={e => { e.target.style.background = '#0a0a0a'; e.target.style.color = '#fff' }}
              onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = '#0a0a0a' }}
            >Redaktə</button>
            <button onClick={() => del(i)} style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', padding: '0.4rem 0.9rem', border: '1px solid #ddd', background: 'none', color: '#aaa', transition: 'all 0.2s', borderRadius: 0 }}
              onMouseEnter={e => { e.target.style.color = '#0a0a0a'; e.target.style.borderColor = '#999' }}
              onMouseLeave={e => { e.target.style.color = '#aaa'; e.target.style.borderColor = '#ddd' }}
            >Sil</button>
          </div>
        </div>
      ))}
    </div>
  )
}

function ExportTab({ data }) {
  const [copied, setCopied] = useState(false)

  const generateCode = () => {
    const d = JSON.stringify(data, null, 2)
    return `const DEFAULT_DATA = ${d}\n`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode()).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const handleDownload = () => {
    const code = `import { useState } from 'react'

${generateCode()}
const STORAGE_KEY = 'portfolio_data_v1'

export function useData() {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        return { ...DEFAULT_DATA, ...parsed }
      }
    } catch (_) {}
    return DEFAULT_DATA
  })

  const updateData = (newData) => {
    setData(newData)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData))
    } catch (_) {}
  }

  const updateProfile = (profile) => updateData({ ...data, profile })
  const updateProjects = (projects) => updateData({ ...data, projects })
  const updateContact = (contact) => updateData({ ...data, contact })

  return { data, updateProfile, updateProjects, updateContact }
}
`
    const blob = new Blob([code], { type: 'text/javascript' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'useData.js'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <div style={{ background: '#f7f7f7', border: '1px solid #e0e0e0', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', lineHeight: 1.7, color: '#444', marginBottom: '1rem' }}>
          Bütün məlumatlarını doldurduqdan sonra aşağıdakı düymələrdən birini istifadə et:
        </p>
        <ul style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#555', lineHeight: 2, paddingLeft: '1.25rem', listStyle: 'none' }}>
          <li>• <strong>"useData.js yüklə"</strong> düyməsinə bas</li>
          <li>• Faylı <code style={{ background: '#eee', padding: '1px 6px', fontSize: '0.8rem' }}>src/hooks/useData.js</code> üzərinə yapışdır</li>
          <li>• <code style={{ background: '#eee', padding: '1px 6px', fontSize: '0.8rem' }}>git add . && git commit -m "update data" && git push</code></li>
          <li>• Vercel avtomatik yenilənir ✓</li>
        </ul>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button
          onClick={handleDownload}
          style={{
            flex: 1, padding: '1rem', background: '#0a0a0a', color: '#fafafa', border: 'none',
            fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', borderRadius: 0,
          }}
          onMouseEnter={e => e.target.style.opacity = '0.8'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          ↓ useData.js yüklə
        </button>
        <button
          onClick={handleCopy}
          style={{
            flex: 1, padding: '1rem', background: copied ? '#2a7a2a' : 'transparent',
            color: copied ? '#fff' : '#0a0a0a',
            border: '1px solid #e0e0e0',
            fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', transition: 'all 0.3s',
            borderRadius: 0,
          }}
        >
          {copied ? '✓ Kopyalandı!' : 'DEFAULT_DATA kopyala'}
        </button>
      </div>

      <div style={{ border: '1px solid #e0e0e0' }}>
        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #e0e0e0', background: '#f7f7f7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Önizləmə</span>
        </div>
        <pre style={{
          padding: '1rem', overflowX: 'auto', fontSize: '0.72rem',
          fontFamily: 'monospace', lineHeight: 1.6, color: '#444',
          maxHeight: 300, overflowY: 'auto', margin: 0,
          background: '#fafafa',
        }}>
          {generateCode()}
        </pre>
      </div>
    </div>
  )
}

function ContactTab({ contact, onSave }) {
  const [form, setForm] = useState(contact)
  useEffect(() => setForm(contact), [contact])
  const set = (key) => (val) => setForm(f => ({ ...f, [key]: val }))

  return (
    <div>
      <Input label="Email" value={form.email} onChange={set('email')} type="email" />
      <Input label="LinkedIn URL" value={form.linkedin} onChange={set('linkedin')} />
      <Input label="GitHub URL" value={form.github} onChange={set('github')} />
      <Input label="CV PDF URL (Google Drive, Dropbox...)" value={form.cv} onChange={set('cv')} />
      <Input label="Əlaqə bölməsi mətni" value={form.text} onChange={set('text')} rows={3} />
      <SaveBtn onClick={() => onSave(form)} />
    </div>
  )
}

export default function AdminPanel({ data, onUpdateProfile, onUpdateProjects, onUpdateContact, onClose }) {
  const [tab, setTab] = useState('profile')
  const [toast, setToast] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [passVal, setPassVal] = useState('')
  const [passErr, setPassErr] = useState(false)

  const showToast = (msg) => setToast(msg)

  const tabStyle = (active) => ({
    padding: '0.75rem 1.25rem',
    fontSize: '0.72rem', letterSpacing: '0.12em',
    textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
    cursor: 'pointer', background: 'none',
    borderLeft: 'none', borderRight: 'none', borderTop: 'none',
    borderBottom: active ? '2px solid #0a0a0a' : '2px solid transparent',
    color: active ? '#0a0a0a' : '#888', transition: 'all 0.2s',
  })

  if (!loggedIn) {
    return (
      <div style={{
        position: 'fixed', inset: 0, background: '#fafafa',
        zIndex: 1000, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
      }}>
        <h2 style={{ fontFamily: "'EB Garamond', serif", fontWeight: 400, fontSize: '2rem' }}>Admin Panel</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#888' }}>Şifrənizi daxil edin</p>
        <div style={{ width: 280 }}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="password" value={passVal}
              onChange={e => { setPassVal(e.target.value); setPassErr(false) }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  if (passVal === ADMIN_PASSWORD) setLoggedIn(true)
                  else setPassErr(true)
                }
              }}
              placeholder="Şifrə"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e0e0e0', outline: 'none', fontSize: '0.9rem', fontFamily: 'DM Sans, sans-serif', borderRadius: 0 }}
              autoFocus
            />
          </div>
          {passErr && <p style={{ color: '#c00', fontSize: '0.78rem', fontFamily: 'DM Sans, sans-serif', marginBottom: '0.75rem' }}>Şifrə səhvdir</p>}
          <button
            onClick={() => {
              if (passVal === ADMIN_PASSWORD) setLoggedIn(true)
              else setPassErr(true)
            }}
            style={{ width: '100%', padding: '0.9rem', background: '#0a0a0a', color: '#fafafa', border: 'none', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', borderRadius: 0 }}
          >
            Daxil ol
          </button>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem' }}>
          Bağla
        </button>
      </div>
    )
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#fafafa', zIndex: 1000, overflowY: 'auto' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 2rem', borderBottom: '1px solid #e0e0e0',
        position: 'sticky', top: 0, background: '#fafafa', zIndex: 10,
      }}>
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>
          Admin Panel
        </span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#0a0a0a', lineHeight: 1 }}>×</button>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #e0e0e0', marginBottom: '2rem' }}>
          <button style={tabStyle(tab === 'profile')} onClick={() => setTab('profile')}>Profil</button>
          <button style={tabStyle(tab === 'projects')} onClick={() => setTab('projects')}>Layihələr</button>
          <button style={tabStyle(tab === 'contact')} onClick={() => setTab('contact')}>Əlaqə & CV</button>
          <button style={tabStyle(tab === 'export')} onClick={() => setTab('export')}>Export</button>
        </div>

        {tab === 'export' && <ExportTab data={data} />}
        {tab === 'profile' && (
          <ProfileTab profile={data.profile} onSave={(p) => { onUpdateProfile(p); showToast('Profil saxlanıldı') }} />
        )}
        {tab === 'projects' && (
          <ProjectsTab projects={data.projects} onSave={onUpdateProjects} onShowToast={showToast} />
        )}
        {tab === 'contact' && (
          <ContactTab contact={data.contact} onSave={(c) => { onUpdateContact(c); showToast('Əlaqə məlumatları saxlanıldı') }} />
        )}
      </div>

      {toast && <Toast message={toast} onHide={() => setToast('')} />}
    </div>
  )
}
