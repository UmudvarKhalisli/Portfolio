import { useState } from 'react'

const DEFAULT_DATA = {
  "profile": {
    "name": "Ümüdvar Xalisli",
    "role": "SMM & Marketinq · MILI CEO · Developer",
    "bio": "Brendlər üçün sosial media strategiyası, targeting reklamları və veb həllər yaradıram. MILI rəqəmsal agentliyinin təsisçisiyəm.",
    "about": "Mən MILI rəqəmsal agentliyinin təsisçisi və SMM/marketinq mütəxəssisiyəm. Brendlər üçün kontent strategiyası, vizual konsepsiya və Meta/Google reklam kampaniyaları qururam. Developer təcrübəm sayəsində reklamdan sayta qədər bütün prosesi bir əldə idarə edə bilirəm.",
    "skills": "SMM və kontent|Kontent planı, brend tonu, trend təhlili, vizual konsepsiya\nReklam|Meta Ads, Google Ads, targeting\nVeb|HTML, CSS, JavaScript, React, Next.js, TypeScript, SQL\nAlətlər|AI alətləri, UX/UI, Git, GitHub",
    "imgUrl": "https://image2url.com/r2/default/images/1775394886525-c3e9696c-3821-4486-a179-db6c1f94f459.jpg"
  },
  "services": [
    { "title": "SMM", "desc": "Brend tonuna uyğun kontent strategiyası, kontent planı, qrid dizaynı, caption yazılması və hesabın idarə olunması." },
    { "title": "Targeting və reklam", "desc": "Meta və Google Ads platformalarında kampaniyaların qurulması, auditoriya seçimi və idarə edilməsi." },
    { "title": "Veb development", "desc": "Korporativ saytlar, kataloqlar və platformaların dizayndan yayıma qədər hazırlanması." }
  ],
  "smmWorks": [
    { "brand": "Lookmood_NN", "task": "Instagram hesabının SMM, marketinq və targeting idarəçiliyi", "did": "Kontent və vizual üslub, SMM idarəçiliyi, targeting reklamları", "result": "", "link": "" },
    { "brand": "EZ Group Təmizlik", "task": "Təmizlik və təmir xidməti brendi üçün Instagram hesabı", "did": "Kontent hazırlanması, qrid dizaynı, SMM və targeting", "result": "", "link": "" },
    { "brand": "Farell Brooklyn", "task": "Kişigeyimi brendi üçün Instagram kontenti", "did": "Kontent ideyaları, vizual konsepsiya, AI ilə vizual hazırlanması", "result": "", "link": "" },
    { "brand": "Workforce Solutions", "task": "Xaricə inşaat işçilərinin işə cəlbi", "did": "Meta reklam kampaniyalarının qurulması və idarə edilməsi", "result": "", "link": "" },
    { "brand": "Naftexnika.az", "task": "Instagram hesabının SMM, marketinq və targeting idarəçiliyi", "did": "Kontent və vizual üslub, SMM idarəçiliyi, targeting reklamları", "result": "", "link": "" }
  ],
  "projects": [
    {
      "title": "MILI",
      "desc": "MILI rəqəmsal agentliyinin sosial media idarəçiliyi, marketinq strategiyası, targeting reklamları və veb development xidmətlərini təqdim edən korporativ sayt. Sayt agentliyin brendlər üçün yaratdığı rəqəmsal həlləri, xidmət istiqamətlərini və iş yanaşmasını vahid platformada nümayiş etdirir.",
      "tags": [
        "React",
        "Vite",
        "JavaScript",
        "CSS"
      ],
      "demo": "https://miliaz.vercel.app/",
      "github": ""
    },
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
      "title": "Fornitura",
      "desc": "Fornitura üçün hazırlanmış korporativ veb sayt və rəqəmsal təqdimat platforması. Sayt şirkətin fəaliyyət istiqamətlərini, xidmətlərini və əsas üstünlüklərini müasir, strukturlaşdırılmış və istifadəçi üçün rahat formatda təqdim edir.",
      "tags": [
        "React",
        "Vite",
        "JavaScript",
        "CSS"
      ],
      "demo": "https://fornitura.az/",
      "github": ""
    },
    {
      "title": "NAF Texnika",
      "desc": "NAF tikinti texnikasının icarəsi üçün hazırlanmış modern və dinamik veb platformadır. Layihə estetik monoxrom dizayn, real-time məlumat idarəetməsi və tam funksional admin panel ilə texnikaların, sifarişlərin və məzmunun rahat idarə olunmasına fokuslanır.",
      "tags": [
        "Next.js",
        "React 19",
        "Tailwind CSS",
        "Framer Motion",
        "Supabase",
        "TypeScript"
      ],
      "demo": "https://naftexnika.az/",
      "github": "https://github.com/UmudvarKhalisli/NAF"
    },
  ],
  "contact": {
    "email": "umudvarkhalisli@gmail.com",
    "linkedin": "https://www.linkedin.com/in/umudvar-khalisli/",
    "github": "https://github.com/UmudvarKhalisli",
    "instagram": "https://www.instagram.com/miliagency.az/",
    "cv": "/cv.pdf",
    "text": "Yeni əməkdaşlıqlar, layihələr və peşəkar imkanlarla bağlı mənimlə əlaqə saxlaya bilərsiniz.\n",
    "whatsapp": "+994514002230"
  }
}

const STORAGE_KEY = 'portfolio_data_v3'

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
