const translations = {
    tr: {
        navAbout: "Hakkımda",
        navEducation: "Eğitim",
        navFeatured: "Çalışmalar",
        navProjects: "Projeler",
        navSkills: "Yetenekler",
        navExperience: "Deneyim",
        heroTag: "BİLGİSAYAR MÜHENDİSLİĞİ ÖĞRENCİSİ ",
        heroDescription: "Yapay zeka ve veri odaklı çözümleri üretime uygun backend sistemlerine dönüştürmeye odaklanan bilgisayar mühendisliği son sınıf öğrencisiyim. Ölçeklenebilir API'ler ve veri işleme sistemleri geliştirerek gerçek dünya problemlerine çözüm üretmeyi hedefliyorum.",
        educationTitle: "Eğitim",
        educationSchool: "Kastamonu Üniversitesi",
        educationDegree: "Bilgisayar Mühendisliği Lisans",
        featuredTitle: "Öne Çıkan Çalışmalar",
        fw1Title: "Uçtan Uca Müşteri Kayıp (Churn) Tahmin Sistemi",
        fw1Li1: "Logistic Regression modeli geliştirildi (ROC-AUC yaklaşık 0.85); eğitim pipeline'ı notebook'tan ayrıştırılarak üretim koduna taşındı ve model sürümleme/metadata yapısı kuruldu.",
        fw1Li2: "FastAPI üzerinde çalışan inference servisi geliştirildi; strict input validation, şema kontratı, hata senaryoları ve logging (latency + model version) eklendi.",
        fw1Li3: "Docker ile containerize edilip healthcheck ve smoke test içeren, local ortamdan bağımsız çalıştırılabilir ML API haline getirildi.",
        fw2Title: "AI Destekli Multi-Tenant Support Platformu",
        fw2Li1: "Destek taleplerinin manuel kategori ve aciliyet belirleme sürecini otomatikleştirmek için FastAPI, MySQL ve Docker kullanarak multi-tenant backend mimarisi kuruldu.",
        fw2Li2: "API key doğrulama, rate limiting ve DB seviyesinde idempotency implement edildi.",
        fw2Li3: "Ticket mesajları TF-IDF + Logistic Regression modeli ile kategori ve urgency açısından sınıflandırılıp gerçek zamanlı olarak sisteme entegre edildi.",
        projectsTitle: "Projeler",
        projectsSubtitle: "Diğer Çalışmalar",
        skillsTitle: "Teknik Beceriler",
        skillsLanguages: "Languages",
        skillsBackend: "Backend",
        skillsML: "Machine Learning",
        skillsDatabase: "Database",
        skillsTools: "Tools",
        experienceTitle: "Deneyim",
        expRole: "Yapay Zeka Topluluğu Başkan Yardımcılığı",
        expLi1: "Makine Öğrenmesi ve Derin Öğrenme odaklı atölyelerin düzenlenmesi.",
        expLi2: "Öğrencilere yönelik teknik öğrenme süreçlerinin desteklenmesi.",
        projectLink: "GitHub'da Aç"
    },
    en: {
        navAbout: "About",
        navEducation: "Education",
        navFeatured: "Featured",
        navProjects: "Projects",
        navSkills: "Skills",
        navExperience: "Experience",
        heroTag: "COMPUTER ENGINEERING STUDENT | AI & BACKEND DEVELOPER",
        heroDescription: "I am a senior computer engineering student focused on turning AI and data-driven ideas into production-ready backend systems. I aim to solve real-world problems by building scalable APIs and data processing pipelines.",
        educationTitle: "Education",
        educationSchool: "Kastamonu University",
        educationDegree: "B.Sc. in Computer Engineering",
        featuredTitle: "Featured Work",
        fw1Title: "End-to-End Customer Churn Prediction System",
        fw1Li1: "Built a Logistic Regression model (ROC-AUC ~0.85); separated the training pipeline from notebooks into production code with model versioning/metadata.",
        fw1Li2: "Implemented a FastAPI inference service with strict input validation, schema contracts, error scenarios, and logging (latency + model version).",
        fw1Li3: "Containerized with Docker and added healthcheck/smoke tests to run as an environment-independent ML API.",
        fw2Title: "AI-Powered Multi-Tenant Support Platform",
        fw2Li1: "Built a multi-tenant backend architecture with FastAPI, MySQL, and Docker to automate manual ticket category/urgency classification.",
        fw2Li2: "Implemented API key validation, rate limiting, and DB-level idempotency.",
        fw2Li3: "Integrated TF-IDF + Logistic Regression to classify ticket category and urgency in real time.",
        projectsTitle: "Projects",
        projectsSubtitle: "Other Work",
        skillsTitle: "Technical Skills",
        skillsLanguages: "Languages",
        skillsBackend: "Backend",
        skillsML: "Machine Learning",
        skillsDatabase: "Database",
        skillsTools: "Tools",
        experienceTitle: "Experience",
        expRole: "Vice President, AI Community",
        expLi1: "Organized workshops focused on Machine Learning and Deep Learning.",
        expLi2: "Supported students in technical learning processes.",
        projectLink: "View on GitHub"
    }
};

