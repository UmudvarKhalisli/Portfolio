const translations = {
    az: {
        nav_about: "Haqqında",
        nav_services: "Xidmətlər",
        nav_smm: "SMM işlərim",
        nav_projects: "Veb layihələr",
        nav_contact: "Əlaqə",
        hero_greeting: "Salam, mən",
        hero_title: "SMM & Marketinq · MILI CEO · Developer",
        hero_cta: "İşlərim",
        about_text: "Mən MILI rəqəmsal agentliyinin təsisçisi və SMM/marketinq mütəxəssisiyəm. Brendlər üçün kontent strategiyası, vizual konsepsiya və Meta/Google reklam kampaniyaları qururam. Developer təcrübəm sayəsində reklamdan sayta qədər bütün prosesi bir əldə idarə edə bilirəm.",
        add_project: "+ Layihə əlavə et",
        cv_upload_text: "CV-ni yükləyin (PDF)",
        cv_upload_hint: "və ya bura klikləyin",
        cv_click_view: "Görmək üçün klikləyin",
        download: "Yüklə",
        close: "Bağla",
        remove: "Sil",
        add_project_title: "Yeni layihə əlavə et",
        form_title: "Başlıq",
        form_desc: "Açıqlama",
        form_tags: "Texnologiyalar (vergüllə ayırın)",
        form_live: "Live link",
        form_source: "Source kod linki",
        form_save: "Yadda saxla",
        live_demo: "Live Demo",
        source_code: "Source Kod",
        edit_contact: "Əlaqələri redaktə et",
    },
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_cv: "CV",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_title: "Full-Stack Developer",
        hero_cta: "View My Work",
        about_text: "I am a full-stack developer passionate about building modern web applications that solve real-world problems. With experience in both frontend and backend technologies, I create scalable, user-friendly solutions.",
        add_project: "+ Add Project",
        cv_upload_text: "Upload your CV (PDF)",
        cv_upload_hint: "or click to browse",
        cv_click_view: "Click to view",
        download: "Download",
        close: "Close",
        remove: "Remove",
        add_project_title: "Add New Project",
        form_title: "Title",
        form_desc: "Description",
        form_tags: "Technologies (comma separated)",
        form_live: "Live link",
        form_source: "Source code link",
        form_save: "Save",
        live_demo: "Live Demo",
        source_code: "Source Code",
        edit_contact: "Edit Contacts",
    },
    ru: {
        nav_about: "Обо мне",
        nav_projects: "Проекты",
        nav_cv: "CV",
        nav_contact: "Контакты",
        hero_greeting: "Привет, я",
        hero_title: "Full-Stack разработчик",
        hero_cta: "Смотреть работы",
        about_text: "Я full-stack разработчик, увлечённый созданием современных веб-приложений, решающих реальные задачи. Имею опыт работы как с frontend, так и с backend технологиями, создаю масштабируемые, удобные решения.",
        add_project: "+ Добавить проект",
        cv_upload_text: "Загрузите CV (PDF)",
        cv_upload_hint: "или нажмите для выбора",
        cv_click_view: "Нажмите для просмотра",
        download: "Скачать",
        close: "Закрыть",
        remove: "Удалить",
        add_project_title: "Добавить новый проект",
        form_title: "Название",
        form_desc: "Описание",
        form_tags: "Технологии (через запятую)",
        form_live: "Live ссылка",
        form_source: "Ссылка на код",
        form_save: "Сохранить",
        live_demo: "Live Демо",
        source_code: "Исходный код",
        edit_contact: "Редактировать контакты",
    }
};

