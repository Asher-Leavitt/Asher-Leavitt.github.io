// project-detail.js - Handles individual project page functionality with video support

// Helper function to check if file is a video
function isVideoFile(filename) {
    const videoExtensions = ['.mp4', '.mov', '.avi', '.webm', '.mkv'];
    return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}

// Helper function to check if URL is a YouTube link
function isYouTubeLink(url) {
    return url.includes('youtube.com/watch') || url.includes('youtu.be/') || url.includes('youtube.com/embed/');
}

// Helper function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url) {
    let videoId = '';
    let existingParams = '';
    
    if (url.includes('youtube.com/watch')) {
        videoId = url.split('v=')[1];
        if (videoId) {
            const ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition !== -1) {
                existingParams = videoId.substring(ampersandPosition);
                videoId = videoId.substring(0, ampersandPosition);
            }
        }
    } else if (url.includes('youtu.be/')) {
        const urlParts = url.split('youtu.be/')[1];
        if (urlParts) {
            const questionPosition = urlParts.indexOf('?');
            if (questionPosition !== -1) {
                videoId = urlParts.substring(0, questionPosition);
                existingParams = urlParts.substring(questionPosition);
            } else {
                videoId = urlParts;
            }
        }
    } else if (url.includes('youtube.com/embed/')) {
        return url; // Already an embed URL
    }
    
    const baseUrl = `https://www.youtube.com/embed/${videoId}`;
    return existingParams ? baseUrl + existingParams : baseUrl;
}

// Helper function to get YouTube thumbnail
function getYouTubeThumbnail(url) {
    let videoId = '';
    
    if (url.includes('youtube.com/watch')) {
        videoId = url.split('v=')[1];
        if (videoId) {
            const ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition !== -1) {
                videoId = videoId.substring(0, ampersandPosition);
            }
        }
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1];
        if (videoId) {
            const questionPosition = videoId.indexOf('?');
            if (questionPosition !== -1) {
                videoId = videoId.substring(0, questionPosition);
            }
        }
    }
    
    return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : '';
}

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
        
        // Update main media (image, video, or YouTube)
        const mainMediaContainer = document.querySelector('.main-image-container');
        const firstMedia = project.images[0] || project.thumbnail;
        
        if (isYouTubeLink(firstMedia)) {
            const embedUrl = getYouTubeEmbedUrl(firstMedia);
            mainMediaContainer.innerHTML = `
                <iframe id="main-youtube" 
                        src="${embedUrl}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            `;
        } else if (isVideoFile(firstMedia)) {
            mainMediaContainer.innerHTML = `
                <video id="main-video" controls>
                    <source src="${firstMedia}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            mainMediaContainer.innerHTML = `
                <img id="main-image" src="${firstMedia}" alt="${project.title}">
            `;
        }
        
        // Create thumbnails for images, videos, and YouTube links
        const thumbnailContainer = document.getElementById('thumbnail-container');
        thumbnailContainer.innerHTML = '';
        project.images.forEach((media, index) => {
            const isVideo = isVideoFile(media);
            const isYouTube = isYouTubeLink(media);
            
            if (isYouTube) {
                // Create YouTube thumbnail
                const youtubeThumb = document.createElement('div');
                youtubeThumb.className = index === 0 ? 'youtube-thumbnail active' : 'youtube-thumbnail';
                const thumbnailUrl = getYouTubeThumbnail(media);
                youtubeThumb.innerHTML = `
                    <img src="${thumbnailUrl}" alt="YouTube Video">
                    <div class="play-icon youtube-play">▶</div>
                `;
                
                youtubeThumb.addEventListener('click', function() {
                    // Update main media to YouTube iframe
                    const embedUrl = getYouTubeEmbedUrl(media);
                    mainMediaContainer.innerHTML = `
                        <iframe id="main-youtube" 
                                src="${embedUrl}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    `;
                    // Update active thumbnail
                    document.querySelectorAll('.thumbnail, .video-thumbnail, .youtube-thumbnail').forEach(t => t.classList.remove('active'));
                    youtubeThumb.classList.add('active');
                });
                thumbnailContainer.appendChild(youtubeThumb);
            } else if (isVideo) {
                // Create video thumbnail
                const videoThumb = document.createElement('div');
                videoThumb.className = index === 0 ? 'video-thumbnail active' : 'video-thumbnail';
                videoThumb.innerHTML = `
                    <video muted>
                        <source src="${media}" type="video/mp4">
                    </video>
                    <div class="play-icon">▶</div>
                `;
                
                videoThumb.addEventListener('click', function() {
                    // Update main media to video
                    mainMediaContainer.innerHTML = `
                        <video id="main-video" controls autoplay>
                            <source src="${media}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    `;
                    // Update active thumbnail
                    document.querySelectorAll('.thumbnail, .video-thumbnail, .youtube-thumbnail').forEach(t => t.classList.remove('active'));
                    videoThumb.classList.add('active');
                });
                thumbnailContainer.appendChild(videoThumb);
            } else {
                // Create image thumbnail
                const imgThumb = document.createElement('img');
                imgThumb.src = media;
                imgThumb.alt = `${project.title} - Image ${index + 1}`;
                imgThumb.className = index === 0 ? 'thumbnail active' : 'thumbnail';
                imgThumb.addEventListener('click', function() {
                    // Update main media to image
                    mainMediaContainer.innerHTML = `
                        <img id="main-image" src="${media}" alt="${project.title}">
                    `;
                    // Update active thumbnail
                    document.querySelectorAll('.thumbnail, .video-thumbnail, .youtube-thumbnail').forEach(t => t.classList.remove('active'));
                    imgThumb.classList.add('active');
                });
                thumbnailContainer.appendChild(imgThumb);
            }
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