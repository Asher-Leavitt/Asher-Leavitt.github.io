// projects-loader.js - Dynamically loads project cards from data

function loadProjects(type) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Load both professional and personal projects if type is 'all'
    // Otherwise load specific type
    let projects = [];
    if (type === 'all') {
        // Load professional first, then personal
        projects = [...(projectsData.professional || []), ...(projectsData.personal || [])];
    } else {
        projects = projectsData[type] || [];
    }
    
    projects.forEach(project => {
        // Determine project type for URL
        const projectType = projectsData.professional.includes(project) ? 'professional' : 'personal';
        
        const projectCard = document.createElement('a');
        projectCard.href = `project-detail.html?id=${project.id}&type=${projectType}`;
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <div class="project-image-container">
                    <img src="${project.thumbnail}" alt="${project.title}">
                </div>
            </div>
            <div class="project-overlay">
                <h3 class="overlay-title">${project.title}</h3>
                <div class="project-tags">
                    ${project.skills.slice(0, 4).map(skill => `<span>${skill}</span>`).join('')}
                </div>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

// Load featured projects for homepage - shows 3 total projects
function loadFeaturedProjects() {
    const container = document.getElementById('featured-projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Combine professional and personal, with professional first
    const allProjects = [...(projectsData.professional || []), ...(projectsData.personal || [])];
    
    // Take only the first 3 projects (will prioritize professional since they come first)
    const featured = allProjects.slice(0, 3);
    
    featured.forEach(project => {
        // Determine project type for URL
        const projectType = projectsData.professional.includes(project) ? 'professional' : 'personal';
        
        const projectCard = document.createElement('a');
        projectCard.href = `project-detail.html?id=${project.id}&type=${projectType}`;
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <div class="project-image-container">
                    <img src="${project.thumbnail}" alt="${project.title}">
                </div>
            </div>
            <div class="project-overlay">
                <h3 class="overlay-title">${project.title}</h3>
                <div class="project-tags">
                    ${project.skills.slice(0, 3).map(skill => `<span>${skill}</span>`).join('')}
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
        // Load only professional projects on professional page
        loadProjects('professional');
    } else if (currentPage === 'personal.html') {
        // Load only personal projects on personal page
        loadProjects('personal');
    }
});