const defaultProjects = [
    {
        id: 0,
        title: "MILI",
        desc: {
            az: "MILI rəqəmsal agentliyinin sosial media, marketinq və veb həllərini təqdim edən korporativ sayt.",
            en: "Corporate website presenting MILI digital agency's social media, marketing, and web solutions.",
            ru: "Корпоративный сайт цифрового агентства MILI с презентацией услуг в области социальных сетей, маркетинга и веб-решений."
        },
        tags: ["React", "Vite", "JavaScript", "CSS"],
        live: "https://miliaz.vercel.app/",
        source: ""
    },
    {
        id: 1,
        title: "Tikinti Texnikasi",
        desc: {
            az: "Tikinti texnikası icarə platforması - real vaxt Supabase sinxronizasiyası, tam CRUD admin paneli, sifariş idarəetmə sistemi və monochrome mühəndislik dizaynı ilə.",
            en: "Construction equipment rental platform with real-time Supabase sync, full CRUD admin dashboard, order management system, and monochrome engineering-inspired design.",
            ru: "Платформа аренды строительной техники с синхронизацией Supabase в реальном времени, полной CRUD админ-панелью, системой управления заказами и монохромным инженерным дизайном."
        },
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
        live: "",
        source: "https://github.com/UmudvarKhalisli/tikinti-texnikasi"
    },
    {
        id: 2,
        title: "e-Yarmarka",
        desc: {
            az: "Azərbaycanın ilk onlayn geyim bazarı - çoxsatıcıçılı e-commerce platforması: satıcı panelləri, kuryer GPS izləmə, Google OAuth, PWA dəstəyi və mesajlaşma sistemi.",
            en: "Azerbaijan's first online clothing marketplace - multi-vendor e-commerce with seller dashboards, courier GPS tracking, Google OAuth, PWA support, and messaging system.",
            ru: "Первый онлайн-рынок одежды в Азербайджане - мульти-вендорная e-commerce платформа с панелями продавцов, GPS-отслеживанием курьеров, Google OAuth, поддержкой PWA и системой сообщений."
        },
        tags: ["PHP", "MySQL", "Cloudinary", "PWA"],
        live: "https://e-yarmarka.me",
        source: "https://github.com/UmudvarKhalisli/e-yarmarka"
    },
    {
        id: 3,
        title: "Fornitura",
        desc: {
            az: "Fornitura üçün hazırlanmış korporativ veb sayt və rəqəmsal təqdimat platforması.",
            en: "Corporate website and digital presentation platform created for Fornitura.",
            ru: "Корпоративный сайт и цифровая презентационная платформа для Fornitura."
        },
        tags: ["React", "Vite", "JavaScript", "CSS"],
        live: "https://fornitura.az/",
        source: ""
    }
];

const services = [
    { title: "SMM", desc: "Brend tonuna uyğun kontent strategiyası, kontent planı, qrid dizaynı, caption yazılması və hesabın idarə olunması." },
    { title: "Targeting və reklam", desc: "Meta və Google Ads platformalarında kampaniyaların qurulması, auditoriya seçimi və idarə edilməsi." },
    { title: "Veb development", desc: "Korporativ saytlar, kataloqlar və platformaların dizayndan yayıma qədər hazırlanması." }
];

const smmWorks = [
    { brand: "lookmood_nn", task: "Instagram hesabının SMM, marketinq və targeting idarəçiliyi", did: "Kontent və vizual üslub, SMM idarəçiliyi, targeting reklamları" },
    { brand: "EZ Group Təmizlik", task: "Təmizlik və təmir xidməti brendi üçün Instagram hesabı", did: "Kontent hazırlanması, qrid dizaynı, SMM və targeting" },
    { brand: "e-naftexnika", task: "Instagram hesabının SMM, marketinq və targeting idarəçiliyi", did: "Kontent və vizual üslub, SMM idarəçiliyi, targeting reklamları", link: "https://www.instagram.com/e.naftexnika/" },
    { brand: "Farell Brooklyn", task: "Kişigeyimi brendi üçün Instagram kontenti", did: "Kontent ideyaları, vizual konsepsiya, AI ilə vizual hazırlanması" },
    { brand: "Workforce Solutions", task: "Xaricə inşaat işçilərinin işə cəlbi", did: "Meta reklam kampaniyalarının qurulması və idarə edilməsi" }
];

let currentLang = localStorage.getItem('lang') || 'az';
let isAdmin = sessionStorage.getItem('admin') === 'true';
let projects = JSON.parse(localStorage.getItem('projects')) || defaultProjects;
let editingProjectId = null;
let cvBlobUrl = null;

