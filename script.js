const staticProjects = [
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
                <a href="${project.url}" target="_blank" rel="noreferrer">GitHub'da Aç</a>
            </div>
        `;

        projectsGrid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderProjects);
