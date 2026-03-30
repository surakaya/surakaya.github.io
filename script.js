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
        fw1Li1: "Logistic Regression modeli geliştirdim (ROC-AUC ~0.85); eğitim pipeline'ını notebook'tan ayırıp üretim koduna taşıdım ve model sürümleme/metadata yapısını kurdum.",
        fw1Li2: "FastAPI üzerinde inference servisi geliştirdim; strict input validation, şema kontratı, hata senaryoları ve logging ekledim.",
        fw1Li3: "Docker ile containerize ederek local ortamdan bağımsız ML API haline getirdim.",
        fw2Title: "AI Destekli Multi-Tenant Support Platformu",
        fw2Li1: "FastAPI, MySQL ve Docker kullanarak multi-tenant backend mimarisi kurdum.",
        fw2Li2: "API key doğrulama, rate limiting ve DB seviyesinde idempotency implement ettim.",
        fw2Li3: "Ticket mesajlarını TF-IDF + Logistic Regression ile sınıflandırıp gerçek zamanlı entegre ettim.",
        fw3Title: "FinTech Backtesting ve Strateji Analizi Dashboard’u",
        fw3Li1: "Algoritmik alım-satım stratejilerini test ederek portföy performansını simüle ettim.",
        fw3Li2: "Sharpe ratio, max drawdown ve win rate ile stratejileri analiz ettim.",
        fw3Li3: "Streamlit ile interaktif bir dashboard geliştirdim.",
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
        heroTag: "COMPUTER ENGINEERING",
        heroDescription: "I am a senior computer engineering student focused on turning AI and data-driven ideas into production-ready backend systems. I aim to solve real-world problems by building scalable APIs and data processing pipelines.",
        educationTitle: "Education",
        educationSchool: "Kastamonu University",
        educationDegree: "B.Sc. in Computer Engineering",
        featuredTitle: "Featured Work",
        fw1Title: "End-to-End Customer Churn Prediction System",
        fw1Li1: "Built a Logistic Regression model (ROC-AUC ~0.85); separated the training pipeline from notebooks into production code and set up model versioning/metadata.",
        fw1Li2: "Developed a FastAPI inference service with strict input validation, schema contracts, error handling, and logging.",
        fw1Li3: "Containerized with Docker, including healthchecks and smoke tests to run as an environment-independent ML API.",
        fw2Title: "AI-Powered Multi-Tenant Support Platform",
        fw2Li1: "Built a multi-tenant backend architecture with FastAPI, MySQL, and Docker.",
        fw2Li2: "Implemented API key validation, rate limiting, and DB-level idempotency.",
        fw2Li3: "Integrated TF-IDF + Logistic Regression to classify ticket messages in real time.",
        fw3Title: "FinTech Backtesting and Strategy Analysis Dashboard",
        fw3Li1: "Tested algorithmic trading strategies on financial data and simulated portfolio performance.",
        fw3Li2: "Analyzed strategy effectiveness using Sharpe ratio, max drawdown, and win rate metrics.",
        fw3Li3: "Developed an interactive Streamlit dashboard.",
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

// Dil değiştirme
const langToggle = document.getElementById("langToggle");
let currentLang = "tr";

function setLanguage(lang) {
    currentLang = lang;
    for (const [key, value] of Object.entries(translations[lang])) {
        const el = document.getElementById(key);
        if (el) el.textContent = value;
    }
    renderProjects();
}

langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "tr" ? "en" : "tr");
    langToggle.textContent = currentLang === "tr" ? "TR" : "EN";
});

window.addEventListener("DOMContentLoaded", () => setLanguage(currentLang));

// Projeler
const staticProjects = {
    tr: [
        { name: "car-price-prediction-knn", description: "Python ve K-NN kullanarak araç fiyat tahmini projesi.", url: "https://github.com/surakaya/car-price-prediction-knn" },
        { name: "e-commerceAnalysis", description: "E-ticaret müşteri davranışları analizi.", url: "https://github.com/surakaya/e-commerceAnalysis" }
    ],
    en: [
        { name: "car-price-prediction-knn", description: "Car price prediction project using Python and K-NN.", url: "https://github.com/surakaya/car-price-prediction-knn" },
        { name: "e-commerceAnalysis", description: "E-commerce customer behavior analysis.", url: "https://github.com/surakaya/e-commerceAnalysis" }
    ]
};

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    grid.innerHTML = "";
    staticProjects[currentLang].forEach(proj => {
        const div = document.createElement("div");
        div.className = "project-card";
        div.innerHTML = `<h3>${proj.name}</h3><p>${proj.description}</p><a href="${proj.url}" target="_blank">${translations[currentLang].projectLink}</a>`;
        grid.appendChild(div);
    });
}
