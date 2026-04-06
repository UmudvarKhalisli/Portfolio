import { useState } from 'react'

const DEFAULT_DATA = {
  profile: {
    name: 'Ad Soyad',
    role: 'Frontend Developer',
    bio: 'Burada özünüz haqqında qısa məlumat yazın.',
    about: 'Admin panelə daxil olub öz məlumatlarınızı əlavə edin.',
    skills: 'React / TypeScript | Yaxşı\nJavaScript (ES6+) | Yaxşı\nHTML & CSS | Yaxşı\nGit & GitHub | Orta\nREST API | Orta\nFigma | Başlanğıc',
    imgUrl: '',
  },
  projects: [
    {
      title: 'Nümunə Layihə 1',
      desc: 'Admin paneldən öz layihənizi əlavə edin.',
      tags: ['React', 'TypeScript'],
      demo: '',
      github: '',
    }
  ],
  contact: {
    email: 'email@example.com',
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username',
    cv: '',
    text: 'Əlaqə məlumatlarınızı admin paneldən yeniləyin.',
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
