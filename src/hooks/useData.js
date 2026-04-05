import { useState, useEffect } from 'react'

const DEFAULT_DATA = {
  profile: {
    name: '',
    role: 'Frontend Developer Intern',
    bio: '',
    about: '',
    skills: 'React / TypeScript | Yaxşı\nJavaScript (ES6+) | Yaxşı\nHTML & CSS / Tailwind | Yaxşı\nGit & GitHub | Orta\nREST API | Orta\nFigma | Başlanğıc',
    imgUrl: '',
  },
  projects: [],
  contact: {
    email: '',
    linkedin: '',
    github: '',
    cv: '',
    text: 'Müsahibə və ya əməkdaşlıq üçün əlaqə saxlayın.',
  },
}

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
