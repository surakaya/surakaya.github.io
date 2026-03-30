const translations = {
    tr: {
        navAbout: "Hakkımda",
        navEducation: "Eğitim",
        navFeatured: "Çalışmalar",
        navProjects: "Projeler",
        navSkills: "Yetenekler",
        navExperience: "Deneyim",
        heroTag: "BİLGİSAYAR MÜHENDİSLİĞİ",
        heroDescription: "Yapay zeka ve veri odaklı çözümleri üretime uygun backend sistemlerine dönüştürmeye odaklanan bilgisayar mühendisliği son sınıf öğrencisiyim. Ölçeklenebilir API'ler ve veri işleme sistemleri geliştirerek gerçek dünya problemlerine çözüm üretmeyi hedefliyorum.",
        educationTitle: "Eğitim",
        educationSchool: "Kastamonu Üniversitesi",
        educationDegree: "Bilgisayar Mühendisliği Lisans",
        featuredTitle: "Öne Çıkan Çalışmalar",
        fw1Title: "Uçtan Uca Müşteri Kayıp (Churn) Tahmin Sistemi",
        fw1Li1: "Logistic Regression modeli geliştirdim (ROC-AUC yaklaşık 0.85); eğitim pipeline'ını notebook'tan ayırıp üretim koduna taşıdım ve model sürümleme/metadata yapısını kurdum.",
        fw1Li2: "FastAPI üzerinde inference servisi geliştirdim; strict input validation, şema kontratı, hata senaryoları ve logging (latency + model version) ekledim.",
        fw1Li3: "Docker ile containerize ederek healthcheck ve smoke test içeren, local ortamdan bağımsız çalıştırılabilir ML API haline getirdim.",
        fw2Title: "AI Destekli Multi-Tenant Support Platformu",
        fw2Li1: "Destek taleplerinin manuel kategori ve aciliyet belirleme sürecini otomatikleştirmek için FastAPI, MySQL ve Docker kullanarak multi-tenant backend mimarisi kurdum.",
        fw2Li2: "API key doğrulama, rate limiting ve DB seviyesinde idempotency implement ettim.",
        fw2Li3: "Ticket mesajlarını TF-IDF + Logistic Regression modeli ile kategori ve urgency açısından sınıflandırıp gerçek zamanlı olarak sisteme entegre ettim.",
        fw3Title: "FinTech Backtesting ve Strateji Analizi Dashboard’u",
        fw3Li1: "Finansal veriler üzerinde algoritmik alım-satım stratejilerini test ederek portföy performansını simüle ettim.",
        fw3Li2: "Sharpe ratio, max drawdown ve win rate gibi metriklerle stratejilerin etkinliğini analiz ettim ve karşılaştırmalı raporlar hazırladım.",
        fw3Li3: "Streamlit ile interaktif bir dashboard geliştirdim; kullanıcılar stratejileri seçip performans grafiklerini anlık görebiliyor.",
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
        expLi1: "Makine Öğrenmesi ve Derin Öğrenme odaklı atölyelerin düzenlenmesini sağladım.",
        expLi2: "Öğrencilere yönelik teknik öğrenme süreçlerini destekledim.",
        projectLink: "GitHub'da Aç"
    },
    en: {
        navAbout: "About",
        navEducation: "Education",
        navFeatured: "Featured",
        navProjects: "Projects",
        navSkills: "Skills",
        navExperience: "Experience",
        heroTag: "COMPUTER ENGINEERING",
        heroDescription: "I am a senior computer engineering student focused on turning AI and data-driven ideas into production-ready backend systems. I aim to solve real-world problems by building scalable APIs and data processing pipelines.",
        educationTitle: "Education",
        educationSchool: "Kastamonu University",
        educationDegree: "B.Sc. in Computer Engineering",
        featuredTitle: "Featured Work",
        fw1Title: "End-to-End Customer Churn Prediction System",
        fw1Li1: "Built a Logistic Regression model (ROC-AUC ~0.85); separated the training pipeline from notebooks into production code and set up model versioning/metadata.",
        fw1Li2: "Developed a FastAPI inference service with strict input validation, schema contracts, error handling, and logging (latency + model version).",
        fw1Li3: "Containerized with Docker, including healthchecks and smoke tests to run as an environment-independent ML API.",
        fw2Title: "AI-Powered Multi-Tenant Support Platform",
        fw2Li1: "Built a multi-tenant backend architecture with FastAPI, MySQL, and Docker to automate ticket category and urgency classification.",
        fw2Li2: "Implemented API key validation, rate limiting, and DB-level idempotency.",
        fw2Li3: "Integrated TF-IDF + Logistic Regression to classify ticket category and urgency in real time.",
        fw3Title: "FinTech Backtesting and Strategy Analysis Dashboard",
        fw3Li1: "Tested algorithmic trading strategies on financial data and simulated portfolio performance.",
        fw3Li2: "Analyzed strategy effectiveness using Sharpe ratio, max drawdown, and win rate metrics and prepared comparative reports.",
        fw3Li3: "Developed an interactive Streamlit dashboard; users can select strategies and view performance charts in real time.",
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

// Dil değiştirme fonksiyonu
const langToggle = document.getElementById("langToggle");
let currentLang = "tr";

function setLanguage(lang) {
    currentLang = lang;
    for (const [key, value] of Object.entries(translations[lang])) {
        const el = document.getElementById(key);
        if (el) el.textContent = value;
    }
}

langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "tr" ? "en" : "tr");
    langToggle.textContent = currentLang === "tr" ? "TR" : "EN";
});

// Sayfa yüklenince varsayılan dil
window.addEventListener("DOMContentLoaded", () => setLanguage(currentLang));

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
