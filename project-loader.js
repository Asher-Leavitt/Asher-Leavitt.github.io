// projects-loader.js - Dynamically loads project cards from data

function loadProjects(type) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    const projects = projectsData[type] || [];
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <div class="project-image-container">
                <img src="${project.thumbnail}" alt="${project.title}">
                <div class="project-overlay">
                    <p class="project-description">${project.shortDescription}</p>
                    <div class="project-tags">
                        ${project.skills.slice(0, 4).map(skill => `<span>${skill}</span>`).join('')}
                    </div>
                    <a href="project-detail.html?id=${project.id}&type=${type}" class="view-project-btn">View Project →</a>
                </div>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

// Load featured projects for homepage
function loadFeaturedProjects() {
    const container = document.getElementById('featured-projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    // Get first 3 professional projects as featured
    const featured = projectsData.professional.slice(0, 3);
    
    featured.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <div class="project-image-container">
                <img src="${project.thumbnail}" alt="${project.title}">
                <div class="project-overlay">
                    <p class="project-description">${project.shortDescription}</p>
                    <div class="project-tags">
                        ${project.skills.slice(0, 3).map(skill => `<span>${skill}</span>`).join('')}
                    </div>
                    <a href="project-detail.html?id=${project.id}&type=professional" class="view-project-btn">View Project →</a>
                </div>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        loadFeaturedProjects();
    } else if (currentPage === 'professional.html') {
        loadProjects('professional');
    } else if (currentPage === 'personal.html') {
        loadProjects('personal');
    }
});