# Portfolio — Frontend Developer

Şəxsi portfolio saytı. React + Vite ilə hazırlanmışdır.

## Başlamaq

```bash
npm install
npm run dev
```

Brauzerdə `http://localhost:5173` ünvanını açın.

## Admin Panel

Saytda naviqasiya çubuğundakı **⚙** düyməsinə basın.

Şifrə: `kapital2025`

> **Qeyd:** Şifrəni `src/components/AdminPanel.jsx` faylında `ADMIN_PASSWORD` sabitini dəyişərək yeniləyə bilərsiniz.

Admin paneldə edə biləcəkləriniz:
- **Profil:** Ad, rol, bio, haqqımda mətni, bacarıqlar, profil şəkli
- **Layihələr:** Əlavə et, redaktə et, sil
- **Əlaqə & CV:** Email, LinkedIn, GitHub, CV PDF linki

Bütün məlumatlar brauzerin `localStorage`-ında saxlanılır.

## Vercel-ə Deploy

### Metod 1: GitHub vasitəsilə (tövsiyə edilir)

1. Bu faylları GitHub repozitoriyasına yükləyin
2. [vercel.com](https://vercel.com) saytına daxil olun
3. **"Add New Project"** → GitHub reponu seçin
4. Framework: **Vite** (avtomatik aşkarlanır)
5. **Deploy** düyməsinə basın

### Metod 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## Build

```bash
npm run build
```

`dist/` qovluğu yaranır — istənilən statik hosting-ə yükləmək olar.

## Fayl Strukturu

```
src/
├── components/
│   ├── Navbar.jsx        # Naviqasiya
│   ├── Hero.jsx          # Baş səhifə
│   ├── About.jsx         # Haqqımda + bacarıqlar
│   ├── Projects.jsx      # Layihələr
│   ├── Contact.jsx       # Əlaqə + CV
│   └── AdminPanel.jsx    # Admin panel (şifrə ilə)
├── hooks/
│   └── useData.js        # localStorage data idarəetməsi
├── App.jsx
├── main.jsx
└── index.css
```
