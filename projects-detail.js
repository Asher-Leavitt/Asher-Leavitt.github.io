// project-detail.js - Handles individual project page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const projectType = urlParams.get('type') || 'professional';
    
    // Find the project in the data
    const project = projectsData[projectType].find(p => p.id === projectId);
    
    if (project) {
        // Update page title
        document.title = `${project.title} - Your Name`;
        
        // Set back button link
        const backButton = document.getElementById('back-button');
        backButton.href = projectType === 'professional' ? 'professional.html' : 'personal.html';
        backButton.textContent = `← Back to ${projectType === 'professional' ? 'Professional' : 'Personal'} Projects`;
        
        // Update project title
        document.getElementById('project-title').textContent = project.title;
        
        // Update main image
        const mainImage = document.getElementById('main-image');
        mainImage.src = project.images[0] || project.thumbnail;
        mainImage.alt = project.title;
        
        // Create thumbnails
        const thumbnailContainer = document.getElementById('thumbnail-container');
        thumbnailContainer.innerHTML = '';
        project.images.forEach((image, index) => {
            const thumb = document.createElement('img');
            thumb.src = image;
            thumb.alt = `${project.title} - Image ${index + 1}`;
            thumb.className = index === 0 ? 'thumbnail active' : 'thumbnail';
            thumb.addEventListener('click', function() {
                // Update main image
                mainImage.src = image;
                // Update active thumbnail
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            thumbnailContainer.appendChild(thumb);
        });
        
        // Update description
        document.getElementById('project-full-description').textContent = project.fullDescription;
        
        // Update technical details
        const detailsContainer = document.getElementById('project-details');
        detailsContainer.innerHTML = '';
        if (project.details) {
            Object.entries(project.details).forEach(([key, value]) => {
                const detailItem = document.createElement('div');
                detailItem.className = 'detail-item';
                detailItem.innerHTML = `
                    <span class="detail-label">${key}:</span>
                    <span class="detail-value">${value}</span>
                `;
                detailsContainer.appendChild(detailItem);
            });
        }
        
        // Update skills
        const skillsContainer = document.getElementById('project-skills');
        skillsContainer.innerHTML = '';
        project.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
        
        // Update links
        const linksContainer = document.getElementById('project-links');
        linksContainer.innerHTML = '';
        if (project.links && project.links.length > 0) {
            project.links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.url;
                linkElement.textContent = link.title;
                linkElement.className = 'resource-link';
                linkElement.target = '_blank';
                linksContainer.appendChild(linkElement);
            });
        } else {
            linksContainer.innerHTML = '<p class="no-links">No external resources available</p>';
        }
    } else {
        // Project not found
        document.getElementById('project-title').textContent = 'Project Not Found';
        document.getElementById('project-full-description').textContent = 'The requested project could not be found.';
    }
});