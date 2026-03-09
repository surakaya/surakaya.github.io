async function fetchProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    try {
        const response = await fetch('https://api.github.com/users/surakaya/repos?sort=updated&per_page=8');
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();
        const filteredRepos = repos
            .filter((repo) => !repo.fork)
            .slice(0, 6);

        projectsGrid.innerHTML = '';

        filteredRepos.forEach((repo) => {
            const card = document.createElement('article');
            card.className = 'project-card';

            const topics = (repo.topics || []).slice(0, 3);
            const topicsHtml = topics
                .map((topic) => `<span class="project-topic">${topic}</span>`)
                .join('');

            card.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank" rel="noreferrer">${repo.name}</a></h3>
                <p>${repo.description || 'Açıklama bulunmuyor.'}</p>
                <div class="project-topics">${topicsHtml}</div>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank" rel="noreferrer">Kodu Gör</a>
                </div>
            `;

            projectsGrid.appendChild(card);
        });

        if (!filteredRepos.length) {
            projectsGrid.innerHTML = '<p class="loading-text">Henüz listelenecek proje bulunamadı.</p>';
        }
    } catch (error) {
        console.error(error);
        projectsGrid.innerHTML = '<p class="loading-text">Projeler şu anda yüklenemiyor.</p>';
    }
}

document.addEventListener('DOMContentLoaded', fetchProjects);