let contacts = JSON.parse(localStorage.getItem('contacts')) || {
    email: 'your@email.com',
    whatsapp: '994500000000',
    instagram: 'https://www.instagram.com/mili.consulting/',
    github: 'https://github.com/UmudvarKhalisli',
    linkedin: 'https://linkedin.com/in/umudvar-khalisli'
};

function t(key) {
    return translations[currentLang]?.[key] || translations.en[key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = value;
        } else {
            el.textContent = value;
        }
    });
    document.documentElement.lang = currentLang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    renderProjects();
    renderContacts();
    renderSkills();
    renderServices();
    renderSmmWorks();
}

function renderSkills() {
    const skills = [
        "SMM və kontent|Kontent planı, brend tonu, trend təhlili, vizual konsepsiya",
        "Reklam|Meta Ads, Google Ads, targeting",
        "Veb|HTML, CSS, JavaScript, React, Next.js, TypeScript, SQL",
        "Alətlər|AI alətləri, UX/UI, Git, GitHub"
    ];
    const container = document.getElementById('skillsContainer');
    if (!container) return;
    container.innerHTML = skills.map(item => {
        const [skill, level = ''] = item.split('|');
        return `<div class="skill-item"><strong>${skill}</strong>${level ? `<span>${level}</span>` : ''}</div>`;
    }).join('');
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = services.map((service, index) => `
        <article class="portfolio-card">
            <div class="portfolio-index">${String(index + 1).padStart(2, '0')}</div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        </article>
    `).join('');
}

function renderSmmWorks() {
    const grid = document.getElementById('smmWorksGrid');
    if (!grid) return;
    grid.innerHTML = smmWorks.map((work, index) => `
        <article class="portfolio-card">
            <div class="portfolio-index">${String(index + 1).padStart(2, '0')}</div>
            <h3>${work.brand}</h3>
            <div class="portfolio-label">Tapşırıq</div><p>${work.task}</p>
            <div class="portfolio-label">Nə etdim</div><p>${work.did}</p>
        </article>
    `).join('');
}