const staticProjects = {
    tr: [
        {
            name: "car-price-prediction-knn",
            description: "Python ve K-NN kullanarak araç fiyat tahmini projesi.",
            topics: ["Python", "KNN", "Jupyter Notebook"],
            url: "https://github.com/surakaya/car-price-prediction-knn"
        },
        {
            name: "e-commerceAnalysis",
            description: "E-ticaret müşteri davranışını analiz eden makine öğrenmesi projesi.",
            topics: ["Machine Learning", "Random Forest", "Decision Tree"],
            url: "https://github.com/surakaya/e-commerceAnalysis"
        },
        {
            name: "cinevia-movie-app",
            description: "Java ile geliştirilmiş Android tabanlı film keşif uygulaması.",
            topics: ["Java", "Android", "Mobile"],
            url: "https://github.com/surakaya/cinevia-movie-app"
        }
    ],
    en: [
        {
            name: "car-price-prediction-knn",
            description: "A car price prediction project using Python and K-NN.",
            topics: ["Python", "KNN", "Jupyter Notebook"],
            url: "https://github.com/surakaya/car-price-prediction-knn"
        },
        {
            name: "e-commerceAnalysis",
            description: "A machine learning project for analyzing e-commerce customer behavior.",
            topics: ["Machine Learning", "Random Forest", "Decision Tree"],
            url: "https://github.com/surakaya/e-commerceAnalysis"
        },
        {
            name: "cinevia-movie-app",
            description: "A movie discovery mobile app developed with Java for Android.",
            topics: ["Java", "Android", "Mobile"],
            url: "https://github.com/surakaya/cinevia-movie-app"
        }
    ]
};

let currentLang = localStorage.getItem("lang") || "tr";

function applyTranslations(lang) {
    const map = translations[lang] || translations.tr;

    Object.entries(map).forEach(([id, value]) => {
        if (id === "projectLink") return;
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    });

    document.documentElement.lang = lang;
    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = lang === "tr" ? "EN" : "TR";
}

function renderProjects(lang) {
    const projectsGrid = document.getElementById("projects-grid");
    if (!projectsGrid) return;

    const projectList = staticProjects[lang] || staticProjects.tr;
    const projectLinkText = translations[lang]?.projectLink || translations.tr.projectLink;

    projectsGrid.innerHTML = "";

    projectList.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const topicsHtml = project.topics
            .map((topic) => `<span class="project-topic">${topic}</span>`)
            .join("");

        card.innerHTML = `
            <h3><a href="${project.url}" target="_blank" rel="noreferrer">${project.name}</a></h3>
            <p>${project.description}</p>
            <div class="project-topics">${topicsHtml}</div>
            <div class="project-links">
                <a href="${project.url}" target="_blank" rel="noreferrer">${projectLinkText}</a>
            </div>
        `;

        projectsGrid.appendChild(card);
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
    renderProjects(lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("langToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            setLanguage(currentLang === "tr" ? "en" : "tr");
        });
    }

    setLanguage(currentLang);
});
