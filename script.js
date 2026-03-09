const staticProjects = [
    {
        name: "churnguard-api",
        description: "Uctan uca musteri kayip (churn) tahmin sistemi. FastAPI uzerinde model inference servisi ve Docker tabanli calisma.",
        topics: ["FastAPI", "ML", "Docker"],
        url: "https://github.com/surakaya/churnguard-api"
    },
    {
        name: "AI Destekli Multi-Tenant Support Platformu",
        description: "Destek taleplerini kategori ve aciliyet acisindan siniflandiran, multi-tenant backend mimarisi ile gelistirilmis proje.",
        topics: ["FastAPI", "MySQL", "TF-IDF"],
        url: "https://github.com/surakaya"
    },
    {
        name: "GitHub Repositories",
        description: "Diger tum projelerimi ve guncel repo listemi GitHub profilimde bulabilirsin.",
        topics: ["GitHub", "Portfolio"],
        url: "https://github.com/surakaya?tab=repositories"
    }
];

function renderProjects() {
    const projectsGrid = document.getElementById("projects-grid");
    if (!projectsGrid) return;

    projectsGrid.innerHTML = "";

    staticProjects.forEach((project) => {
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
                <a href="${project.url}" target="_blank" rel="noreferrer">GitHub'da Ac</a>
            </div>
        `;

        projectsGrid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderProjects);
