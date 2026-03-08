const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            subtitle: "Computer Engineering Student"
        },
        about: {
            title: "About Me",
            description: "Computer Engineering student based in Ankara, Turkey. Passionate about software development, machine learning, and building innovative solutions."
        },
        experience: {
            title: "Experience",
            "1": {
                title: "Software Developer",
                description: "Building web and mobile applications, working with various clients on custom software solutions."
            }
        },
        projects: {
            title: "Projects",
            viewCode: "View Code",
            viewDemo: "Live Demo"
        },
        skills: {
            title: "Skills",
            languages: "Languages",
            frontend: "Frontend",
            backend: "Backend",
            ml: "Machine Learning",
            tools: "Tools"
        },
        contact: {
            title: "Contact",
            description: "Feel free to reach out to me for collaborations or questions!"
        }
    },
    tr: {
        nav: {
            about: "Hakkımda",
            experience: "Deneyim",
            projects: "Projeler",
            skills: "Yetenekler",
            contact: "İletişim"
        },
        hero: {
            subtitle: "Bilgisayar Mühendisliği Öğrencisi"
        },
        about: {
            title: "Hakkımda",
            description: "Ankara'da yaşayan Bilgisayar Mühendisliği öğrencisi. Yazılım geliştirme, makine öğrenimi ve yenilikçi çözümler üretme konusunda tutkuluyum."
        },
        experience: {
            title: "Deneyim",
            "1": {
                title: "Yazılım Geliştirici",
                description: "Web ve mobil uygulamalar geliştirme, çeşitli müşterilerle özel yazılım çözümleri üzerinde çalışma."
            }
        },
        projects: {
            title: "Projeler",
            viewCode: "Kodu Görüntüle",
            viewDemo: "Canlı Demo"
        },
        skills: {
            title: "Yetenekler",
            languages: "Diller",
            frontend: "Frontend",
            backend: "Backend",
            ml: "Makine Öğrenimi",
            tools: "Araçlar"
        },
        contact: {
            title: "İletişim",
            description: "İşbirliği veya sorularınız için bana ulaşmaktan çekinmeyin!"
        }
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let value = translations[lang];
        for (const key of keys) {
            value = value?.[key];
        }
        if (value) {
            el.textContent = value;
        }
    });
    document.getElementById('langToggle').textContent = lang === 'en' ? 'TR' : 'EN';
    document.documentElement.lang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'tr' : 'en');
});

async function fetchProjects() {
    try {
        const response = await fetch('https://api.github.com/users/surakaya/repos?sort=updated&per_page=10');
        const repos = await response.json();
        
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = '';

        const filteredRepos = repos.filter(repo => !repo.fork || repo.stargazers_count > 0);

        filteredRepos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            const topics = repo.topics?.slice(0, 3) || [];
            const topicsHtml = topics.map(topic => 
                `<span class="project-topic">${topic}</span>`
            ).join('');

            card.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || (currentLang === 'tr' ? 'Açıklama yok' : 'No description')}</p>
                <div class="project-topics">${topicsHtml}</div>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank">${currentLang === 'tr' ? 'Kodu Görüntüle' : 'View Code'}</a>
                </div>
            `;
            
            projectsGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        document.getElementById('projects-grid').innerHTML = '<p>Error loading projects</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    fetchProjects();
});
