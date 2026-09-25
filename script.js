const translations = {

    tr: {

        navAbout: "Hakkımda",
        navEducation: "Eğitim",
        navFeatured: "Çalışmalar",
        navSkills: "Yetenekler",
        navExperience: "Deneyim",

        heroTag: "BİLGİSAYAR MÜHENDİSLİĞİ",

        heroDescription:
            "Yapay zeka ve veri odaklı çözümleri üretime uygun backend sistemlerine dönüştürmeye odaklanan bilgisayar mühendisliği son sınıf öğrencisiyim. Ölçeklenebilir API'ler ve veri işleme sistemleri geliştirerek gerçek dünya problemlerine çözüm üretmeyi hedefliyorum.",


        educationTitle: "Eğitim",

        educationSchool: "Kastamonu Üniversitesi",

        educationDegree:
            "Bilgisayar Mühendisliği Lisans",


        featuredTitle: "Öne Çıkan Çalışmalar",


        /* CHURNGUARD */

        fw1Repo: "GitHub'da Aç",

        fw1Title:
            "Uçtan Uca Müşteri Kayıp (Churn) Tahmin Sistemi",

        fw1Li1:
            "Logistic Regression modeli geliştirildi (ROC-AUC yaklaşık 0.85); eğitim pipeline'ı notebook'tan ayrıştırılarak üretim koduna taşındı ve model sürümleme/metadata yapısı kuruldu.",

        fw1Li2:
            "FastAPI üzerinde çalışan inference servisi geliştirildi; strict input validation, şema kontratı, hata senaryoları ve logging (latency + model version) eklendi.",

        fw1Li3:
            "Docker ile containerize edilip healthcheck ve smoke test içeren, local ortamdan bağımsız çalıştırılabilir ML API haline getirildi.",


        /* TASK TRACKER */

        fw2Repo: "GitHub'da Aç",

        fw2Title:
            "Full-Stack Task Management System",

        fw2Li1:
            "Next.js App Router tabanlı backend ve React + Vite frontend kullanılarak full-stack görev yönetim uygulaması geliştirildi.",

        fw2Li2:
            "Kullanıcı kayıt, login, logout ve Bearer Token tabanlı authentication yapısı oluşturuldu; görevler için CRUD işlemleri ve validation uygulandı.",

        fw2Li3:
            "Prisma ORM ve MySQL kullanılarak ilişkisel veritabanı mimarisi oluşturuldu; migration yapısı ve User, Session, Task, Room ve RoomMember ilişkileri kuruldu.",


        /* SUPPORTFLOW */

        fw3Repo: "GitHub'da Aç",

        fw3Title:
            "AI Destekli Multi-Tenant Support Platformu",

        fw3Li1:
            "Destek taleplerinin manuel kategori ve aciliyet belirleme sürecini otomatikleştirmek için FastAPI, MySQL ve Docker kullanarak multi-tenant backend mimarisi kuruldu.",

        fw3Li2:
            "API key doğrulama, rate limiting ve DB seviyesinde idempotency implement edildi.",

        fw3Li3:
            "Ticket mesajları TF-IDF + Logistic Regression modeli ile kategori ve urgency açısından sınıflandırılıp gerçek zamanlı olarak sisteme entegre edildi.",


        /* SKILLS */

        skillsTitle: "Teknik Beceriler",

        skillsLanguages: "Languages",

        skillsBackend: "Backend & API",

        skillsML: "Machine Learning",

        skillsDatabase: "Database",

        skillsTools: "Tools & Frontend",


        /* EXPERIENCE */

        experienceTitle: "Deneyim",

        expRole:
            "Yapay Zeka Topluluğu Başkan Yardımcılığı",

        expLi1:
            "Makine Öğrenmesi ve Derin Öğrenme odaklı atölyelerin düzenlenmesi.",

        expLi2:
            "Öğrencilere yönelik teknik öğrenme süreçlerinin desteklenmesi."

    },


    en: {

        navAbout: "About",
        navEducation: "Education",
        navFeatured: "Featured",
        navSkills: "Skills",
        navExperience: "Experience",


        heroTag: "COMPUTER ENGINEERING",

        heroDescription:
            "I am a senior computer engineering student focused on turning AI and data-driven ideas into production-ready backend systems. I aim to solve real-world problems by building scalable APIs and data processing pipelines.",


        educationTitle: "Education",

        educationSchool:
            "Kastamonu University",

        educationDegree:
            "B.Sc. in Computer Engineering",


        featuredTitle: "Featured Work",


        /* CHURNGUARD */

        fw1Repo: "View on GitHub",

        fw1Title:
            "End-to-End Customer Churn Prediction System",

        fw1Li1:
            "Built a Logistic Regression model (ROC-AUC ~0.85); separated the training pipeline from notebooks into production code with model versioning and metadata.",

        fw1Li2:
            "Implemented a FastAPI inference service with strict input validation, schema contracts, error handling, and logging for latency and model version.",

        fw1Li3:
            "Containerized the service with Docker and added healthchecks and smoke tests for environment-independent execution.",


        /* TASK TRACKER */

        fw2Repo: "View on GitHub",

        fw2Title:
            "Full-Stack Task Management System",

        fw2Li1:
            "Built a full-stack task management application using a Next.js App Router backend and React + Vite frontend.",

        fw2Li2:
            "Implemented user registration, login, logout, Bearer Token authentication, CRUD operations, and task validation.",

        fw2Li3:
            "Designed a relational database architecture using Prisma ORM and MySQL, including migrations and User, Session, Task, Room, and RoomMember relationships.",


        /* SUPPORTFLOW */

        fw3Repo: "View on GitHub",

        fw3Title:
            "AI-Powered Multi-Tenant Support Platform",

        fw3Li1:
            "Built a multi-tenant backend architecture with FastAPI, MySQL, and Docker to automate ticket category and urgency classification.",

        fw3Li2:
            "Implemented API key validation, rate limiting, and database-level idempotency.",

        fw3Li3:
            "Integrated TF-IDF + Logistic Regression to classify ticket category and urgency in real time.",


        /* SKILLS */

        skillsTitle: "Technical Skills",

        skillsLanguages: "Languages",

        skillsBackend: "Backend & API",

        skillsML: "Machine Learning",

        skillsDatabase: "Database",

        skillsTools: "Tools & Frontend",


        /* EXPERIENCE */

        experienceTitle: "Experience",

        expRole:
            "Vice President, AI Community",

        expLi1:
            "Organized workshops focused on Machine Learning and Deep Learning.",

        expLi2:
            "Supported students in technical learning processes."

    }

};


let currentLang =
    localStorage.getItem("lang") || "tr";


function applyTranslations(lang) {

    const map =
        translations[lang] || translations.tr;


    Object.entries(map).forEach(
        ([id, value]) => {

            const el =
                document.getElementById(id);

            if (el) {
                el.textContent = value;
            }

        }
    );


    document.documentElement.lang = lang;


    const toggle =
        document.getElementById("langToggle");


    if (toggle) {

        toggle.textContent =
            lang === "tr" ? "EN" : "TR";

    }

}


function setLanguage(lang) {

    currentLang = lang;

    localStorage.setItem(
        "lang",
        lang
    );

    applyTranslations(lang);

}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const toggle =
            document.getElementById(
                "langToggle"
            );


        if (toggle) {

            toggle.addEventListener(
                "click",
                () => {

                    setLanguage(
                        currentLang === "tr"
                            ? "en"
                            : "tr"
                    );

                }
            );

        }


        setLanguage(currentLang);

    }
);
