import { useState } from 'react'

const DEFAULT_DATA = {
  "profile": {
    "name": "Ümüdvar Xalisli",
    "role": "Full-Stack Developer ",
    "bio": "İstifadə rahatlığı, inkişaf və icraya fokuslanaraq real platformalar, marketplace sistemləri və rəqəmsal alətlər yaradan developer və məhsul qurucusu.",
    "about": "Mən web development sahəsində çalışan və müasir, funksional rəqəmsal məhsullar hazırlamağa fokuslanan bir developerəm. HTML, CSS, JavaScript, PHP, SQL/MySQL, React və Next.js ilə işləyir, təmiz kod strukturu, məntiqli sistem quruluşu və rahat istifadəçi təcrübəsinə önəm verirəm. Məqsədim yalnız işləyən layihələr yaratmaq deyil, eyni zamanda inkişaf etdirilə bilən, praktik və peşəkar həllər qurmaqdır.",
    "skills": "HTML, CSS, JavaScript, \nPHP, SQL/MySQL, React, \nNext.js, Responsive Design, \nAPI Integration, Git, GitHub, \nCRUD, Database Management, \nProblem Solving.",
    "imgUrl": "https://image2url.com/r2/default/images/1775394886525-c3e9696c-3821-4486-a179-db6c1f94f459.jpg"
  },
  "projects": [
    {
      "title": "eYarmarka",
      "desc": "e-Yarmarka müxtəlif mağazaları və məhsulları bir platformada birləşdirən çoxsatıcılı marketplace layihəsidir. Layihənin məqsədi istifadəçilərə fərqli satıcılardan məhsulları daha rahat tapmaq, müqayisə etmək və sifariş prosesini daha əlçatan şəkildə təqdim etməkdir.",
      "tags": [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap"
      ],
      "demo": "https://e-yarmarka.me/",
      "github": "https://github.com/UmudvarKhalisli/e-yarmarka.me"
    },
    {
      "title": "Tracen",
      "desc": "Tracen ideyaları, qeydləri və layihələri sonsuz vizual workspace üzərində toplamağa imkan verən, “visual second brain” yanaşmasına əsaslanan rəqəmsal məhsuldur. Platforma düşüncələri və məlumatları bir məkanda təşkil etməyə, onları vizual şəkildə əlaqələndirməyə və daha rahat idarə etməyə fokuslanır.",
      "tags": [
        "HTML",
        "Tailwind CSS",
        "REACT",
        "NEXT.js"
      ],
      "demo": "https://tracen.me/",
      "github": ""
    },
    {
      "title": "Physix",
      "desc": "Physix mühəndislik hesablamaları və simulyasiyaları üçün hazırlanmış veb platformadır. Platforma struktur, maye dinamikası, istilik ötürülməsi, material gərginliyi, elektrik dövrələri və elmi hesablamalar kimi sahələr üzrə alətlər təqdim edir və daha çox kompleks mühəndislik iş axınlarını sadələşdirməyə yönəlir.",
      "tags": [
        "Engineering Simulation",
        "Structural Analysis",
        "Fluid Dynamics",
        "Thermal Analysis",
        "Circuit Analysis",
        "3D Models",
        "PDF Export",
        "SSO Integration"
      ],
      "demo": "https://physix.app/",
      "github": ""
    },
    {
      "title": "BoshBesh",
      "desc": "BoshBesh istifadəçinin səbrini, reaksiyasını və diqqətini sınağa çəkən interaktiv veb oyundur. Layihə tərs kursor, tərslənmiş yazılar, popup tələləri və məntiqi maneələr kimi elementlərlə çətin və əyləncəli təcrübə yaratmağa fokuslanır",
      "tags": [
        "Web App",
        "Interactive Game",
        "JavaScript",
        "UI Effects",
        "Logic Puzzles",
        "Browser-Based Experience",
        "Vercel"
      ],
      "demo": "https://boshbesh.vercel.app/",
      "github": "https://github.com/UmudvarKhalisli/ShitGame"
    },
    {
      "title": "NAF-company",
      "desc": "NAF tikinti texnikasının icarəsi üçün hazırlanmış modern və dinamik veb platformadır. Layihə estetik monoxrom dizayn, real-time məlumat idarəetməsi və tam funksional admin panel ilə texnikaların, sifarişlərin və məzmunun rahat idarə olunmasına fokuslanır.",
      "tags": [
        "Next.js",
        "React 19",
        "Tailwind CSS",
        "Framer Motion",
        "Supabase",
        "TypeScript"
      ],
      "demo": "https://naf-company.vercel.app/",
      "github": "https://github.com/UmudvarKhalisli/NAF"
    },
    {
      "title": "FireAZ",
      "desc": "FireAZ yanğından qorunma sistemləri üçün hazırlanmış korporativ veb platformadır. Sayt məhsul kataloqu, xidmət bölmələri, tamamlanmış layihələr, texniki bloq və əlaqə axını ilə şirkətin həm satış, həm də təqdimat tərəfini birləşdirir. Platforma əsasən yanğın siqnalizasiya, sprinkler, qaz söndürmə, nasos sistemləri və texniki dəstək xidmətlərini təqdim etməyə fokuslanır.",
      "tags": [
        "Corporate Website",
        "Product Catalog",
        "Portfolio",
        "Blog",
        "Contact Form",
        "Vercel."
      ],
      "demo": "https://firesite.vercel.app/",
      "github": "https://github.com/UmudvarKhalisli/FSFS"
    }
  ],
  "contact": {
    "email": "umudvarkhalisli@gmail.com",
    "linkedin": "https://www.linkedin.com/in/umudvar-khalisli/",
    "github": "https://github.com/UmudvarKhalisli",
    "cv": "https://pdftolink.io/file/r2_dXNlcnMvZ3Vlc3QvNDJhYzQxMGMtMjA3My00YzQ5LWI5NjEtZDY1NTZmNWNmNmIzLnBkZg",
    "text": "Yeni əməkdaşlıqlar, layihələr və peşəkar imkanlarla bağlı mənimlə əlaqə saxlaya bilərsiniz.\n",
    "whatsapp": "+994514002230"
  }
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