function renderContacts() {
    const contactContent = document.getElementById('contactContent');
    if (!contactContent) return;
    contactContent.innerHTML = `
        <div class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:${contacts.email}">${contacts.email}</a>
        </div>
        <div class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href="https://wa.me/${contacts.whatsapp}" target="_blank">WhatsApp</a>
        </div>
        <div class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01"/>
            </svg>
            <a href="${contacts.instagram || 'https://www.instagram.com/mili.consulting/'}" target="_blank">Instagram</a>
        </div>
        <div class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <a href="${contacts.github}" target="_blank">GitHub</a>
        </div>
        <div class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
            </svg>
            <a href="${contacts.linkedin}" target="_blank">LinkedIn</a>
        </div>
    `;
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    projects.forEach(project => {
        const desc = typeof project.desc === 'object' ? (project.desc[currentLang] || project.desc.en || '') : project.desc;
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            ${isAdmin ? `
                <button class="project-delete-btn" data-id="${project.id}" title="Sil">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                </button>
                <button class="project-edit-btn" data-id="${project.id}" title="Redaktə et">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                </button>
            ` : ''}
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${desc}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.live ? `<a href="${project.live}" target="_blank" class="project-link" onclick="event.stopPropagation()">${t('live_demo')}</a>` : ''}
                    ${project.source ? `<a href="${project.source}" target="_blank" class="project-link" onclick="event.stopPropagation()">${t('source_code')}</a>` : ''}
                </div>
            </div>
        `;
        card.addEventListener('click', (e) => {
            if (e.target.closest('.project-delete-btn') || e.target.closest('.project-edit-btn')) return;
            openProjectModal(project);
        });
        grid.appendChild(card);
    });

    document.querySelectorAll('.project-delete-btn').forEach(btn => {
        btn.style.display = isAdmin ? 'flex' : 'none';
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            if (confirm('Bu layihəni silmək istədiyinizə əminsiniz?')) {
                projects = projects.filter(p => p.id !== id);
                localStorage.setItem('projects', JSON.stringify(projects));
                renderProjects();
            }
        });
    });

    document.querySelectorAll('.project-edit-btn').forEach(btn => {
        btn.style.display = isAdmin ? 'flex' : 'none';
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProjectForm(parseInt(btn.dataset.id));
        });
    });

    document.querySelectorAll('.admin-only').forEach(el => {
        el.style.display = isAdmin ? '' : 'none';
    });

    const adminLink = document.getElementById('adminLink');
    if (adminLink) {
        adminLink.style.display = isAdmin ? 'flex' : 'none';
    }
}

function openProjectModal(project) {
    const desc = typeof project.desc === 'object' ? (project.desc[currentLang] || project.desc.en || '') : project.desc;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalTags').innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    let links = '';
    if (project.live) links += `<a href="${project.live}" target="_blank">${t('live_demo')}</a>`;
    if (project.source) links += `<a href="${project.source}" target="_blank">${t('source_code')}</a>`;
    document.getElementById('modalLinks').innerHTML = links;
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

function openProjectForm(id = null) {
    editingProjectId = id;
    if (id) {
        const project = projects.find(p => p.id === id);
        document.getElementById('formTitle').value = project.title;
        document.getElementById('formDesc').value = typeof project.desc === 'object' ? (project.desc[currentLang] || '') : project.desc;
        document.getElementById('formTags').value = project.tags.join(', ');
        document.getElementById('formLive').value = project.live || '';
        document.getElementById('formSource').value = project.source || '';
    } else {
        document.getElementById('projectForm').reset();
    }
    document.getElementById('projectFormModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
}

function showCV(file, name, size) {
    if (cvBlobUrl) URL.revokeObjectURL(cvBlobUrl);
    cvBlobUrl = URL.createObjectURL(file);
    document.getElementById('cv-badge-name').textContent = name;
    document.getElementById('cv-file-name').textContent = name;
    document.getElementById('cv-file-size').textContent = formatFileSize(size);
    document.getElementById('cv-download').href = cvBlobUrl;
    document.getElementById('cv-download').download = name;
    document.getElementById('cv-iframe').src = cvBlobUrl;
    document.getElementById('cv-upload').style.display = 'none';
    document.getElementById('cv-badge').style.display = 'block';
    document.getElementById('cv-preview').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true' && sessionStorage.getItem('admin') === 'true') {
        isAdmin = true;
    }

    setLang(currentLang);

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    const photoWrapper = document.getElementById('profilePhoto');
    const photoInput = document.getElementById('photoInput');
    photoWrapper.addEventListener('click', () => {
        if (isAdmin) photoInput.click();
    });
    photoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            photoWrapper.innerHTML = `<img src="${ev.target.result}" alt="Profile">`;
            localStorage.setItem('profilePhoto', ev.target.result);
            applyPhotoOffset();
        };
        reader.readAsDataURL(file);
    });

    const savedPhoto = localStorage.getItem('profilePhoto');
    let photoOffset = parseInt(localStorage.getItem('profilePhotoOffset') || '50');

    function applyPhotoOffset() {
        const img = photoWrapper.querySelector('img');
        if (img) img.style.objectPosition = `center ${photoOffset}%`;
    }

    if (savedPhoto) {
        photoWrapper.innerHTML = `<img src="${savedPhoto}" alt="Profile">`;
        applyPhotoOffset();
    }

    document.getElementById('photoUpBtn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if(photoOffset > 0) photoOffset -= 5;
        localStorage.setItem('profilePhotoOffset', photoOffset);
        applyPhotoOffset();
    });

    document.getElementById('photoDownBtn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if(photoOffset < 100) photoOffset += 5;
        localStorage.setItem('profilePhotoOffset', photoOffset);
        applyPhotoOffset();
    });

    const cvUpload = document.getElementById('cv-upload');
    const cvFileInput = document.getElementById('cv-file-input');
    const cvBadge = document.getElementById('cv-badge');
    const cvPreview = document.getElementById('cv-preview');

    cvUpload.addEventListener('click', () => {
        if (isAdmin) cvFileInput.click();
    });

    cvFileInput.addEventListener('change', (e) => {
        if (e.target.files[0]) handleFile(e.target.files[0]);
    });

    cvUpload.addEventListener('dragover', (e) => {
        e.preventDefault();
        cvUpload.classList.add('dragover');
    });
    cvUpload.addEventListener('dragleave', () => cvUpload.classList.remove('dragover'));
    cvUpload.addEventListener('drop', (e) => {
        e.preventDefault();
        cvUpload.classList.remove('dragover');
        if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
    });

    function handleFile(file) {
        if (file.type !== 'application/pdf') return alert('PDF fayl yükləyin');
        showCV(file, file.name, file.size);
        const reader = new FileReader();
        reader.onload = (ev) => {
            localStorage.setItem('cvData', ev.target.result);
            localStorage.setItem('cvName', file.name);
            localStorage.setItem('cvSize', file.size);
        };
        reader.readAsDataURL(file);
    }

    const savedCV = localStorage.getItem('cvData');
    if (savedCV) {
        const byteString = atob(savedCV.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
        const blob = new Blob([ab], { type: 'application/pdf' });
        showCV(blob, localStorage.getItem('cvName') || 'cv.pdf', parseInt(localStorage.getItem('cvSize') || 0));
    }

    cvBadge.addEventListener('click', () => {
        cvBadge.style.display = 'none';
        cvPreview.style.display = 'block';
    });

    document.getElementById('cv-close').addEventListener('click', () => {
        cvPreview.style.display = 'none';
        cvBadge.style.display = 'block';
    });

    document.getElementById('cv-remove').addEventListener('click', () => {
        if (cvBlobUrl) URL.revokeObjectURL(cvBlobUrl);
        cvBlobUrl = null;
        localStorage.removeItem('cvData');
        localStorage.removeItem('cvName');
        localStorage.removeItem('cvSize');
        cvFileInput.value = '';
        cvPreview.style.display = 'none';
        cvBadge.style.display = 'none';
        cvUpload.style.display = 'block';
    });

    document.getElementById('addProjectBtn').addEventListener('click', () => {
        openProjectForm();
    });

    document.getElementById('projectForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('formTitle').value;
        const desc = document.getElementById('formDesc').value;
        const tagsRaw = document.getElementById('formTags').value;
        const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
        const live = document.getElementById('formLive').value;
        const source = document.getElementById('formSource').value;

        if (editingProjectId) {
            const idx = projects.findIndex(p => p.id === editingProjectId);
            if (idx !== -1) {
                projects[idx].title = title;
                projects[idx].desc = typeof projects[idx].desc === 'object' ? { ...projects[idx].desc, [currentLang]: desc } : { az: desc, en: desc, ru: desc };
                projects[idx].tags = tags;
                projects[idx].live = live;
                projects[idx].source = source;
            }
        } else {
            projects.push({
                id: Date.now(),
                title,
                desc: { az: desc, en: desc, ru: desc },
                tags,
                live,
                source
            });
        }

        localStorage.setItem('projects', JSON.stringify(projects));
        closeModal('projectFormModal');
        renderProjects();
    });

    document.getElementById('editContactBtn')?.addEventListener('click', () => {
        document.getElementById('formEmail').value = contacts.email;
        document.getElementById('formWhatsapp').value = contacts.whatsapp;
        document.getElementById('formGithub').value = contacts.github;
        document.getElementById('formLinkedin').value = contacts.linkedin;
        document.getElementById('contactFormModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        contacts = {
            email: document.getElementById('formEmail').value,
            whatsapp: document.getElementById('formWhatsapp').value,
            github: document.getElementById('formGithub').value,
            linkedin: document.getElementById('formLinkedin').value
        };
        localStorage.setItem('contacts', JSON.stringify(contacts));
        renderContacts();
        closeModal('contactFormModal');
    });

    document.getElementById('modalClose').addEventListener('click', () => closeModal('projectModal'));
    document.getElementById('projectFormClose').addEventListener('click', () => closeModal('projectFormModal'));
    document.getElementById('contactFormClose')?.addEventListener('click', () => closeModal('contactFormModal'));

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    fetch('cv.pdf')
        .then(res => {
            if (!res.ok) throw new Error();
            return res.blob();
        })
        .then(blob => {
            if (!localStorage.getItem('cvData')) {
                showCV(blob, 'Umudvar_Khalisli_CV.pdf', blob.size);
            }
        })
        .catch(() => {});
});
